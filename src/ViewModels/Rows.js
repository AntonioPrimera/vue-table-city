import {ref} from "vue";
import {Row} from "./Row.js";

export class Rows {
	#rows = ref([]);			//entire data set (array of Row objects)
	#loadedRows = ref([]);	//subset of rows that is currently visible in the table
	initialRowCount;									//number of rows to load initially
	loadCount;											//number of rows to load when more data is requested
	
	constructor(rows, initialRowCount = 75, loadCount = 30) {
		this.rows = rows;
		this.initialRowCount = initialRowCount;
		this.loadCount = loadCount;
	}
	
	static create(columns, rawRows, initialRowCount = 75, loadCount = 30) {
		let rows = [];
		rawRows.forEach(row => {
			//create a new Row object or null if the row does not pass a filter in any of the columns
			let rowInstance = Row.create(row, columns);
			if (rowInstance)
				rows.push(rowInstance);
		});
		
		return new Rows(rows, initialRowCount, loadCount);
	}
	
	//--- Getters and setters -----------------------------------------------------------------------------------------
	
	get rows() {
		return this.#rows.value;
	}
	
	set rows(newData) {
		this.#rows.value = newData;
		this.resetLoadedRows();
	}
	
	get loadedRows() {
		return this.#loadedRows.value;
	}
	
	set loadedRows(newData) {
		this.#loadedRows.value = newData;
	}
	
	get rowsCount() {
		return this.#rows.value.length;
	}
	
	get loadedRowsCount() {
		return this.#loadedRows.value.length;
	}
	
	//--- Public api --------------------------------------------------------------------------------------------------
	
	loadRows(count) {
		let loadCount = count || this.loadCount;
		
		//check how much data is already loaded (visible in the table)
		let lastIndex = this.loadedRowsCount;
		
		//if all available data is already visible, do nothing
		if (lastIndex >= this.rowsCount) return;
		
		//load another batch of data (count rows) and add it to the loadedData array
		let newData = this.rows.slice(lastIndex, lastIndex + loadCount);
		this.loadedRows = [...this.loadedRows, ...newData];
	}
	
	resetLoadedRows() {
		this.loadedRows = [];
		this.loadRows(this.initialRowCount);
	}
}