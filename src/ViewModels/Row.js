import helpers from "../helpers/helpers.js";

export class Row {
	/**
	 * The key is the unique identifier of the row.
	 */
	key;
	
	/**
	 * The data is the flat mutated data of the row (no nested objects)
	 */
	data;
	
	/**
	 * The rendered data is the data that is visible in the table (after being mutated and rendered)
	 * The rendered data contains only data which differs from the raw data
	 */
	renderedData;
	
	/**
	 * Clean data, which is used for searching (the term is cleaned and lowercased)
	 * This is lazy loaded - only set when a search on a column is performed
	 */
	cleanData;
	
	/**
	 * The key is the unique identifier of the row.
	 * The data is the raw data of the row (only what can be visible in the table).
	 * The rendered data is the data that is visible in the table (after being mutated and rendered).
	 * The rendered data contains only data which differs from the raw data.
	 */
	constructor(key, data, renderedData) {
		this.key = key;
		this.data = data;
		this.renderedData = renderedData;
		this.cleanData = {};
	}
	
	/**
	 * Creates a new Row object with the given key, by processing
	 * the raw row data with the given columns.
	 */
	static create(rawRow, columns) {
		let rowKey = null;
		let mutatedRowData = {};	//this will contain the mutated data
		let renderedData = {};		//this will contain the rendered data
		
		//run through all columns (this will only keep the properties for which a column is defined)
		for (let column of columns) {
			//mutate the data
			let value = column.mutate(helpers.getValue(rawRow, column.key));
			
			//if the column has a filter and the value does not pass the filter, return a null row
			if (!column.filter(value)) return null;
			
			//if the column isNumeric is not set as false, determine if the value is numeric
			//all rows in the column must be numeric for the column to pass as numeric
			if (column.isNumeric !== false)
				column.isNumeric = helpers.isNumericValue(value);
			
			//set the row data with the mutated value and the flat key
			//this will be a flat key (even if it contains dots)
			mutatedRowData[column.key] = value;
			
			//if the column is a row key, set the row key (if already set, append the value - for composite keys)
			if (column.isRowKey)
				rowKey = rowKey ? `${rowKey}-${value}` : value;
		}
		
		//run through all columns again and render the data and render the data for the columns that have a renderer
		for (let column of columns)
			if (column.hasRenderer)
				renderedData[column.key] = column.render(mutatedRowData[column.key], mutatedRowData);
		
		//if the row key is not set, try to get it from the raw row data or generate a new one
		if (!rowKey)
			rowKey = rawRow['id'] || rawRow['uuid'] || rawRow['uid'] || helpers.uid();
		
		return new Row(rowKey, mutatedRowData, renderedData);
	}
	
	//--- Public api --------------------------------------------------------------------------------------------------
	
	get(key) {
		return this.data[key];
	}
	
	set(key, value) {
		this.data[key] = value;
	}
	
	rendered(key) {
		return this.renderedData[key] || this.data[key];
	}
	
	cleanValue(key) {
		if (!this.cleanData[key])
			this.cleanData[key] = helpers.cleanTerm(this.data[key]);
		
		return this.cleanData[key];
	}
}