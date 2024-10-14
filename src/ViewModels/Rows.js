import {Row} from "./Row.js";
import {Column} from "./Column.js";

export class Rows {
	rows;
	filteredRows;
	
	/**
	 * @param {Array.<Row>} rows
	 */
	constructor(rows) {
		this.rows = rows;
		this.filteredRows = rows;		//initially the filtered rows are the same as the rows
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
		
		this.filteredRows = rows;
	}
	
	clearSearch() {
		this.filteredRows = this.rows;
	}
	
	sortByColumn(column) {
		this.filteredRows = this.filteredRows.sort((rowA, rowB) => {
			let valueA = rowA.data[column.key];
			let valueB = rowB.data[column.key];
			
			if (valueA === valueB) return 0;
			
			let result = valueA < valueB ? -1 : 1;
			return column.sortDirection === 'asc' ? result : -result;
		});
	}
}