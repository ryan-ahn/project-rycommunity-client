<template>
  <div class="skeleton-wrapper">
    <div class="category-box">
      <div/>
      <div/>
      <div/>
      <div/>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.skeleton-wrapper {
  @include shadowSet(0, 2, 20, $shadow, 0.1);
  @include boxSet(100%, auto, 0px);
}
.category-box {
  @include flexSet(flex-start, center, row);
  @include boxSet(100%, auto, 0px);
  gap: 8px;
  & > div {
    @include boxSet(65px, 28px, 14px);
    -webkit-animation: skeleton-ui 1.8s infinite ease-in-out;
    animation: skeleton-ui 1.8s infinite ease-in-out;
  }
}
</style>
