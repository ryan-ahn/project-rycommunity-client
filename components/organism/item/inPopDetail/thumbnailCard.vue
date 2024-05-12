<template>
  <div
    class="item-wrapper"
    :style="{ backgroundImage: `url(${background})` }"
  />
</template>

<script setup lang="ts">
import { IItemInPopDetailThumbnailCardProps } from '@interface/props';
// Props
const { background } = defineProps<IItemInPopDetailThumbnailCardProps>();
</script>

<style lang="scss" scoped>
.item-wrapper {
  @include boxSet(100%, auto, 0px);
  background-size: cover;
  aspect-ratio: 320 / 380;
}
</style>
