<template>
  <button
    class="button-wrapper"
    @click="onClickFunction"
  >
    <p>{{ text }}</p>
    <img
      :src="`/icons/common/arrow-down-gray.svg`"
      alt="arrow"
    >
  </button>
</template>

<script setup lang="ts">
import { IButtonShowMoreProps } from '@interface/props';
// Props
const {
  text,
  onClickFunction,
} = defineProps<IButtonShowMoreProps>();

</script>

<style lang="scss" scoped>
.button-wrapper {
  @include flexSet(center, center, row);
  @include flexSet(center, center, row);
  @include boxSet(100%, 48px, 0px);
  cursor: pointer;
  border-radius: 1px solid red;
  &:hover {
    background-color: $gray03;
  }
  &:active {
    @include colorSet($gray09, $gray03);
  }
  &:disabled {
    cursor: not-allowed;
    background-color: $transparent;
    opacity: 0.3;
  }
}
</style>
