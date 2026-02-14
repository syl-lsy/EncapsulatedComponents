<template>
  <h1 class="row-title">普通展示</h1>
  <div class="row">
    <LiuButton>默认按钮</LiuButton>
    <LiuButton type="primary">主要按钮</LiuButton>
    <LiuButton type="success">成功按钮</LiuButton>
    <LiuButton type="info">信息按钮</LiuButton>
    <LiuButton type="warning">警告按钮</LiuButton>
    <LiuButton type="danger">危险按钮</LiuButton>
  </div>
  <h1 class="row-title">朴素按钮</h1>
  <div class="row">
    <LiuButton plain>默认按钮</LiuButton>
    <LiuButton type="primary" plain>主要按钮</LiuButton>
    <LiuButton type="success" plain>成功按钮</LiuButton>
    <LiuButton type="info" plain>信息按钮</LiuButton>
    <LiuButton type="warning" plain>警告按钮</LiuButton>
    <LiuButton type="danger" plain>危险按钮</LiuButton>
  </div>
  <h1 class="row-title">圆角按钮</h1>
  <div class="row">
    <LiuButton round>默认按钮</LiuButton>
    <LiuButton type="primary" round>主要按钮</LiuButton>
    <LiuButton type="success" plain round>成功按钮</LiuButton>
    <LiuButton type="info" round>信息按钮</LiuButton>
    <LiuButton type="warning" plain round>警告按钮</LiuButton>
    <LiuButton type="danger" plain round>危险按钮</LiuButton>
  </div>
  <h1 class="row-title">禁用状态</h1>
  <div class="row">
    <LiuButton disabled>默认按钮</LiuButton>
    <LiuButton type="primary" disabled>主要按钮</LiuButton>
    <LiuButton type="success" disabled>成功按钮</LiuButton>
    <LiuButton type="info" disabled>信息按钮</LiuButton>
    <LiuButton type="warning" disabled>警告按钮</LiuButton>
    <LiuButton type="danger" disabled>危险按钮</LiuButton>
  </div>
  <h1 class="row-title">等待状态</h1>
  <div class="row">
    <LiuButton loading>默认按钮</LiuButton>
    <LiuButton type="primary" loading>主要按钮</LiuButton>
    <LiuButton type="success" loading round>成功按钮</LiuButton>
    <LiuButton type="info" loading>信息按钮</LiuButton>
    <LiuButton type="warning" loading round>警告按钮</LiuButton>
    <LiuButton type="danger" loading round>危险按钮</LiuButton>
  </div>
  <h1 class="row-title">图标按钮</h1>
  <div class="row">
    <LiuButton icon="file">默认按钮</LiuButton>
    <LiuButton type="primary" icon="gear">主要按钮</LiuButton>
    <LiuButton type="info" icon="folder" plain>信息按钮</LiuButton>
    <LiuButton type="success" icon="bug" plain>成功按钮</LiuButton>
    <LiuButton type="warning" icon="code" round>警告按钮</LiuButton>
    <LiuButton type="danger" icon="cube" round>危险按钮</LiuButton>
  </div>
  <h1 class="row-title">不同尺寸的按钮</h1>
  <div class="row">
    <LiuButton icon="file" size="small">默认按钮</LiuButton>
    <LiuButton type="primary" icon="gear" size="small">主要按钮</LiuButton>
    <LiuButton type="info" icon="folder" plain>信息按钮</LiuButton>
    <LiuButton type="success" icon="bug" plain>成功按钮</LiuButton>
    <LiuButton type="warning" icon="code" plain size="large">警告按钮</LiuButton>
    <LiuButton type="danger" icon="cube" plain size="large">危险按钮</LiuButton>
  </div>
  <h1 class="row-title">圆形按钮</h1>
  <div class="row">
    <LiuButton type="danger" circle>验</LiuButton>
    <LiuButton type="primary" icon="gear" circle></LiuButton>
    <LiuButton type="info" icon="folder" circle plain></LiuButton>
    <LiuButton type="success" icon="bug" circle plain></LiuButton>
    <LiuButton type="warning" icon="code" circle disabled></LiuButton>
    <LiuButton type="danger" icon="cube" circle disabled></LiuButton>
  </div>
  <h1 class="row-title">按钮事件</h1>
  <div class="row">
    <LiuButton type="primary" @click="handleClick" ref="btnRef">点击事件</LiuButton>
  </div>
</template>
<script setup>
import { onMounted, useTemplateRef } from 'vue';
function handleClick() {
  alert("按钮被点击了");
}
const btnRef = useTemplateRef("btnRef");
onMounted(() => {
  console.log(btnRef.value.btn);

})

</script>
<style scoped lang="scss"></style>
