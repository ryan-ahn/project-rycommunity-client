<template>
  <div class="title-wrapper">
    <div class="category-box">
      <h2>{{ label }}</h2>
      <div class="title-box">
        <h1>{{ title }}</h1>
        <div
          class="button-box"
          @click="onClickFunction"
        >
          <img
            src="/icons/main/arrow-right.svg"
            alt="stack"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ITitleLargeLabelProps } from '@interface/props';
// Props
const {
  label,
  title,
  onClickFunction,
} = defineProps<ITitleLargeLabelProps>();
</script>

<style lang="scss" scoped>
.title-wrapper {
  @include boxSet(100%, auto, 0px);
  padding: 0 16px 0 24px;
}
.category-box {
  & > h2 {
    margin-bottom: 6px;
    color: $gray05;
    @include fontSet(16px, 300, 20px);
  }
}
.title-box {
  @include boxSet(100%, auto, 0px);
  @include flexSet(space-between, center, row);
  & > h1 {
    @include fontSet(20px, 600, 24px);
  }
}
.button-box {
  @include flexSet(center, center, row);
  @include boxSet(24px, 24px, 0px);
  cursor: pointer;
  & > img {
    @include boxSet(100%, 100%, 0px);
    object-fit: cover;
  }
}
</style>
