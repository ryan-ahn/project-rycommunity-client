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
import { IButtonMainFillTypeProps } from '@interface/props';
// Props
const {
  text,
  type,
  onClickFunction,
} = defineProps<IButtonMainFillTypeProps>();
// Functions
const reactiveClass = (type: string) => {
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
.typeC-wrapper {
  width: 45%;
  padding: 13px 36.5px;
}
/* .typeC-wrapper {
  @include colorSet($white, $theme01);
  width: 100%;
  &:disabled {
    cursor: disabled;
    @include colorSet($white, $gray07);
  }
}
.typeD-wrapper {
  @include colorSet($white, $theme01);
  width: 45%;
  padding: 13px 36.5px;
  &:disabled {
    cursor: disabled;
    @include colorSet($white, $gray07);
  }
} */

.auto-width {
  width: auto;
}
.half-width {
  width: 45%;
  padding: 13px 36.5px;
}
.full-width {
  width: 100%;
}
.theme01-color {
  &:disabled {
    cursor: disabled;
    @include colorSet($white, black);
    opacity: 0.3;
  }
}
.gray07-color {
  @include colorSet($white, $gray07);
}
</style>
