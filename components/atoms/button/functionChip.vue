<template>
  <button
    class="button-wrapper"
    :class="handleClassType()"
  >
    <p>
      {{ text }}
    </p>
  </button>
</template>

<script setup lang="ts">
import { IButtonFunctionChipProps } from '@interface/props';
// Props
const {
  type,
  text,
} = defineProps<IButtonFunctionChipProps>();
// Functions
const handleClassType = () => {
  switch (type) {
    case 'A':
      return 'typeA-wrapper';
    case 'B':
      return 'typeB-wrapper';
    case 'C':
      return 'typeC-wrapper';
    default:
      return '';
  }
};
</script>

<style lang="scss" scoped>
.button-wrapper {
  @include flexSet(center, center, row);
  @include boxSet(auto, auto, 10px);

}
.typeA-wrapper {
  padding: 0px 8px;
  @include colorSet($white, $black);
  border: 1px solid $black;
  & > p {
    font-family: 'Roboto Mono', monospace;
    @include fontSet(11px, 400, 18px);
  }
}
.typeB-wrapper {
  padding: 0px 8px;
  @include colorSet($black, $white);
  border: 1px solid $black;
  & > p {
    font-family: 'Roboto Mono', monospace;
    @include fontSet(11px, 400, 18px);
  }
}
.typeC-wrapper {
  padding: 4px 8px;
  @include colorSet($black, rgba($white, 0.6));
  & > p {
    font-family: Pretendard;
    @include fontSet(12px, 600, 16px);
  }
}
</style>
