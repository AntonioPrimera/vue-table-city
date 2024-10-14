/**
 * This is a column component, which defines a column in a table.
 * 	- the key is the path to the data in the row object (e.g. 'name', 'address.city', 'address.zip')
 * 	- the column header label
 * 	- the column can be marked as numeric (if null, it will run a check on the data)
 * 	- the column can be visible, searchable, sortable and filterable (all boolean)
 * 	- the column can be marked as a row key (if true, it will be used as a unique identifier for the row)
 * 	- it can contain a filter function that will be used to filter the raw data in the column
 * 	- it can contain a mutator function that will be used to transform the raw data in the column
 * 	- it can contain a renderer function that will be used to render the transformed data in the column
 */

import helpers from '../helpers/helpers.js';
import {format, parse} from "date-fns";
import {Rows} from "./Rows.js";
import {h} from "vue";

export class Column {
	//--- Properties --------------------------------------------------------------------------------------------------
	key;
	label;
	
	isNumeric;
	isSearchable;
	isSortable;
	isFilterable;
	isVisible;
	isRowKey;
	
	#filter;
	#mutator;
	#renderer;
	
	// The search term is used to filter the data in the column
	#searchTerm;
	isComponent = false;
	sortDirection = null;	//asc, desc or null
	
	//--- Constructor & Factories -------------------------------------------------------------------------------------
	
	constructor(
		key,
		label,
		
		isNumeric = null,			//null -> automatic determination
		isSearchable = false,
		isSortable = true,
		isFilterable = false,
		isVisible = true,
		isRowKey = false,
		
		// The filter can be a function that will be used to filter the raw data in the column
		filter = null,
		// The mutator function can be used to transform the raw data in the column
		mutator = null,
		// The render function can be used to render the transformed data in the column
		renderer = null
	) {
		this.key = key;
		this.label = label;
		this.numeric(isNumeric)
			.visible(isVisible)
			.searchable(isSearchable)
			.sortable(isSortable)
			.filterable(isFilterable)
			.rowKey(isRowKey)
			.withMutator(mutator)
			.withFilter(filter)
			.withRenderer(renderer);
	}
	
	//static factory
	static create(
		key,
		label,
		
		isNumeric = null,
		isSearchable = false,
		isSortable = false,
		isFilterable = false,
		isVisible = true,
		isRowKey = false,
		
		filter = null,
		mutator = null,
		renderer = null
	) {
		return new Column(key, label, isNumeric, isSearchable, isSortable, isFilterable, isVisible, filter, mutator, renderer);
	}
	
	//--- Getters and setters -----------------------------------------------------------------------------------------
	
	get hasRenderer() {
		return this.#renderer !== null;
	}
	
	//--- Fluent api --------------------------------------------------------------------------------------------------
	
	numeric(value = true) {
		this.isNumeric = value;
		return this;
	}
	
	notNumeric() {
		this.isNumeric = false;
		return this;
	}
	
	visible(value = true) {
		this.isVisible = value;
		return this;
	}
	
	notVisible() {
		this.isVisible = false;
		return this;
	}
	
	searchable(value = true) {
		this.isSearchable = value;
		return this;
	}
	
	notSearchable() {
		this.isSearchable = false;
		return this;
	}
	
	sortable(value = true) {
		this.isSortable = value;
		return this;
	}
	
	notSortable() {
		this.isSortable = false;
		return this
	}
	
	filterable(value = true) {
		this.isFilterable = value;
		return this;
	}
	
	notFilterable() {
		this.isFilterable = false;
		return this;
	}
	
	rowKey(value = true) {
		this.isRowKey = value;
		return this;
	}
	
	withFilter(value) {
		this.#filter = typeof value === 'function' ? value : null;
		return this;
	}
	
	withMutator(value) {
		this.#mutator = typeof value === 'function' ? value : null;
		return this;
	}
	
	withRenderer(value) {
		this.#renderer = typeof value === 'function' ? value : null;
		return this;
	}
	
	toggleSortDirection() {
		this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
		return this;
	}
	
	sortAscending() {
		this.sortDirection = 'asc';
		return this;
	}
	
	sortDescending() {
		this.sortDirection = 'desc';
		return this;
	}
	
	//--- Data transformation -----------------------------------------------------------------------------------------
	
	filter(value) {
		return this.#filter ? this.#filter(value) : true;
	}
	
	mutate(value) {
		return this.#mutator ? this.#mutator(value) : value;
	}
	
	/**
	 * Renders the value of the column, using the renderer function
	 * It should receive the value and the array of mutated row data (not a row instance!)
	 * @param {*} value
	 * @param {CellRenderContext} cellRenderContext
	 * @returns {*}
	 */
	render(value, cellRenderContext) {
		//value, mutatedRowData
		return this.#renderer ? this.#renderer(value, cellRenderContext) : value;
	}
	
	//--- Fluent predefined column types ------------------------------------------------------------------------------
	
	/**
	 * Provide a custom date format for the column and optionally a raw format, used to parse the date
	 * If the date is already in ISO 8601 format, the raw format can be omitted
	 * @param {string} renderFormat
	 * @param {string|null} rawFormat
	 */
	date(renderFormat = 'dd.MM.yyyy', rawFormat = null) {
		this.isComponent = false;
		
		//transform the date to a custom format
		this.withRenderer(isoStringDate => isoStringDate ? format(new Date(isoStringDate), renderFormat) : '');
		
		//transform the date to an ISO 8601 string (which is sortable as a string and parsable by the Date object)
		if(rawFormat)
			this.withMutator(value => value ? parse(value, rawFormat, new Date()).toISOString() : null);
		
		return this;
	}
	
	dateTime(renderFormat = 'dd.MM.yyyy HH:mm:ss', rawFormat = null) {
		return this.date(renderFormat, rawFormat);
	}
	
	money(
		currencyColumnKey = null,
		fractionDigits = 2,
		decimalSeparator = ',',
		thousandsSeparator = ' ',
		prefixCurrency = false
	) {
		//mark the column as numeric
		this.numeric();
		this.isComponent = false;
		
		//format the number as a currency string
		this.withRenderer(
			(value, context) =>
				helpers.formatNumber(
					value,
					fractionDigits,
					decimalSeparator,
					thousandsSeparator,
					currencyColumnKey ? (prefixCurrency ? `${context.rowData[currencyColumnKey] || '-?-'} ` : '') : '',
					currencyColumnKey ? (prefixCurrency ? '' : ` ${context.rowData[currencyColumnKey] || '-?-'}`) : ''
				)
		);
		
		return this;
	}
	
	number(fractionDigits = 2, decimalSeparator = ',', thousandsSeparator = ' ') {
		//mark the column as numeric
		this.numeric();
		this.isComponent = false;
		
		//format the number as a string
		this.withRenderer(value => helpers.formatNumber(value, fractionDigits, decimalSeparator, thousandsSeparator));
		
		return this;
	}
	
	component(component) {
		this.isComponent = true;
		this.withRenderer((value, context) => h(component, {value, context}));
		return this;
	}
	
	//--- Public helpers ----------------------------------------------------------------------------------------------
	
	/**
	 * @param {Rows} rows
	 * @returns {number|null}
	 */
	sum(rows) {
		return this.isNumeric ? rows.rows.reduce((sum, row) => sum + row.get(this.key), 0) : null;
	}
	
	//--- Searching and filtering -------------------------------------------------------------------------------------
	
	get searchTerm() {
		return this.#searchTerm;
	}
	
	set searchTerm(value) {
		if(this.isSearchable)
			this.#searchTerm = helpers.cleanTerm(value);
	}
	
	clearSearch() {
		this.#searchTerm = null;
	}
}