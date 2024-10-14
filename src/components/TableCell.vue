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
<!--    v-html="row.rendered(column.key)"-->
    <td :class="cellStyle(column, row.get(column.key))">
        <template v-if="column.isComponent">
            <component :is="row.rendered(column.key)"/>
        </template>
        <template v-else>
            {{ row.rendered(column.key) }}
        </template>
    </td>
</template>

<style scoped>

</style>