<template>
    <button class="liu-button" :class="{
        [`liu-button-${type}`]: type,
        [`liu-button-${size}`]: size,
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
        'is-disabled': disabled || loading,
    }" :disabled="disabled || loading" ref="btn">

        <LiuIcon icon="spinner" spin v-if="loading" />
        <LiuIcon :icon="icon" v-if="icon" />
        <span v-if="$slots.default">
            <slot />
        </span>
    </button>
</template>

<script lang="ts" setup>
import propObj from '@/components/Button/props'
import { ref } from 'vue';
// import { useAttrs } from 'vue';
defineOptions({
    name: 'ButtonComponent'
})
defineProps(propObj)

const btn = ref('btn')
defineExpose({
    btn
})


// const attrs = useAttrs()
// console.log(attrs);

</script>

<style scoped></style>