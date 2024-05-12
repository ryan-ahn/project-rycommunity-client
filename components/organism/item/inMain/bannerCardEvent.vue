<template>
  <div
    class="item-wrapper"
    :style="{
      backgroundImage: `url(${background})`,
    }"
    @click="onClickFunction"
  />
</template>

<script setup lang="ts">
import { IItemInMainBannerProps } from '@interface/props';
// Props
const {
  background,
  onClickFunction,
} = defineProps<IItemInMainBannerProps>();
</script>

<style lang="scss" scoped>
/* .item-wrapper {
  @include boxSet(100%, auto, 0px);
  overflow: hidden;
  cursor: pointer;
  background-repeat: no-repeat;
  background-size: contain;
  aspect-ratio: 300 / 300;
  object-fit: cover;
} */
.item-wrapper {
  @include boxSet(100%, auto, 0px);
  overflow: hidden;
  cursor: pointer;
  background-repeat: no-repeat;
  background-size: 100%;
  aspect-ratio: 360 / 300;
  object-fit: cover;
}
</style>
