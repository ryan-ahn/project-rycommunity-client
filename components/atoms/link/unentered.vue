<template>
  <div class="link-wrapper">
    <input
      class="sized-row-full-box"
      :placeholder="placeholder"
      @input="onInputFunction($event)"
      @keypress.enter="onClickFunction"
    >
    <button
      class="button-box"
      @click="onClickFunction"
    >
      <p :style="{ color: url ? '#252525' : '#c1c1c1' }">
        {{ buttonText }}
      </p>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ILinkUnenteredProps } from '@interface/props';
// Props
const {
  url,
  placeholder,
  buttonText,
  onInputFunction,
  onClickFunction,
} = defineProps<ILinkUnenteredProps>();
</script>

<style lang="scss" scoped>
.link-wrapper {
  @include flexSet(space-between, center, row);
  @include boxSet(100%, 62px, 8px);
  gap: 10px;
  padding: 0 16px;
  border: 1px solid $gray03;
}
.button-box {
  @include boxSet(auto, 100%, 0px);
  & > p {
    @include fontSet(14px, 500, 22px);
  }
}
</style>
