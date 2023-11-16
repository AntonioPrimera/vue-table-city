# VueJS3 Table

An easy to use, clean and powerful data table for VueJS3 with essential features like sorting, column searching, infinity scroll and much more.

Here's an example of how you can use it:
```
<table-controls></table-controls>

<table-data :data="{
    "header": [
        {"key": "date", "label": "Date", "searchable": false},
        {"key": "details", "label": "Details", "searchable": true},
        {"key": "status", "label": "User status", "searchable": true},
    ],
    
    "rows": [
        {"date": "10.11.2023", "details": "Some details", "status": "Active"},
        {"date": "27.12.2023", "details": "Details", "status": "Inactive"},
        {"date": "20.10.2023", "details": "Some details", "status": "Deleted"},
        {"date": "22.05.1997", "details": "New details", "status": "Active"},
    ],
}"
></table-data>
```

## Installing
You can install the package via npm:

```
npm i vue3-table-data
```

or yarn:
```
yarn add vue3-table-data
```

Next, you must register the component. The most common use case is to do that globally(in your app.js or similar file)
```
import Vue from 'vue';
import { TableData, TableControls } from 'vue3-table-data';

Vue.component('v-table', TableData);
Vue.component('v-table-controls', TableControls);
```

Import into your component
```
import { TableData } from 'vue3-table-data';
import { TableControls } from 'vue3-table-data';

// add to component
components: {
    TableData,
    TableControls
}
```

Import style globally(in your app.scss or similar file) or rewrite it but don't forget to respect the structure.
```
@import "vue3-table-data/src/styles/_all.css";
```

You can import the files separately and rewrite part of the design because they are structured by components
```
@import "vue3-table-data/src/styles/_table.css";
@import "vue3-table-data/src/styles/_modal.css";
@import "vue3-table-data/src/styles/_form.css";
@import "vue3-table-data/src/styles/_buttons.css";
```

## Authors
- **[MRazvan2205](https://github.com/MRazvan2205)**