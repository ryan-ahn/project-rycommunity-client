<template>
  <div class="skeleton-wrapper">
    <div class="skeleton-box">
      <div/>
      <div/>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.skeleton-wrapper {
  padding: 40px 20px 20px 20px;
}
.skeleton-box {
  @include flexSet(flex-start, center, row);
  gap: 6px;
  & > div:nth-child(1) {
    @include boxSet(99.38px, 30px, 15px);
    -webkit-animation: skeleton-ui 1.8s infinite ease-in-out;
    animation: skeleton-ui 1.8s infinite ease-in-out;
  }
  & > div:nth-child(2) {
    @include boxSet(53.2px, 30px, 15px);
    -webkit-animation: skeleton-ui 1.8s infinite ease-in-out;
    animation: skeleton-ui 1.8s infinite ease-in-out;
  }
}
</style>
