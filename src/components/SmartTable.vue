<script setup>
//--- --- Vue ---------------------------------------------------------------------------------------------------------
import {computed, onMounted, ref} from "vue";

//--- --- Components --------------------------------------------------------------------------------------------------
import ColumnHeader from "./ColumnHeader.vue";
import TableCell from "./TableCell.vue";
import InfiniteScrollTrigger from "./InfiniteScrollTrigger.vue";

//--- --- Composables -------------------------------------------------------------------------------------------------
import {useEventBus} from "../composables/useEventBus.js";

//--- --- Helpers -----------------------------------------------------------------------------------------------------
import translateHelpers from "../helpers/translateHelpers.js";
import helpers from "../helpers/helpers.js";

//--- --- ViewModels --------------------------------------------------------------------------------------------------
import {Column} from "../ViewModels/Column.js";
import {TableData} from "../ViewModels/TableData.js";
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
//let sortKey = ref(null);
//let ascendingSort = ref(false);
let tableStyling = ref(null);
tableStyling.value = new TableStyling();

let showSearch = ref(false);

let eventBus = useEventBus();

//--- --- Computed ----------------------------------------------------------------------------------------------------

const visibleColumns = computed(() => tableData.value.visibleColumns);

const hasNumericColumns = computed(() => {
    return visibleColumns.value.some(column => column.isNumeric);
});

//--- --- Methods -----------------------------------------------------------------------------------------------------

/**
 * @param {Column} column
 */
function sortByColumn(column) {
    tableData.value.sortByColumn(column);
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

function handleToggleSearchEvent(active) {
    //if a value is passed, set the search to that value, otherwise just toggle the current state
    showSearch.value = active === undefined ? !showSearch.value : active;

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

function setTableHeight() {
    //calculate the height from the top of the table to the bottom of the window
    tableContainer.value.style.maxHeight = `${window.innerHeight - tableContainer.value.getBoundingClientRect().top - tableStyling.value.marginBottom}px`;
}

//--- Infinity scroll -------------------------------------------------------------------------------------------------

function handleReachedBottom() {
    tableData.value.loadRows();
}

//--- --- Created -----------------------------------------------------------------------------------------------------
eventBus.addEventHandler('update-table-style-event', handleTableStyleEvent);
eventBus.addEventHandler('update-table-columns-event', handleTableColumnsEvent);
eventBus.addEventHandler('toggle-search-event', handleToggleSearchEvent);
window.addEventListener('resize', setTableHeight);      //todo: throttle this (500ms)

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
            <thead class="table-header">
                <!-- --- Columns ------------------------------------------------------------------------------------->
                <tr class="table-header-row">
                    <template v-for="column in visibleColumns" :key="column.key">
                        <ColumnHeader :column="column" @sort="sortByColumn(column)"/>
                    </template>
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
                <tr v-for="row in tableData.loadedRows" @click="handleRowClick(row)">
                    <TableCell v-for="column in visibleColumns" :column="column" :row="row" :styling="tableStyling" :key="column.key"/>
                </tr>

                <!-- --- Infinity scroll ----------------------------------------------------------------------------->
                <InfiniteScrollTrigger @trigger="handleReachedBottom"/>
            </tbody>
        </table>

        <div id="smart-table-modals">
            <!-- Teleport target for TableControls Modals -->
        </div>
    </div>
</template>
