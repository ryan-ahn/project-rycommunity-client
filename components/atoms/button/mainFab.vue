<template>
  <button
    class="button-wrapper"
    :style="{ width: expand ? `${width}px` : '48px' }"
    @click="onClickFunction"
  >
    <img
      src="/icons/common/button-plus.svg"
      alt="plus"
    >
    <Transition name="expand">
      <p v-if="expand">
        {{ text }}
      </p>
    </Transition>
  </button>
</template>

<script setup lang="ts">
import { IButtonMainFabProps } from '@interface/props';
// Props
const {
  text,
  width,
  expand,
  onClickFunction,
} = defineProps<IButtonMainFabProps>();
</script>

<style lang="scss" scoped>
.button-wrapper {
  position: fixed;
  right: 20px;
  bottom: 80px;
  @include flexSet(space-between, center, row);
  @include boxSet(auto, 48px, 24px);
  gap: 8px;
  padding: 0px 18px;
  transition: all 0.2s ease-out;
  @include colorSet($white, $black);
  @include shadowSet(5, 5, 7, $shadow, 0.3);
  & > img {
    @include boxSet(14px, 14px, 0px);
  }
  & > p {
    @include fontSet(18px, 700, 24px);
  }
  &:hover{
    opacity: 0.8;
  }
  &:disabled {
    cursor: auto;
    opacity: 0.3;
  }
}
</style>
