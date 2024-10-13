<script setup>

import {computed} from "vue";
import {Column} from "../ViewModels/Column.js";
import {Row} from "../ViewModels/Row.js";
import {TableStyling} from "../ViewModels/TableStyling.js";

const props = defineProps({
    column: {
        type: Column,
        required: true,
    },
    row: {
        type: Row,
        required: true,
    },
    styling: {
        type: TableStyling,
        required: true,
    },
});

const cellStyle = computed(() => (column, value) => props.styling.cellStyling(column, value));
</script>

<template>
    <td :class="cellStyle(column, row.get(column.key))" v-html="row.rendered(column.key)"/>
        <!--                        <slot-->
        <!--                            :name="`cell.${column.key}`"-->
        <!--                            :value="helpers.getValue(row, column.key)"-->
        <!--                            :column="column"-->
        <!--                            :row="row"-->
        <!--                            :helpers="helpers"-->
        <!--                        >{{ column.isNumeric ? helpers.formatNumericValue(helpers.getValue(row, column.key)) : helpers.getValue(row, column.key) }}</slot>-->
<!--    </td>-->
</template>

<style scoped>

</style>