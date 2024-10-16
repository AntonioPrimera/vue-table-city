<script setup>
import Icon from "./base/Icon.vue";
import {Column} from "../ViewModels/Column.js";

const props = defineProps({
    column: {
        type: Column,
        required: true,
    },
});

const emit = defineEmits(['sort']);

function handleClick() {
    if (!props.column.isSortable)
        return;

    props.column.toggleSortDirection();
    emit('sort');
}
</script>

<template>
    <th @click="handleClick">
        <div class="header-row-item" :class="column.isNumeric ? 'numeric' : ''">
            <span v-text="column.label"></span>

            <div v-if="column.isSortable" style="margin-left: 4px;">
                <icon icon="sortable" v-if="column.isSortNone" style="width: 12px;"/>
                <icon icon="sort-ascending" v-if="column.isSortAscending" style="width: 12px;"/>
                <icon icon="sort-descending" v-if="column.isSortDescending" style="width: 12px;"/>
            </div>
        </div>
    </th>
</template>