<script setup>
import {onMounted, onUnmounted, ref} from "vue";

const props = defineProps({
    options: {
        type: Object,
        default: () => ({
            root: null,
            threshold: 0
            //rootMargin: '0px',
            //threshold: 1.0
        })
    }
});

let observer = null;
let trigger = ref(null);

const emit = defineEmits(['trigger']);

const handleIntersect = (entry) => {
    if (entry.isIntersecting) {
        emit('trigger');
        console.log('Infinite scroll triggered');
    }
}

onMounted(() => {
    observer = new IntersectionObserver(entries => {
        handleIntersect(entries[0]);
    }, props.options);

    observer.observe(trigger.value);
});

onUnmounted(() => {
    observer.disconnect();
});
</script>

<template>
    <div data-name="infinite-scroll-trigger" ref="trigger" style="width:100%; height:0; position: absolute; bottom: 200px;">
        <slot/>
    </div>
</template>

<style scoped>

</style>