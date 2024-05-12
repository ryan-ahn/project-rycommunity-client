<template>
  <div class="item-wrapper">
    <button
      class="icon-box"
      :class="isOpenImageBox ? 'icon-box-active' : ''"
      @click="onClickImageToggle"
    >
      <img
        :src="`icons/lounge/${
          isOpenImageBox ? 'add-image-active' : 'add-image'
        }.svg`"
        alt="image"
      >
    </button>
    <button
      class="icon-box"
      :class="isOpenLinkBox ? 'icon-box-active' : ''"
      @click="onClickLinkToggle"
    >
      <img
        :src="`icons/lounge/${
          isOpenLinkBox ? 'add-link-active' : 'add-link'
        }.svg`"
        alt="image"
      >
    </button>
  </div>
</template>

<script setup lang="ts">
import { IItemInCreatePostButtonCardProps } from '@interface/props';
// Props
const {
  isOpenImageBox,
  isOpenLinkBox,
  onClickImageToggle,
  onClickLinkToggle,
} = defineProps<IItemInCreatePostButtonCardProps>();
</script>

<style lang="scss" scoped>
.item-wrapper {
  @include flexSet(flex-start, center, row);
  @include boxSet(100%, auto, 0px);
  gap: 16px;
}
.icon-box {
  @include boxSet(60px, 60px, 0px);
  @include flexSet(center, center, column);
  cursor: pointer;
  background-color: $gray01;
  border-radius: 10px;
  & > img {
    @include boxSet(45%, 45%, 0px);
    object-fit: contain;
    position: relative;
    top: 2px;
  }
}

.icon-box-active {
  background-color: $gray09;
}
</style>
