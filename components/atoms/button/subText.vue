<template>
  <button
    class="button-wrapper"
    @click="onClickFunction"
  >
    <p>{{ text }}</p>
  </button>
</template>

<script setup lang="ts">
import { IButtonSubTextProps } from '@interface/props';
// Props
const {
  text,
  onClickFunction,
} = defineProps<IButtonSubTextProps>();
</script>

<style lang="scss" scoped>
.button-wrapper {
  position: relative;
  @include flexSet(center, center, row);
  @include boxSet(auto, 48px, 40px);
  padding: 0 20px;
  cursor: pointer;
  @include colorSet($white, $black);
  & > p {
    @include fontSet(17px, 600, 22px);
    @include ellipsisSet(1, 22px);
  }
  &:hover{
    opacity: 0.8;
  }
  &:disabled {
    cursor: auto;
    opacity: 0.3;
  }
}
.typeA-wrapper {
  width: auto;
}
.typeB-wrapper {
  width: 100%;
}
</style>
