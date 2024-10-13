import {Column} from "./Column.js";
import {Rows} from "./Rows.js";
import {ref} from "vue";

export class TableData {
	/**
	 * @param {Rows} rows
	 */
	rows;
	
	/**
	 * @param {Array.<Column>} columns
	 */
	columns;
	
	/**
	 * @param {Array.<Row>} visibleRows
	 */
	loadedRows = ref([]);
	initialRowCount;
	loadCount;
	
	//--- Constructor & Factories -------------------------------------------------------------------------------------
	
	/**
	 * @param {Array.<Column>} columns
	 * @param {Array} rawRows
	 * @param {number} initialRowCount
	 * @param {number} loadCount
	 */
	constructor(columns, rawRows, initialRowCount = 75, loadCount = 30) {
		//set the rows and columns
		this.rows = rawRows instanceof Rows ? rawRows : Rows.create(columns, rawRows);
		this.columns = columns;
		
		//prepare the visible rows
		this.initialRowCount = initialRowCount;
		this.loadCount = loadCount;
		this.resetLoadedRows();
	}
	
	/**
	 * @param {Array.<Column>} columns
	 * @param {Array} rawRows
	 * @param {number} initialRowCount
	 * @param {number} loadCount
	 */
	static create(columns, rawRows, initialRowCount = 75, loadCount = 30) {
		return new TableData(columns, rawRows, initialRowCount, loadCount);
	}
	
	//--- Getters and setters -----------------------------------------------------------------------------------------
	
	get rowsCount() {
		return this.rows.rows.length;
	}
	
	get loadedRowsCount() {
		return this.loadedRows.value.length;
	}
	
	//--- Column operations -------------------------------------------------------------------------------------------
	
	get visibleColumns() {
		return this.columns.filter(column => column.isVisible);
	}
	
	updateSearchTerm(column, searchTerm) {
		column.searchTerm = searchTerm;
		this.rows.filterBySearchTerms(this.columns);
	}
	
	clearSearch() {
		this.rows.clearSearch();
	}
	
	//--- Row operations ----------------------------------------------------------------------------------------------
	
	loadRows(count) {
		let loadCount = count || this.loadCount;
		
		//check how much data is already loaded (visible in the table)
		let lastIndex = this.loadedRowsCount;
		
		//if all available data is already visible, do nothing
		if (lastIndex >= this.rowsCount) return;
		
		//load another batch of data (count rows) and add it to the loadedData array
		let newRows = this.rows.rows.slice(lastIndex, lastIndex + loadCount);
		this.loadedRows.value = [...this.loadedRows.value, ...newRows];
	}
	
	resetLoadedRows() {
		this.loadedRows.value = [];
		this.loadRows(this.initialRowCount);
	}
}