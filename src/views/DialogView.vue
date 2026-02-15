<template>
  <h1 class="row-title">第一组</h1>
  <div class="row">
    <LiuButton @click="visible = true" type="primary">对话框一</LiuButton>
    <LiuDialog v-model:visible="visible" @close="visible = false" />
  </div>
  <h1 class="row-title">第二组</h1>
  <div class="row">
    <LiuButton @click="visible1 = true" type="warning">对话框二</LiuButton>
    <LiuDialog v-model:visible="visible1" @close="visible1 = false" title="这是一个自定义标题">
      这是一个基本对话框
    </LiuDialog>
  </div>
  <h1 class="row-title">第三组</h1>
  <div class="row">
    <LiuButton @click="visible2 = true" type="success">对话框三</LiuButton>
    <LiuDialog v-model:visible="visible2" @close="visible2 = false">
      <template #footer>
        <LiuButton @click="visible2 = false">取消</LiuButton>
        <LiuButton @click="visible2 = false" type="primary">确定</LiuButton>
      </template>
    </LiuDialog>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const visible = ref(false)
const visible1 = ref(false)
const visible2 = ref(false)
</script>

<style scoped></style>