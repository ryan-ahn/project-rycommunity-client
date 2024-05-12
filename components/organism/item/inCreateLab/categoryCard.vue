<template>
  <div class="item-wrapper">
    <button
      class="button-box"
      @click="onClickFunction('createLabCategory')"
    >
      <p :class="category ? 'button-text-active' : 'button-text-deactive'">
        {{ category ? category.name : categoryButtonText }}
      </p>
      <img
        src="/icons/common/arrow-down-gray.svg"
        alt="arrow"
      >
    </button>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import useModalStore from '@store/useModalStore';
import { IItemInCreateLabCategoryProps } from '@interface/props';
// Hooks
const modalStore = useModalStore();
const { category } = storeToRefs(modalStore);
// Props
const {
  categoryButtonText,
  onClickFunction,
} = defineProps<IItemInCreateLabCategoryProps>();
</script>

<style lang="scss" scoped>
.item-wrapper {
  @include boxSet(100%, auto, 0px);
}
.button-box {
  @include flexSet(space-between, center, row);
  @include boxSet(100%, 56px, 8px);
  padding: 16px;
  cursor: pointer;
  border: 1px solid $gray03;
  & > img {
    @include boxSet(24px, 24px, 0px);
    object-fit: cover;
  }
}
.button-text-deactive {
  color: $gray05;
  @include fontSet(16px, 400, 22px);
}
.button-text-active {
  color: $gray09;
  @include fontSet(16px, 400, 22px);
}
</style>
