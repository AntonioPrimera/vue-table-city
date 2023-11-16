<script setup>
//-- --- Vue ----------------------------------------------------------------------------------------------------------
import {ref} from "vue";

//--- --- Components --------------------------------------------------------------------------------------------------
import Modal from "./base/Modal.vue";
import Icon from "./base/Icon.vue";

//=====================================================================================================================
//--- --- Setup -------------------------------------------------------------------------------------------------------
//=====================================================================================================================
const emits = defineEmits(['save', 'close']);

const props = defineProps({
    rowSizeValue: {
        type: String,
        default: 'small',
    },

    digitsColorValue: {
        type: String,
        default: 'black',
    }
});

let rowSize = ref(props.rowSizeValue);
let digitsColor = ref(props.digitsColorValue);

const rowSizes = {
    small:  {'icon': 'small-row', 'label': 'Mică'},
    medium: {'icon': 'medium-row', 'label': 'Media'},
    large:  {'icon': 'large-row', 'label': 'Mare'},
}

const digitsColors = {
    black: 'Cifre negre',
    color: 'Cifre pozitive colorate în verde, cele negative in rosu',
};

let showRowSizeSection = ref(false);
let showDigitsColorSection = ref(false);

//--- --- Methods -----------------------------------------------------------------------------------------------------
function save() {
    emits('save', rowSize.value, digitsColor.value);
}

</script>

<template>
    <modal>
        <div class="settings-modal">
            <div class="settings-modal-title">Aspect tabel</div>

            <div class="settings-modal-description">
                Modifică aspectul tabelului din următoarele setări:
            </div>

            <div class="style-settings-options">
                <!-- --- Row size -------------------------------------------------------------------------------->
                <div class="style-settings-option">
                    <div class="option-container" @click="showRowSizeSection = !showRowSizeSection">
                        <div class="option-title">Dimensiune rânduri</div>

                        <icon v-if="!showRowSizeSection" icon="plus" class="icon-size"></icon>
                        <icon v-else icon="minus" class="icon-size"></icon>
                    </div>

                    <!-- --- Row size options ------------------------------------------------------------------------>
                    <div v-if="showRowSizeSection" class="option-items">
                        <div v-for="(option, key) in rowSizes" class="option-item-container" @click="rowSize = key">
                            <icon :icon="`radio-circle${rowSize === key ? '-selected' : ''}`"
                                  :class="`icon-size ${rowSize === key ? 'icon-selected' : 'icon-unselected'}`"
                            ></icon>

                            <div class="item-value">
                                <icon :icon="option.icon" class="icon-size"></icon>

                                <span class="option-item-title" v-text="option.label"></span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- --- Divider ------------------------------------------------------------------------------------->
                <div class="divider"></div>

                <!-- --- Digits color -------------------------------------------------------------------------------->
                <div class="style-settings-option">
                    <div class="option-container" @click="showDigitsColorSection = !showDigitsColorSection">
                        <div class="option-title">Aspect cifre</div>

                        <icon v-if="!showDigitsColorSection" icon="plus" class="icon-size"></icon>
                        <icon v-else icon="minus" class="icon-size"></icon>
                    </div>

                    <!-- --- Digits options -------------------------------------------------------------------------->
                    <div v-if="showDigitsColorSection" class="option-items">
                        <div v-for="(label, key) in digitsColors" class="option-item-container" @click="digitsColor = key">
                            <icon :icon="`radio-circle${digitsColor === key ? '-selected' : ''}`"
                                  :class="`icon-size ${digitsColor === key ? 'icon-selected' : 'icon-unselected'}`"
                            ></icon>

                            <div class="item-value">
                                <span class="option-item-title" v-text="label"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="actions-container">
                <div class="button button-cancel" @click="emits('close')">Anulează</div>

                <div class="button button-confirm" @click="save">Salvează</div>
            </div>
        </div>
    </modal>
</template>
