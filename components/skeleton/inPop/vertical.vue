<template>
  <div class="skeleton-wrapper">
    <li
      v-for="(_, index) in 2"
      :key="index"
    >
      <div class="skeleton-box"/>
    </li>
  </div>
</template>

<style lang="scss" scoped>
.skeleton-wrapper {
  @include boxSet(100%, auto, 0px);
  gap: 20px;
}
.skeleton-box {
  @include boxSet(100%, auto, 20px);
  margin-bottom: 20px;
  aspect-ratio: 320 / 380;
  -webkit-animation: skeleton-ui 1.8s infinite ease-in-out;
  animation: skeleton-ui 1.8s infinite ease-in-out;
}
</style>
