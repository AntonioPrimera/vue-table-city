<script setup>
//--- --- Vue ---------------------------------------------------------------------------------------------------------
import {computed, onMounted, reactive, ref, watch} from "vue";

//--- --- Components --------------------------------------------------------------------------------------------------
import Icon from "./base/Icon.vue";

//--- --- Composables -------------------------------------------------------------------------------------------------
import {useManagesLoadedData} from "../composables/useManagesLoadedData.js";
import {useEventBus} from "../composables/useEventBus.js";

//=====================================================================================================================
//--- --- Setup -------------------------------------------------------------------------------------------------------
//=====================================================================================================================
const emits = defineEmits(['row-click']);

const props = defineProps({
    data: {
        type: Object,
        required: true,
    }
});

let tableContainer = ref(null);

let header = ref(null);

let sortKey = ref(null);
let ascendingSort = ref(false);

const rowSizes = reactive([
    {id: 'small',  class: 'cell-small',   selected: true},
    {id: 'medium', class: 'cell-medium', selected: false},
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
            let searchTerm = cleanTerm(searchTerms.value[key]);
            let columnValue = cleanTerm(row[key] ?? '');

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
    if (isNumericValue(a) && isNumericValue(b)) return b - a;

    //date sort
    if (isDate(a) && isDate(b))
        return (parseDate(a).getTime() > parseDate(b).getTime()) ? 1 : -1;

    //string sort
    return a.localeCompare(b);
}

function formatNumericValue(value) {
    if (!isNumericValue(value)) return value;

    return formatNumber(value, {fractionDigits: 2});
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

    let columnValues = props.data.rows.map(row => row[column.key]);

    return formatNumber(columnValues.reduce((a, b) => a + b, 0), {fractionDigits: 2});
}

function isNumericColumn(column) {
    let columnValues = props.data.rows.map(row => row[column.key]);

    return columnValues.every(isNumericValue);
}

function isNumericValue (value) {
    return value !== null && typeof value === 'number';
}

function isDate(value) {
    if (!value) return false;

    // If it is a string date, it must have 10 characters (dd.mm.YYYY)
    if (typeof value === 'string' && value.length !== 10) return false;

    let date = parseDate(value);

    return date instanceof Date;
}

function parseDate(date, format = 'd.m.Y') {
    if (format === 'd.m.Y') {
        let year = date.substr(6);
        let month = date.substr(3, 2);
        let day = date.substr(0, 2);

        return new Date(year, month - 1, day, 0, 0, 0, 0);
    }

    return undefined;
}

function formatNumber(value, options = {}) {
    if (value === null || isNaN(value)) return value;

    let standardOptions = {
        minimumFractionDigits: (typeof options.minimumFractionDigits === "number" ? options.minimumFractionDigits : null )
            || (typeof options.fractionDigits === "number" ? options.fractionDigits : 2),
        maximumFractionDigits: (typeof options.maximumFractionDigits === "number" ? options.maximumFractionDigits : null )
            || (typeof options.fractionDigits === "number" ? options.fractionDigits : 2),
    }

    return (value * 1).toLocaleString(document.documentElement.lang, standardOptions);
}

function cleanTerm(term) {
  if (!(term && typeof term === 'string')) return '';

  // Remove diacritics
  term = term.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  return term.replace(/[^0-9a-z]/gi, '').toLowerCase();
}

function setHeader() {
    //prepare header
    header.value = props.data.header.map(column => {
        return {
            key:        column['key'],
            label:      column['label'],
            searchable: column['searchable'],
            visible:    true,
            isNumeric:  isNumericColumn(column)
        }
    })

    //emit the table columns event to the table controls component
    eventBus.triggerEvent('sync-table-columns-event', header.value);
}

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
managesLoadedData.setData(props.data.rows);

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
                               :placeholder="'Caută...'"
                        />
                    </th>
                </tr>
            </thead>

            <!-- --- Body -------------------------------------------------------------------------------------------->
            <tbody class="table-body">
                <tr v-for="row in filteredRows" @click="handleRowClick(row)">
                    <td v-for="column in visibleColumns" :class="cellStyle(column.isNumeric, row[column.key])">
                        {{ column.isNumeric ? formatNumericValue(row[column.key]) : row[column.key] }}
                    </td>
                </tr>

                <!-- --- Infinity scroll ----------------------------------------------------------------------------->
<!--                <tr v-observe-visibility="handleReachedBottom"></tr>-->
            </tbody>
        </table>
    </div>
</template>
