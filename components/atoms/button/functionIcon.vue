<template>
  <button
    class="button-wrapper"
    :style="{ width: `${touch}px`, height: `${touch}px` }"
    @click="onClickFunction"
  >
    <img
      :src="icon"
      :style="{ width: `${width}px` }"
      alt="icon"
    >
  </button>
</template>

<script setup lang='ts'>
import { IButtonFunctionIconProps } from '@interface/props';
// Props
const {
  icon,
  width,
  touch,
  onClickFunction,
} = defineProps<IButtonFunctionIconProps>();
</script>

<style lang='scss' scoped>
.button-wrapper {
  @include flexSet(center, center, row);
  cursor: pointer;
  :disabled {
    cursor: auto;
  }
}
</style>
