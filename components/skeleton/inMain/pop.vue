<template>
  <div class="skeleton-wrapper">
    <div class="skeleton-box"/>
  </div>
</template>

<style lang="scss" scoped>
.skeleton-wrapper {
  padding: 20px;
}
.skeleton-box {
  position: relative;
  @include boxSet(100%, auto, 20px);
  overflow: hidden;
  @include shadowSet(0, 0, 3, $shadow, 0.25);
  aspect-ratio: 320 / 380;
  -webkit-animation: skeleton-ui 1.8s infinite ease-in-out;
  animation: skeleton-ui 1.8s infinite ease-in-out;
}
</style>
