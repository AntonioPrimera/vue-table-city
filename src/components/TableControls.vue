<script setup>
//--- --- Vue ---------------------------------------------------------------------------------------------------------
import {ref} from "vue";

//--- --- Components --------------------------------------------------------------------------------------------------
import Icon from "./base/Icon.vue";
import StyleSettingsModal from "./StyleSettingsModal.vue";
import ColumnSettingsModal from "./ColumnSettingsModal.vue";

//--- --- Composables -------------------------------------------------------------------------------------------------
import {useEventBus} from "../composables/useEventBus.js";

//=====================================================================================================================
//--- --- Setup -------------------------------------------------------------------------------------------------------
//=====================================================================================================================
let rowSize = ref('small');
let digitsColor = ref('black');

let showStyleSettingsModal = ref(false);
let showColumnSettingsModal = ref(false);

let tableColumns = [];

let isActiveSearch = ref(false);

let eventBus = useEventBus();

//--- --- Methods -----------------------------------------------------------------------------------------------------
function handleSearchClick() {
    isActiveSearch.value = !isActiveSearch.value;

    eventBus.triggerEvent('toggle-search-event');
}

function handleFilterClick() {

}

function saveStyleSettings(newRowSize, newDigitsColor) {
    rowSize.value = newRowSize;
    digitsColor.value = newDigitsColor;

    //emit the table style event to the table component
    eventBus.triggerEvent('update-table-style-event', {newRowSize, newDigitsColor});

    //close the modal
    showStyleSettingsModal.value = false;
}

function saveColumnSettings(orderedColumns) {
    tableColumns = orderedColumns;

    eventBus.triggerEvent('update-table-columns-event', orderedColumns);

    showColumnSettingsModal.value = false;
}

function handleColumnsEvent(columns) {
    tableColumns = columns;
}

//--- --- Created -----------------------------------------------------------------------------------------------------
eventBus.addEventHandler('sync-table-columns-event', handleColumnsEvent);

</script>

<template>
    <div>
        <!-- --- Table controls(search, rows size, columns order, etc) ----------------------------------------------->
        <div class="table-controls">
            <div @click="handleSearchClick" class="search-button"
                 :class="isActiveSearch ? 'active' : 'inactive'"
            >
                <icon icon="search" class="search-icon"></icon>
            </div>

            <div class="divider"></div>

            <div class="settings-container">
<!--                <div @click="handleFilterClick" class="p-2 cursor-pointer">-->
<!--                    <icon icon="filter" class="text-gray-700 w-5 h-5"></icon>-->
<!--                </div>-->

                <div @click="showColumnSettingsModal = true" class="setting">
                    <icon icon="columns" class="setting-icon"></icon>
                </div>

                <div @click="showStyleSettingsModal = true" class="setting">
                    <icon icon="settings" class="setting-icon"></icon>
                </div>
            </div>
        </div>

        <!-- --- Settings modal -------------------------------------------------------------------------------------->
        <style-settings-modal v-if="showStyleSettingsModal"
                              :row-size-value="rowSize"
                              :digits-color-value="digitsColor"
                              @save="saveStyleSettings"
                              @close="showStyleSettingsModal = false"
        ></style-settings-modal>

        <!-- --- Column Settings modal ------------------------------------------------------------------------------->
        <column-settings-modal v-if="showColumnSettingsModal"
                               :columns="tableColumns"
                               @close="showColumnSettingsModal = false"
                               @save="saveColumnSettings"
        ></column-settings-modal>
    </div>
</template>
