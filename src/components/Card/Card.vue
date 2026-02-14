<template>
    <!-- 默认会有一个270px像素的宽度，当用户传入width属性时，会覆盖默认样式 -->
    <div class="liu-card" :style="width ? `width: ${width}px` : ''">
        <div class="liu-card-img" :style="imgHeight ? `height: ${imgHeight}px` : ''">
            <img :src="imgSrc" alt="加载失败">
        </div>
        <!-- 有两种传递summary方式 -->
        <!-- 直接传属性summary -->
        <div class="liu-card-summary" v-if="summary">
            {{ summary }}
        </div>
        <!-- 传递插槽 -->
        <div class="liu-card-summary" v-else>
            <slot />
        </div>
        <!-- 当用户自定义footer时才显示，也就是插槽有值时才显示 -->
        <div class="liu-card-footer" v-if="$slots.footer">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script lang="ts" setup>
import propsObj from './props'
defineOptions({
    name: 'CardComponent'
})
defineProps(propsObj)
</script>

<style scoped></style>