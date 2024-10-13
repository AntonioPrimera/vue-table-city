import {Column} from "./Column.js";

export class TableStyling {
	rowSizeClasses = {
		small:  'cell-small',
		medium: 'cell-medium',
		large:  'cell-large',
	};
	
	rowSize = 'small';
	colorDigits = true;
	
	// Set the row size to one of the predefined sizes
	setRowSize(size) {
		//if the size is valid, set it
		if(this.rowSizeClasses[size])
			this.rowSize = size;
		
		return this;
	}
	
	setColorDigits(colorDigits) {
		this.colorDigits = !! colorDigits;
		return this;
	}
	
	/**
	 * Determine the classes for the cell, based on the column definition and the cell value
	 * Cell color: gray by default, red for negative values, green for positive values
	 *
	 * @param {Column} column
	 * @param value
	 * @returns {string}
	 */
	cellStyling(column, value) {
		return this.rowSizeClasses[this.rowSize]
			+ ' '
			+ (column.isNumeric && this.colorDigits
				? (Math.sign(value) < 0 ? 'text-red' : 'text-green')
				: 'text-gray');
	}
}