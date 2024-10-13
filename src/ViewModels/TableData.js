import {ref} from "vue";
import {Column} from "./Column.js";
import {Rows} from "./Rows.js";

export class TableData {
	rows = ref(null);
	columns = ref([]);
	
	/**
	 *
	 * @param {Array.<Column>} columns
	 * @param {Array.<object>} rawRows
	 * @param {number} initialRowCount
	 * @param {number} loadCount
	 */
	constructor(columns, rawRows, initialRowCount = 75, loadCount = 30) {
		this.rows = rawRows instanceof Rows ? rawRows : Rows.create(columns, rawRows, initialRowCount, loadCount);
		this.columns = columns;
	}
	
	static create(columns, rawRows, initialRowCount = 75, loadCount = 30) {
		return new TableData(columns, rawRows, initialRowCount, loadCount);
	}
}