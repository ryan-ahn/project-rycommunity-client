<template>
  <div
    class="item-wrapper"
    :style="{ backgroundImage: `url(${background})` }"
  />
</template>

<script setup lang="ts">
import { IItemInLabDetailThumbnailCardProps } from '@interface/props';
// Props
const { background } = defineProps<IItemInLabDetailThumbnailCardProps>();
</script>

<style lang="scss" scoped>
.item-wrapper {
  position: relative;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  @include flexSet(flex-end, center, column);
  @include boxSet(100%, 170px, 0px);
}
</style>
