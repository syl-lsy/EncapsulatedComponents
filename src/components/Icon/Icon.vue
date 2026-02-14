<template>
    <div>
        <i class="liu-icon" :class="{ [`liu-icon-${type}`]: type }" :style="{ color: `${props.color}` }">
            <font-awesome-icon v-bind="filterProps" />
        </i>
    </div>

</template>

<script lang="ts" setup>
import iconProps from './props'
import { computed } from 'vue'
defineOptions({
    name: 'IconComponent'
})
const props = defineProps(iconProps)
// 过滤掉自定义属性type和color
const filterProps = computed(() => {
    const { type, color, ...rest } = props
    return rest
})

</script>

<style scoped></style>