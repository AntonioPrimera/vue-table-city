<script setup>
//--- --- Vue ---------------------------------------------------------------------------------------------------------
import {computed} from "vue";

//--- --- Components --------------------------------------------------------------------------------------------------
import Icon from "../base/Icon.vue";

//=====================================================================================================================
//--- --- Setup -------------------------------------------------------------------------------------------------------
//=====================================================================================================================
const emits = defineEmits(['update:modelValue']);

const props = defineProps({
    name: {
        type: String,
        default: null,
    },

    label: {
        type: String,
        default: null,
    },

    modelValue: {
        type: [Array, Boolean],
        default: false,
    },

    value: {
        type: [String],
        required: false,
    },
});

//--- --- Computed ----------------------------------------------------------------------------------------------------
const inputValue = computed({
    get: () => props.modelValue,
    set: (value) => emits('update:modelValue', value)
})

const inputId = computed(() => {
    if (props.name && props.name.length) {
      return props.name;
    }

    return props.label;
});

</script>

<template>
    <label :for="name" class="checkbox-container">
        <div v-if="!inputValue" class="checkbox-input"></div>

        <div v-else class="checkbox-selected">
            <icon icon="check" class="checkbox-selected-icon"></icon>
        </div>

        <span v-if="label" class="label" v-text="label"></span>

        <input hidden :id="inputId" :name="name" type="checkbox" v-model="inputValue" :value="value">
    </label>
</template>
