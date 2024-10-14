export class CellRenderContext {
	rowData;		//mutated row data
	rawRowData;		//raw (original) row data
	column;			//column instance
	rowKey;			//the key of the row (ideally the id if the data is defined correctly)
	
	/**
	 * @param {Object} rowData
	 * @param {Object} rawRowData
	 * @param {Column} column
	 * @param {string|number} rowKey
	 */
	constructor(rowData, rawRowData, column, rowKey) {
		this.rowData = rowData;
		this.rawRowData = rawRowData;
		this.column = column;
		this.rowKey = rowKey;
	}
}