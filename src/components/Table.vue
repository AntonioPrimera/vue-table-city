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

//=====================================================================================================================
//--- --- Setup -------------------------------------------------------------------------------------------------------
//=====================================================================================================================
const emits = defineEmits(['row-click']);

const props = defineProps({
    // An array of rows with the raw data
    rows: {
        type: Rows,
        required: true,
    },

    //an array of column header objects with properties: key, label, searchable
    header: {
        type: Array,
        required: true,
        validator: value => value.every(column => column instanceof Column)
    },
});

let tableContainer = ref(null);

let header = ref(null);
let rows = ref(null);

let sortKey = ref(null);
let ascendingSort = ref(false);

const rowSizes = reactive([
    {id: 'small',  class: 'cell-small',   selected: true},
    {id: 'medium', class: 'cell-medium',  selected: false},
    {id: 'large',  class: 'cell-large',   selected: false}
]);

let digitsColor = ref('black');

let showSearch = ref(false);
let searchTerms = ref({});

let eventBus = useEventBus();

let managesLoadedData = useManagesLoadedData();

//--- --- Watch -------------------------------------------------------------------------------------------------------
watch(searchTerms, () => {
    //if the user removed all search terms, refresh loaded data
    if(Object.values(searchTerms.value).every(term => !term)) {
        managesLoadedData.refreshLoadedData();
    }
}, {deep: true});

//--- --- Computed ----------------------------------------------------------------------------------------------------
const visibleColumns = computed(() => header.value.filter(column => column.visible));

const filteredRows = computed(() => {
    if (Object.keys(searchTerms.value).length === 0) return managesLoadedData.getLoadedData();

    return managesLoadedData.getAllData().filter(row => {
        return Object.keys(searchTerms.value).every(key => {
            let searchTerm = helpers.cleanTerm(searchTerms.value[key]);
            let columnValue = helpers.cleanTerm(helpers.getValue(row, key) ?? '');

            return columnValue.toLowerCase().includes(searchTerm.toLowerCase());
        });
    }).slice(0, 120);
})

const cellStyle = computed(() => (numericColumn, value) => {
    let classes = [];

    //add row size class(e.g. cell-small, cell-medium, cell-large)
    let rowSize = rowSizes.find(rowSize => rowSize.selected) ?? rowSizes[0];
    classes.push(rowSize.class);

    if (!numericColumn) {
        classes.push('text-gray');

        return classes.join(' ');
    }

    //align the row value to the right if it is a number
    classes.push('numeric-column');

    //if the row value is a number and the digits color is set to color, add the red or green color class
    classes.push(
        digitsColor.value === 'color'
            ? (Math.sign(value) < 0 ? 'text-red' : 'text-green')
            : 'text-gray'
    )

    return classes.join(' ');
});

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

function handleTableStyleEvent(data) {
    rowSizes.forEach(rowSize => rowSize.selected = rowSize.id === data.newRowSize);

    digitsColor.value = data.newDigitsColor;
}

function handleTableColumnsEvent(data) {
    header.value = data;
}

function handleToggleSearchEvent() {
    showSearch.value = !showSearch.value

    //reset the search terms when the search is closed
    if (!showSearch.value) searchTerms.value = {};
}

function getColumnSum(column) {
    //if the column is not numeric, return an empty string
    if (!column.isNumeric) return '';

    let columnValues = props.rows.map(row => row[column.key]);

    return helpers.formatNumber(columnValues.reduce((a, b) => a + b, 0), 2);
}

function isNumericColumn(column) {
    let columnValues = props.rows.map(row => row[column.key]);
    return columnValues.every(helpers.isNumericValue);
}

function initializeTable() {
    //set the header and emit the table columns event to the table controls component
    header.value = props.header;
    eventBus.triggerEvent('sync-table-columns-event', header.value);

    //run through every column, mutate the rows if necessary and determine if the column is numeric
    rows.value = props.rows;
    header.value.forEach(column => column.processRows(rows.value));
    managesLoadedData.setData(rows);
}

//function setHeader() {
    //prepare header
    //header.value = props.header.map(column => {
    //    return {
    //        key:        column['key'],
    //        label:      column['label'],
    //        searchable: column['searchable'],
    //        visible:    true,
    //        isNumeric:  isNumericColumn(column)
    //    }
    //})

    //emit the table columns event to the table controls component
//    eventBus.triggerEvent('sync-table-columns-event', header.value);
//}

function updateSearchTerm(term, columnKey) {
    searchTerms.value[columnKey] = term;
}

function handleRowClick(row) {
    emits('row-click', row);
}

function setTableHeight() {
    // let windowHeight = window.screen.height;
    // let marginTop = window.scrollY + tableContainer.value.getBoundingClientRect().top;

    tableContainer.value.style.maxHeight = '75vh';
}

function handleReachedBottom() {
    managesLoadedData.loadData();
}

//--- --- Created -----------------------------------------------------------------------------------------------------
eventBus.addEventHandler('update-table-style-event', handleTableStyleEvent);
eventBus.addEventHandler('update-table-columns-event', handleTableColumnsEvent);
eventBus.addEventHandler('toggle-search-event', handleToggleSearchEvent);

setHeader();
managesLoadedData.setData(props.rows);

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
                    <th v-for="column in visibleColumns" @click="sortBy(column.key)">
                        <div class="header-row-item" :class="column.isNumeric ? 'numeric' : ''">
                            <span v-text="column.label"></span>

                            <icon icon="sort"
                                  class="header-row-item-icon"
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
                        {{ index === 0 ? 'Total' : getColumnSum(column) }}
                    </th>
                </tr>

                <!-- --- Search inputs ------------------------------------------------------------------------------->
                <tr v-if="showSearch" class="column-search-container">
                    <th v-for="column in visibleColumns">
                        <input v-if="column.searchable"
                               @input="updateSearchTerm($event.target.value, column.key)"
                               class="column-search"
                               :placeholder="translateHelpers.getTranslate('search')"
                        />
                    </th>
                </tr>
            </thead>

            <!-- --- Body -------------------------------------------------------------------------------------------->
            <tbody class="table-body">
                <tr v-for="row in filteredRows" @click="handleRowClick(row)">
                    <td v-for="column in visibleColumns" :class="cellStyle(column.isNumeric, row[column.key])">
                        <slot

                            :name="`cell.${column.key}`"
                            :value="helpers.getValue(row, column.key)"
                            :column="column"
                            :row="row"
                            :helpers="helpers"
                        >{{ column.isNumeric ? helpers.formatNumericValue(helpers.getValue(row, column.key)) : helpers.getValue(row, column.key) }}</slot>
                    </td>
                </tr>

                <!-- --- Infinity scroll ----------------------------------------------------------------------------->
<!--                <tr v-observe-visibility="handleReachedBottom"></tr>-->
            </tbody>
        </table>
    </div>
</template>
