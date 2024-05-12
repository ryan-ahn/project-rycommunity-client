<template>
  <div class="box-wrapper">
    <h2>{{ header }}</h2>
    <OrganismItemCommonThumbnailLabelCard
      :thumbnail="thumbnail"
      :category="category"
      :title="title"
      :onClickFunction="onClickFunction"
    />
  </div>
</template>

<script setup lang="ts">
import { IItemInMyPageRecommendCardProps } from '@interface/props';

// Props
const {
  header,
  thumbnail,
  title,
  category,
  onClickFunction,
} = defineProps<IItemInMyPageRecommendCardProps>();
</script>

<style lang="scss" scoped>
.box-wrapper {
  @include flexSet(flex-start, flex-start, column);
  @include boxSet(100%, auto, 0px);
  gap: 14px;
  padding: 24px 0;
  background-color: $gray01;
  & > h2 {
    @include fontSet(14px, 500, 22px);
  }
}
.item-wrapper {
  @include flexSet(flex-start, center, row);
  @include boxSet(100%, 100px, 0px);
  padding: 10px;
  cursor: pointer;
  background-color: $white;
  border-bottom: 0.5px solid transparent;
  border-radius: 12px;
}
</style>
