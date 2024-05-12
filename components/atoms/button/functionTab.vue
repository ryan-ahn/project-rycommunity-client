<template>
  <button
    class="button-wrapper"
    :class="reactiveClass(active)"
    @click="onClickFunction"
  >
    <p>
      {{ text }}
    </p>
  </button>
</template>

<script setup lang="ts">
import { IButtonFunctionTabProps } from '@interface/props';
// Props
const {
  text,
  active,
  onClickFunction,
} = defineProps<IButtonFunctionTabProps>();
// Functions
const reactiveClass = (active: boolean) => {
  switch (active) {
    case true:
      return 'active-wrapper';
    case false:
      return 'deactive-wrapper';
    default:
      return '';
  }
};
</script>

<style lang="scss" scoped>
.button-wrapper {
  @include boxSet(auto, auto, 20px);
  padding: 6px 12px;
  cursor: pointer;
  & > p {
    @include fontSet(14px, 500, 20px);
  }
}
.active-wrapper {
  @include colorSet($white, $black);
}
.deactive-wrapper {
  border: 1px solid $gray03;
  @include colorSet($gray09, $white);
}
</style>
