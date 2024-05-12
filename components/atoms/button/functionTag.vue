<template>
  <button
    class="button-wrapper"
    :class="reactiveClass(type)"
    disabled
  >
    <p>{{ text }}</p>
  </button>
</template>

<script setup lang="ts">
import { IButtonFunctionTagProps } from '@interface/props';
// Props
const {
  type,
  text,
} = defineProps<IButtonFunctionTagProps>();
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
  @include boxSet(auto, auto, 12px);
  padding: 4px 8px;
  background-color: rgba($white, 0.6);
  border: 1px solid;
  & > p {
    @include fontSet(16px, 400, 18px);
  }
}
.typeA-wrapper {
  @include colorSet($black, $gray01);
  border: 1px solid $gray01;
}
.typeB-wrapper {
  @include colorSet($gray07, $white);
  border: 1px solid $gray03;
}
</style>
