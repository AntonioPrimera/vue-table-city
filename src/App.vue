<script setup>
import {TableData} from './index';
function test(row) {
    console.log(row);
}
</script>
<template>
    <table-data :data="{
    'header': [
        {'key': 'date', 'label': 'Date', 'searchable': false},
        {'key': 'details', 'label': 'Details', 'searchable': true},
        {'key': 'status', 'label': 'User status', 'searchable': true}
    ],
    'rows': [
        {'date': '10.11.2023', 'details': 'Some details', 'status': 'Active'},
        {'date': '27.12.2023', 'details': 'Details', 'status': 'Inactive'},
        {'date': '20.10.2023', 'details': 'Some details', 'status': 'Deleted'},
        {'date': '22.05.1997', 'details': 'New details', 'status': 'Active'}
    ]
}">
    <template #header.date="{ value }">
        <p>The date is {{ value }}</p>
    </template>

    <template #header.status="{ value, row }">
        <p>status: {{ value }}</p>
        <button @click="test(row)">test row</button>
    </template>
</table-data>

</template>