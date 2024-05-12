<template>
  <button
    class="button-wrapper"
    :class="reactiveClass(type)"
    @click="onClickFunction"
  >
    <p>{{ text }}</p>
  </button>
</template>

<script setup lang='ts'>
import { IButtonModalSystemProps } from '@interface/props';
// Props
const {
  type,
  text,
  onClickFunction,
} = defineProps<IButtonModalSystemProps>();
// Functions
const reactiveClass = (type: string) => {
  switch (type) {
    case 'confirm':
      return 'confirm-wrapper';
    case 'cancel':
      return 'cancel-wrapper';
    default:
      return '';
  }
};
</script>

<style lang='scss' scoped>
.button-wrapper {
  padding: 10px 12px;
  cursor: pointer;
  & > p {
    @include fontSet(16px, 700, 20px);
  }
}
.confirm-wrapper {
  & > p {
    color: $black;
  }
}
.cancel-wrapper {
  & > p {
    color: $error;
  }
}
</style>
