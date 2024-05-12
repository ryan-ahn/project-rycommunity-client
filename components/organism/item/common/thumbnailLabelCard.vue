<template>
  <div
    class="item-wrapper"
    @click="onClickFunction"
  >
    <img
      :src="thumbnail"
      alt="thumbnail"
    >
    <div>
      <p>{{ category }}</p>
      <h2>{{ title }}</h2>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IItemCommonThumbnailLabelProps } from '@interface/props';
// Props
const {
  thumbnail,
  category,
  title,
  onClickFunction,
} = defineProps<IItemCommonThumbnailLabelProps>();
</script>

<style lang="scss" scoped>
.item-wrapper {
  @include flexSet(flex-start, center, row);
  @include boxSet(100%, 100px, 0px);
  gap: 12px;
  cursor: pointer;
  border-bottom: 0.5px solid $gray03;

  & > img {
    @include boxSet(104px, 80px, 8px);
    object-fit: cover;
    object-position: 0 20%;
  }
  & > div {
    @include flexSet(flex-start, flex-start, column);
    @include boxSet(calc(100% - 116px), 68px, 0px);
    gap: 4px;
    & > p {
      color: $gray05;
      @include fontSet(12px, 400, 16px);
      @include ellipsisSet(1, 16px);

    }
    & > h2 {
      @include fontSet(16px, 500, 24px);
      @include ellipsisSet(2, 24px);
    }
  }
}
</style>
