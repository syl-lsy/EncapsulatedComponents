<template>
  <h1 class="row-title">普通引入</h1>
  <div class="row">
    <LiuIcon icon="user-secret" />
    <LiuIcon icon="bars" />
    <LiuIcon icon="shield-halved" />
    <LiuIcon icon="file" />
    <LiuIcon icon="filter" />
    <LiuIcon icon="gear" />
    <LiuIcon icon="barcode" />
    <LiuIcon icon="folder" />
    <LiuIcon icon="folder-open" />
  </div>
  <h1 class="row-title">设置不同大小</h1>
  <div class="row">
    <LiuIcon icon="user-secret" size="2xs" />
    <LiuIcon icon="bars" size="xs" />
    <LiuIcon icon="shield-halved" size="sm" />
    <LiuIcon icon="file" size="lg" />
    <LiuIcon icon="filter" size="xl" />
    <LiuIcon icon="gear" size="2xl" />
    <LiuIcon icon="barcode" size="2x" />
    <LiuIcon icon="folder" size="3x" />
    <LiuIcon icon="folder-open" size="4x" />
  </div>
  <h1 class="row-title">旋转与翻转</h1>
  <div class="row">
    <LiuIcon icon="user-secret" size="xl" rotation="90" />
    <LiuIcon icon="bars" size="xl" rotation="270" />
    <LiuIcon icon="shield-halved" size="xl" rotation="180" />
    <LiuIcon icon="file" size="xl" rotation="90" />
    <LiuIcon icon="filter" size="xl" rotation="90" />
    <LiuIcon icon="gear" size="xl" rotation="180" />
    <LiuIcon icon="barcode" size="xl" flip="horizontal" />
    <LiuIcon icon="folder" size="xl" flip="vertical" />
    <LiuIcon icon="folder-open" size="xl" flip="both" />
  </div>
  <h1 class="row-title">动画效果</h1>
  <div class="row">
    <LiuIcon icon="user-secret" size="xl" beat />
    <LiuIcon icon="bars" size="xl" beat-fade />
    <LiuIcon icon="shield-halved" size="xl" shake />
    <LiuIcon icon="file" size="xl" bounce />
    <LiuIcon icon="filter" size="xl" flip />
    <LiuIcon icon="gear" size="xl" fade />
    <LiuIcon icon="barcode" size="xl" spin />
    <LiuIcon icon="folder" size="xl" spin spin-reverse />
    <LiuIcon icon="folder-open" size="xl" spin-pulse />
  </div>
  <h1 class="row-title">添加自定义属性</h1>
  <div class="row">
    <LiuIcon icon="user-secret" size="xl" type="primary" />
    <LiuIcon icon="bars" size="xl" type="success" />
    <LiuIcon icon="shield-halved" size="xl" type="info" />
    <LiuIcon icon="file" size="xl" type="warning" />
    <LiuIcon icon="filter" size="xl" type="danger" />
    <LiuIcon icon="gear" size="xl" color="#e47412" />
    <LiuIcon icon="barcode" size="xl" color="#7ec102" />
    <LiuIcon icon="folder" size="xl" color="skyblue" />
    <LiuIcon icon="folder-open" size="xl" color="rgba(122, 122, 122, .5)" />
  </div>
</template>
<script setup>

</script>

<style lang="scss"></style>
