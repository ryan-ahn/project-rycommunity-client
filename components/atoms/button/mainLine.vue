<template>
  <button
    class="button-wrapper"
    :class="reactiveClass(type)"
    @click="onClickFunction"
  >
    <p>{{ text }}</p>
  </button>
</template>

<script setup lang="ts">
import { IButtonMainLineTypeProps } from '@interface/props';
// Props
const {
  text,
  type,
  onClickFunction,
} = defineProps<IButtonMainLineTypeProps>();
// Functions
const reactiveClass = (type: string) => {
  switch (type) {
    case 'A':
      return 'typeA-wrapper';
    case 'B':
      return 'typeB-wrapper';
    default:
      return '';
  }
};
</script>

<style lang="scss" scoped>
.button-wrapper {
  position: relative;
  @include flexSet(center, center, row);
  @include boxSet(auto, 48px, 40px);
  padding: 0 20px;
  cursor: pointer;
  border: 1px solid $black;
  @include colorSet($black, $white);
  & > p {
    @include fontSet(17px, 600, 22px);
    @include ellipsisSet(1, 22px);
  }
  &:hover{
    background-color: $gray03;
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
