<template>
  <div class="skeleton-wrapper"/>
</template>

<style lang="scss" scoped>
.skeleton-wrapper {
  @include boxSet(100%, auto, 0px);
  position: relative;
  background-size: cover;
  aspect-ratio: 320 / 380;
  -webkit-animation: skeleton-ui 1.8s infinite ease-in-out;
  animation: skeleton-ui 1.8s infinite ease-in-out;
}
</style>
