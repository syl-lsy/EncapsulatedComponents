<template>
    <transition name="dialog">
        <!-- 外层容器 -->
        <div class="liu-dialog_wrapper" v-show="visible">
            <!-- 这一层主要控制dialog的宽度和高度 -->
            <div class="liu-dialog" :style="{ width, marginTop: top }">
                <!-- 头部 -->
                <div class="liu-dialog_header">
                    <slot name="title">
                        <span class="liu-dialog_title">{{ title }}</span>
                    </slot>
                    <!-- 关闭按钮 -->
                    <button class="liu-dialog_headerBtn" @click="close">
                        <LiuIcon icon="xmark" />
                    </button>
                </div>
                <!-- 中间部分 -->
                <div class="liu-dialog_body">
                    <slot />
                </div>
                <!-- 底部 -->
                <div class="liu-dialog_footer" v-if="$slots.footer">
                    <slot name="footer"></slot>
                </div>
            </div>
        </div>
    </transition>


</template>

<script lang="ts" setup>
import propsObj from './props'
defineOptions({
    name: 'DialogComponent'
})
defineProps(propsObj)
const emit = defineEmits(['close'])
function close() {
    emit('close')
}

</script>

<style lang="scss" scoped>
    .dialog-enter-active {
        animation: dialogFade .3s;
    }

    .dialog-leave-active {
        animation: dialogFade .3s reverse;
    }

    @keyframes dialogFade {
        0% {
            opacity: 0;
            transform: translateY(-20px);
        }

        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }
</style>