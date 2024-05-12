<template>
  <div
    class="item-wrapper"
    :style="{ backgroundImage: `url(${background})` }"
    @click="onClickFunction"
  >
    <p>{{ number }}</p>
    <div class="title-box">
      <h1>{{ name }}</h1>
      <img
        src="/icons/common/arrow-right-round.svg"
        alt="arrow"
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { IItemInMainLabCardProps } from '@interface/props';
// Props
const {
  number,
  name,
  background,
  onClickFunction,
} = defineProps<IItemInMainLabCardProps>();
</script>

<style lang="scss" scoped>
.item-wrapper {
  @include flexSet(space-between, flex-start, column);
  @include boxSet(100%, auto, 20px);
  padding: 16px;
  background-color: $theme03;
  background-repeat: no-repeat;
  background-size: cover;
  border: 1px solid $black;
  aspect-ratio: 320 / 260;
  & > p {
    @include fontSet(34px, 700, 40px);
  }
}
.title-box {
  @include boxSet(100%, auto, 0px);
  @include flexSet(space-between, flex-end, row);
  gap: 8px;
  & > h1 {
    @include fontSet(28px, 700, 34px);
    @include ellipsisSet(3, 34px);
  }
  & > img {
    @include boxSet(24px, 24px, 12px);
    object-fit: cover;
  }
}
</style>
