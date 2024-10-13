<script setup>
//--- --- Vue ---------------------------------------------------------------------------------------------------------
import {computed, onMounted, reactive, ref, watch} from "vue";

//--- --- Components --------------------------------------------------------------------------------------------------
import Icon from "./base/Icon.vue";

//--- --- Composables -------------------------------------------------------------------------------------------------
import {useManagesLoadedData} from "../composables/useManagesLoadedData.js";
import {useEventBus} from "../composables/useEventBus.js";

//--- --- Helpers -----------------------------------------------------------------------------------------------------
import translateHelpers from "../helpers/translateHelpers.js";
import helpers from "../helpers/helpers.js";
import {Column} from "../ViewModels/Column.js";
import {Rows} from "../ViewModels/Rows.js";
import {TableData} from "../ViewModels/TableData.js";
import TableCell from "./TableCell.vue";
import {TableStyling} from "../ViewModels/TableStyling.js";

//=====================================================================================================================
//--- --- Setup -------------------------------------------------------------------------------------------------------
//=====================================================================================================================
const emits = defineEmits(['row-click']);

const props = defineProps({
    // An array of rows with the raw data
    rows: {
        type: Array,
        required: true,
    },

    //an array of Column instances
    columns: {
        type: Array,
        required: true,
        validator: value => value.every(column => column instanceof Column)
    },
});

let tableData = ref(null);
let tableContainer = ref(null);
let sortKey = ref(null);
let ascendingSort = ref(false);
let tableStyling = ref(null);
tableStyling.value = new TableStyling();

let showSearch = ref(false);

let eventBus = useEventBus();

//todo: remove managesLoadedData
//let managesLoadedData = useManagesLoadedData();

//--- --- Computed ----------------------------------------------------------------------------------------------------

const visibleColumns = computed(() => tableData.value.visibleColumns);

const hasNumericColumns = computed(() => {
    return visibleColumns.value.some(column => column.isNumeric);
});

//--- --- Methods -----------------------------------------------------------------------------------------------------

function sortBy(key) {
    ascendingSort.value = (sortKey.value === key)
        ? !ascendingSort.value //  toggle the sorting direction if already sorting by this column
        : true; //else, sort by this column in ascending direction

    // mark this column as the column we are sorting by
    sortKey.value = key;

    let sortedRows = managesLoadedData.getAllData().sort((a, b) =>
        sort(a[sortKey.value], b[sortKey.value], ascendingSort.value)
    );

    managesLoadedData.setData(sortedRows);
}

function sort(a, b, ascending) {
    if (a === null || a === undefined) a = '';
    if (b === null || b === undefined) b = '';

    if (!ascending) [a, b] = [b, a]

    //numeric sort
    if (helpers.isNumericValue(a) && helpers.isNumericValue(b)) return b - a;

    //date sort
    if (helpers.isDate(a) && helpers.isDate(b))
        return (helpers.parseDate(a).getTime() > helpers.parseDate(b).getTime()) ? 1 : -1;

    //string sort
    return a.localeCompare(b);
}

//--- Event handlers --------------------------------------------------------------------------------------------------

function handleTableStyleEvent(data) {
    tableStyling.value.setRowSize(data.newRowSize)
        .setColorDigits(data.newDigitsColor === 'color'); //todo: newDigitsColor is 'black' / 'color' - change this to boolean
}

//todo: fix this - this handles updates in columns, coming from the TableControls component
function handleTableColumnsEvent(data) {
    tableData.value.columns = data;
}

function handleToggleSearchEvent() {
    showSearch.value = !showSearch.value

    //reset the search terms when the search is closed
    if (!showSearch.value)
        tableData.value.clearSearch();
}

function handleRowClick(row) {
    emits('row-click', row);
}

//--- Table complications (sum, sorting, searching etc.) --------------------------------------------------------------

function columnSum(column) {
    return column.isNumeric ? helpers.formatNumber(column.sum(tableData.value.rows)) : '';
}

//--- Table design ----------------------------------------------------------------------------------------------------

function setTableHeight(marginBottom = 10) {
    //calculate the height from the top of the table to the bottom of the window
    tableContainer.value.style.maxHeight = `${window.innerHeight - tableContainer.value.getBoundingClientRect().top - marginBottom}px`;
    //tableContainer.value.style.maxHeight = '75vh';
}

//--- Infinity scroll -------------------------------------------------------------------------------------------------

function handleReachedBottom() {
    tableData.value.rows.loadRows();
}

//--- --- Created -----------------------------------------------------------------------------------------------------
eventBus.addEventHandler('update-table-style-event', handleTableStyleEvent);
eventBus.addEventHandler('update-table-columns-event', handleTableColumnsEvent);
eventBus.addEventHandler('toggle-search-event', handleToggleSearchEvent);

//initialize the table data and trigger the sync-table-columns-event (to update the TableControls component)
tableData.value = TableData.create(props.columns, props.rows);
eventBus.triggerEvent('sync-table-columns-event', tableData.value.columns);

//--- --- Mounted -----------------------------------------------------------------------------------------------------
onMounted(() => setTableHeight());

</script>

<template>
    <div ref="tableContainer" class="table-container">
        <table>
            <!-- --- Header ------------------------------------------------------------------------------------------>
            <thead class="table-columns">
                <!-- --- Columns ------------------------------------------------------------------------------------->
                <tr class="table-columns-row">
                    <th v-for="column in visibleColumns" @click="sortBy(column.key)">
                        <div class="columns-row-item" :class="column.isNumeric ? 'numeric' : ''">
                            <span v-text="column.label"></span>

                            <icon icon="sort"
                                  class="columns-row-item-icon"
                                  :class="`${sortKey === column.key ? 'selected' : ''}`"
                            ></icon>
                        </div>
                    </th>
                </tr>

                <!-- --- Delimiter ----------------------------------------------------------------------------------->
                <tr v-if="hasNumericColumns"><th class="delimiter" v-for="column in visibleColumns"></th></tr>

                <!-- --- Total value(for numeric columns) ------------------------------------------------------------>
                <tr v-if="hasNumericColumns" class="table-total">
                    <th v-for="(column, index) in visibleColumns">
                        {{ index === 0 ? 'Total' : columnSum(column) }}
                    </th>
                </tr>

                <!-- --- Search inputs ------------------------------------------------------------------------------->
                <tr v-if="showSearch" class="column-search-container">
                    <th v-for="column in visibleColumns">
                        <input v-if="column.searchable"
                               @input="tableData.updateSearchTerm(column, $event.target.value)"
                               class="column-search"
                               :placeholder="translateHelpers.getTranslate('search')"
                        />
                    </th>
                </tr>
            </thead>

            <!-- --- Body -------------------------------------------------------------------------------------------->
            <tbody class="table-body">
                <tr v-for="row in tableData.filteredRows" @click="handleRowClick(row)">
                    <TableCell v-for="column in visibleColumns" :column="column" :row="row" :styling="tableStyling" :key="column.key"/>
<!--                    <td v-for="column in visibleColumns" :class="cellStyle(column, row[column.key])">-->
<!--                        <slot-->
<!--                            :name="`cell.${column.key}`"-->
<!--                            :value="helpers.getValue(row, column.key)"-->
<!--                            :column="column"-->
<!--                            :row="row"-->
<!--                            :helpers="helpers"-->
<!--                        >{{ column.isNumeric ? helpers.formatNumericValue(helpers.getValue(row, column.key)) : helpers.getValue(row, column.key) }}</slot>-->
<!--                    </td>-->
                </tr>

                <!-- --- Infinity scroll ----------------------------------------------------------------------------->
<!--                <tr v-observe-visibility="handleReachedBottom"></tr>-->
            </tbody>
        </table>
    </div>
</template>
