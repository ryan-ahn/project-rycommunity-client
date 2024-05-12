<template>
  <div class="skeleton-wrapper"/>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.skeleton-wrapper {
  @include boxSet(100%, 200px, 20px);
  -webkit-animation: skeleton-ui 1.8s infinite ease-in-out;
  animation: skeleton-ui 1.8s infinite ease-in-out;
}
</style>
