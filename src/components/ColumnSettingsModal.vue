<script setup>
//--- --- Vue ---------------------------------------------------------------------------------------------------------
import {ref} from "vue";

//--- --- Components --------------------------------------------------------------------------------------------------
import Modal from "./base/Modal.vue";
import Icon from "./base/Icon.vue";
import Checkbox from "./form/Checkbox.vue";

//--- --- Packages ----------------------------------------------------------------------------------------------------
import draggable from "vuedraggable/src/vuedraggable.js";

//=====================================================================================================================
//--- --- Setup -------------------------------------------------------------------------------------------------------
//=====================================================================================================================
const emits = defineEmits(['save', 'close']);

const props = defineProps({
    columns: {
        type: Array,
        required: true,
    },
});

let orderedColumns = ref([]);

//--- --- Methods -----------------------------------------------------------------------------------------------------
function save() {
    emits('save', orderedColumns.value);
}

//--- --- Created -----------------------------------------------------------------------------------------------------
props.columns.forEach(column => orderedColumns.value.push({...column}));

</script>

<template>
    <modal>
        <div class="settings-modal">
            <div class="settings-modal-title">Ordine coloane</div>

            <div class="settings-modal-description">
                Modifică ordinea și vizibilitatea coloanelor din următoarele setări:
            </div>

            <div class="column-settings-list">
                <draggable v-model="orderedColumns" item-key="key" :animation="300">
                    <template #item="{element: column}">
                        <div class="list-item">
                            <checkbox :label="column.label"
                                      :model-value="column.visible"
                                      @update:model-value="column.visible = $event"
                            ></checkbox>

                            <icon icon="drag-indicator" class="drag-indicator-icon"></icon>
                        </div>
                    </template>
                </draggable>
            </div>

            <div class="actions-container">
                <div class="button button-cancel" @click="emits('close')">Anulează</div>

                <div class="button button-confirm" @click="save">Salvează</div>
            </div>
        </div>
    </modal>
</template>
