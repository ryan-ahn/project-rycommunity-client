<template>
  <div class="skeleton-wrapper"/>
</template>

<style lang="scss" scoped>
.skeleton-wrapper {
  position: relative;
  @include boxSet(100%, 170px, 0px);
  -webkit-animation: skeleton-ui 1.8s infinite ease-in-out;
  animation: skeleton-ui 1.8s infinite ease-in-out;
}
</style>
