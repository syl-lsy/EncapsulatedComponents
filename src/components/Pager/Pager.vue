<template>
    <div class="liu-pager" :class="{ [`liu-pager-${type}`]: type, [`liu-pager--${size}`]: size }">
        <!-- 不变的部分就是首页和点击上一页 -->
        <a :class="currentPage === 1 ? 'disabled' : ''" @click.prevent="goToFirstPage">首页</a>
        <a :class="currentPage === 1 ? 'disabled' : ''" @click.prevent="pageLeftClick">
            <LiuIcon icon="angles-left" />
        </a>

        <!-- 1.当总页数大于最大可显示数量 -->
        <!-- 分三种情况 -->
        <!-- 1...显示在前 -->
        <a v-if="total > pageCount && currentPage > 5" @click.prevent="goToFirstPage">
            1
        </a>
        <a v-if="total > pageCount && currentPage > 5" @click.prevent="pageLeftSkip">
            <LiuIcon icon="ellipsis" size="sm" />
        </a>
        <a v-for="page in pager" :key="page" :class="page === currentPage ? 'active' : ''"
            @click.prevent="pageClick(page)">{{ page }}</a>
        <!-- 2...显示在后 -->
        <a v-if="total > pageCount && currentPage < total - 4" @click.prevent="pageRightSkip">
            <LiuIcon icon="ellipsis" size="sm" />
        </a>
        <a v-if="total > pageCount && currentPage < total - 4" @click.prevent="goToLastPage">
            {{ total }}
        </a>
        <!-- 3...显示在两端 -->
        <!-- 2.当总页数小于最大可显示数量则全部显示 -->
        <!-- 不变的部分就是尾页和点击下一页 -->
        <a :class="currentPage === total ? 'disabled' : ''" @click.prevent="pageRightClick">
            <LiuIcon icon="angles-right" />
        </a>
        <a :class="currentPage === total ? 'disabled' : ''" @click.prevent="goToLastPage">尾页</a>

    </div>
</template>

<script lang="ts" setup>
// import propsObj from './props.js';
import { computed } from 'vue'
defineOptions({
    name: 'PagerComponent'
});
const props = defineProps({
    // 总共多少页
    total: {
        type: Number,
        default: 0,
    },
    // 当前是第几页
    currentPage: {
        type: Number,
        default: 1,
    },
    // 能显示的最大页码按钮数量
    pageCount: {
        type: Number,
        default: 10,
    },
    // 主题颜色
    type: {
        type: String,
    },
    //   按钮大小
    size: {
        type: String,
    },
})
const emit = defineEmits(['current-change'])
const goToFirstPage = () => {
    if (props.currentPage === 1) return
    emit('current-change', 1)
}
const pageLeftClick = () => {
    if (props.currentPage === 1) return
    emit('current-change', props.currentPage - 1)
}
const pageRightClick = () => {
    if (props.currentPage === props.total) return
    emit('current-change', props.currentPage + 1)
}
const pageLeftSkip = () => {
    if (props.currentPage <= 1) return
    emit('current-change', props.currentPage - 5)
}
const pageRightSkip = () => {
    if (props.currentPage >= props.total) return
    emit('current-change', props.currentPage + 5)
}
const goToLastPage = () => {
    if (props.currentPage === props.total) return
    emit('current-change', props.total)
}
const pageClick = (page) => {
    emit('current-change', page)
}
// pager存放可显示的按钮
const pager = computed(() => {
    const renderPage = []
    // 如果total小于等于pageCount,全部显示
    if (props.total <= props.pageCount) {
        for (let i = 1; i <= props.total; i++) {
            renderPage.push(i)
        }
    } else {
        // 如果total大于pageCount需要分三种情况
        if (props.currentPage <= 5) {
            if (props.pageCount < 5) {
                for (let i = 1; i <= props.pageCount; i++) {
                    renderPage.push(i)
                }
            } else {
                // 如果当前页小于5则显示前面一部分
                for (let i = 1; i <= 5; i++) {
                    renderPage.push(i)
                }
            }

        } else if (props.currentPage >= props.total - 4) {
            if (props.total - 4 < 1) {
                return
            } else {
                // 如果当前页大于总页数-4则显示后面一部分
                for (let i = props.total - 4; i <= props.total; i++) {
                    renderPage.push(i)
                }
            }

        } else {
            // 如果当前页在中间则显示中间一部分
            for (let i = props.currentPage - 2; i <= props.currentPage + 2; i++) {
                renderPage.push(i)
            }

        }
    }
    return renderPage
})
</script>

<style scoped></style>