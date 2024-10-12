/**
 * This is a column component, which defines a column in a table.
 * 	- the key is the path to the data in the row object (e.g. 'name', 'address.city', 'address.zip')
 * 	- the column header label
 * 	- the column can be marked as numeric (if null, it will run a check on the data)
 * 	- the column can be visible, searchable, sortable and filterable (all boolean)
 * 	- it can contain a filter function that will be used to filter the raw data in the column
 * 	- it can contain a data transformation function that will be used to transform the raw data in the column
 * 	- it can contain a render function that will be used to render the transformed data in the column
 */

import helpers from '../helpers/helpers.js';

export class Column {
	constructor(
		key,
		label,
		
		isNumeric = null,			//null -> automatic determination
		isSearchable = false,
		isSortable = true,
		isFilterable = false,
		isVisible = true,
		
		filter = null,
		mutate = null,
		render = null
	) {
		// The key is the path to the data in the row object (dot notation)
		this.key = key;
		
		// The label is the text that will be displayed in the header of the column
		this.label = label;
		
		// The searchable, sortable and filterable attributes define if the column is searchable, sortable and filterable
		this.isNumeric = isNumeric;
		this.isVisible = isVisible;
		this.isSearchable = isSearchable;
		this.isSortable = isSortable;
		this.isFilterable = isFilterable;
		
		// The filter can be a function that will be used to filter the raw data in the column
		this.filter = typeof filter === 'function' ? filter : null;
		
		// The transform function can be used to transform the raw data in the column
		this.mutate = typeof mutate === 'function' ? mutate : null;
		
		// The render function can be used to render the data in the column
		this.render = typeof render === 'function' ? render : null;
	}
	
	// Process the rows in the column (mutate the data if needed and determine if the column is numeric)
	processRows(rows) {
		let processedRows = [];
		
		for (let row of rows) {
			//get the raw value from the row
			let value = helpers.getValue(row, this.key);
			
			//mutate the value if a mutation function is provided
			if (this.mutate)
				value = this.mutate(value);
			
			//if a filter function is provided, check if it passes the filter
			if (this.filter && !this.filter(value))
				continue;
			
			processedRows.push(value);
		}
		
		//determine if the column is numeric
		this.isNumeric = this.#determineIsNumeric(processedRows);
		
		//return the processed rows
		return processedRows;
	}
	
	//--- Private helpers ---------------------------------------------------------------------------------------------
	
	// Determine whether this column is numeric (search through all the data in the column)
	#determineIsNumeric(rows) {
		if (this.isNumeric !== null)
			return this.isNumeric;
		
		return rows.every(row => {
			let value = helpers.getValue(row, this.key);
			return value !== null && typeof value === 'number';
		});
	}
}