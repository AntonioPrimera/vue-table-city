import {Row} from "./Row.js";
import {ref} from "vue";
import {Column} from "./Column.js";
import helpers from "../helpers/helpers.js";

export class Rows {
	rows;
	filteredRows = ref([]);
	
	/**
	 * @param {Array.<Row>} rows
	 */
	constructor(rows) {
		this.rows = rows;
		this.filteredRows.value = rows;		//initially the filtered rows are the same as the rows
	}
	
	static create(columns, rawRows) {
		let rows = [];
		
		rawRows.forEach(row => {
			//create a new Row object or null if the row does not pass a filter in any of the columns
			let rowInstance = Row.create(row, columns);
			if (rowInstance)
				rows.push(rowInstance);
		});
		
		return new Rows(rows);
	}
	
	//--- Row operations ----------------------------------------------------------------------------------------------
	
	/**
	 * @param {Array.<Column>} columns
	 */
	filterBySearchTerms(columns) {
		let rows = this.rows;
		//run through all rows and apply the filters for each column
		for (let column of columns) {
			//ignore columns that do not have a search term
			let searchTerm = column.searchTerm;
			if (!searchTerm) continue;
		
			//filter the rows further, for each column, based on the search term
			rows = rows.filter(row => row.cleanValue(column.key).includes(searchTerm));
		}
		
		this.filteredRows.value = rows;
	}
	
	clearSearch() {
		this.filteredRows.value = this.rows;
	}
	
	sort(column, direction) {
		this.filteredRows.value = this.filteredRows.value.sort((rowA, rowB) => {
			let valueA = rowA.get(column.key);
			let valueB = rowB.get(column.key);
			
			if (valueA === valueB) return 0;
			
			let result = valueA < valueB ? -1 : 1;
			return direction === 'asc' ? result : -result;
		});
	}
	
	//--- Getters and setters -----------------------------------------------------------------------------------------
	
	//get rows() {
	//	return this.#rows.value;
	//}
	//
	//set rows(newData) {
	//	this.#rows.value = newData;
	//	this.resetLoadedRows();
	//}
	
	//get loadedRows() {
	//	return this.#loadedRows.value;
	//}
	//
	//set loadedRows(newData) {
	//	this.#loadedRows.value = newData;
	//}
	
	//get count() {
	//	return this.rows.length;
	//}
	
	//get loadedRowsCount() {
	//	return this.#loadedRows.value.length;
	//}
	
	//--- Public api --------------------------------------------------------------------------------------------------
	
	//loadRows(count) {
	//	let loadCount = count || this.loadCount;
	//
	//	//check how much data is already loaded (visible in the table)
	//	let lastIndex = this.loadedRowsCount;
	//
	//	//if all available data is already visible, do nothing
	//	if (lastIndex >= this.rowsCount) return;
	//
	//	//load another batch of data (count rows) and add it to the loadedData array
	//	let newData = this.rows.slice(lastIndex, lastIndex + loadCount);
	//	this.loadedRows = [...this.loadedRows, ...newData];
	//}
	//
	//resetLoadedRows() {
	//	this.loadedRows = [];
	//	this.loadRows(this.initialRowCount);
	//}
}