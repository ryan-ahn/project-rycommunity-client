<template>
  <div class="skeleton-wrapper">
    <div/>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.skeleton-wrapper {
  @include flexSet(flex-start, center, row);
  @include boxSet(100%, auto, 0px);
  & > div {
    @include boxSet(100px, 24px, 12px);
    -webkit-animation: skeleton-ui 1.8s infinite ease-in-out;
    animation: skeleton-ui 1.8s infinite ease-in-out;
  }
}
</style>
