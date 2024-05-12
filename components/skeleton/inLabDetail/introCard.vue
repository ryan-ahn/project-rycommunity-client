<template>
  <div class="skeleton-wrapper"/>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.skeleton-wrapper {
  @include boxSet(100%, 160px, 20px);
  @include shadowSet(0, 2, 20, $shadow, 0.1);
  -webkit-animation: skeleton-ui 1.8s infinite ease-in-out;
  animation: skeleton-ui 1.8s infinite ease-in-out;
}
</style>
