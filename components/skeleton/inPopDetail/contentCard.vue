<template>
  <div class="skeleton-wrapper">
    <div
      v-for="(_, index) in 2"
      :key="index"
      class="skeleton-box"
    >
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
  @include flexSet(center, flex-start, column);
  @include boxSet(100%, auto, 0px);
  gap: 40px;
  padding: 0px 20px;
}
.skeleton-box {
  @include boxSet(100%, auto, 0px);
  & > div:nth-child(1) {
    @include boxSet(150px, 26px, 12px);
    margin-bottom: 12px;
    -webkit-animation: skeleton-ui 1.8s infinite ease-in-out;
    animation: skeleton-ui 1.8s infinite ease-in-out;
  }
  & > div:nth-child(2) {
    @include boxSet(100%, 22px, 12px);
    margin-bottom: 7px;
    -webkit-animation: skeleton-ui 1.8s infinite ease-in-out;
    animation: skeleton-ui 1.8s infinite ease-in-out;
  }
  & > div:nth-child(3) {
    @include boxSet(100%, 22px, 12px);
    margin-bottom: 7px;
    -webkit-animation: skeleton-ui 1.8s infinite ease-in-out;
    animation: skeleton-ui 1.8s infinite ease-in-out;
  }
  & > div:nth-child(4) {
    @include boxSet(100%, 22px, 12px);
    -webkit-animation: skeleton-ui 1.8s infinite ease-in-out;
    animation: skeleton-ui 1.8s infinite ease-in-out;
  }
}
</style>
