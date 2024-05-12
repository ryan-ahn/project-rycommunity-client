<template>
  <ul class="skeleton-wrapper">
    <li
      v-for="item in 3"
      :key="item"
      class="sized-row-full-box"
    >
      <div class="skeleton-box"/>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.skeleton-wrapper {
  @include flexSet(center, center, column);
  @include boxSet(100%, auto, 0px);
  gap: 20px;
  padding: 20px 20px 100px 20px;
}
.skeleton-box {
  @include boxSet(100%, 320px, 20px);
  -webkit-animation: skeleton-ui 1.8s infinite ease-in-out;
  animation: skeleton-ui 1.8s infinite ease-in-out;
}
</style>
