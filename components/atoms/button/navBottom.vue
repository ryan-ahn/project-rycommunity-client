<template>
  <div
    class="button-wrapper"
    :class="reactiveClass(active)"
  >
    <img
      :src="icon"
      alt="menu"
    >
    <p>
      {{ label }}
    </p>
  </div>
</template>

<script setup lang='ts'>
import { IButtonNavBottomProps } from '@interface/props';
// Props
const {
  icon,
  label,
  active,
} = defineProps<IButtonNavBottomProps>();
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

<style lang='scss' scoped>
.button-wrapper {
  & > img {
    @include flexSet(center, center, column);
    @include boxSet(28px, 28px, 0px);
    object-fit: cover;
  }
  & > p {
    text-align: center;
    @include fontSet(11px, 500, 16px);
  }
}
.active-wrapper {
  & > p {
    font-weight: 600;
  }
}
.deactive-wrapper {
  & > p {
    font-weight: 500;
  }
}
</style>
