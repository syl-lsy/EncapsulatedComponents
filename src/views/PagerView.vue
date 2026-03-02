<template>
    <h1 class="row-title">总页数 total 大于页码最大显示数 pager-count，此时无法全部显示</h1>
    <div class="row">
        <LiuPager :total="20" :currentPage="currentPage1" @current-change="(page) => currentPage1 = page" />
    </div>
    <h1 class="row-title">总页码数 total 小于等于页码最大显示数 pager-count，可以全部显示</h1>
    <div class="row">
        <LiuPager :total="5" :currentPage="currentPage2" @current-change="(page) => currentPage2 = page" />
    </div>
    <h1 class="row-title">页码最大显示数 pager-count 是可以调整的</h1>
    <div class="row">
        <LiuPager :total="50" :pageCount="3" :currentPage="currentPage3"
            @current-change="(page) => currentPage3 = page" />
    </div>
    <h1 class="row-title">调整主题颜色</h1>
    <div class="row">
        <LiuPager :total="20" type="warning" :currentPage="currentPage4"
            @current-change="(page) => currentPage4 = page" />
    </div>
    <div class="row">
        <LiuPager :total="20" type="danger" :currentPage="currentPage5"
            @current-change="(page) => currentPage5 = page" />
    </div>
    <h1 class="row-title">调整大小</h1>
    <div class="row">
        <LiuPager :total="20" size="small" :currentPage="currentPage6"
            @current-change="(page) => currentPage6 = page" />
    </div>
    <div class="row">
        <LiuPager :total="20" :currentPage="currentPage7" @current-change="(page) => currentPage7 = page" />
    </div>
    <div class="row">
        <LiuPager :total="20" size="large" :currentPage="currentPage8"
            @current-change="(page) => currentPage8 = page" />
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const currentPage1 = ref(1)
const currentPage2 = ref(1)
const currentPage3 = ref(1)
const currentPage4 = ref(1)
const currentPage5 = ref(1)
const currentPage6 = ref(1)
const currentPage7 = ref(1)
const currentPage8 = ref(1)
</script>

<style scoped></style>