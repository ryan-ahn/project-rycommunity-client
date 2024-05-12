<template>
  <div
    class="button-wrapper"
    :class="isMobileOrTablet ? 'mobile-wrapper' : 'desktop-wrapper'"
    @click="onClickFunction"
  >
    <p>{{ text }}</p>
  </div>
</template>

<script setup lang="ts">
import { IButtonModalBottomProps } from '@interface/props';
// Hooks
const { isMobileOrTablet } = useDevice();
// Props
const {
  text,
  onClickFunction,
} = defineProps<IButtonModalBottomProps>();
</script>

<style lang="scss" scoped>
.button-wrapper {
  position: fixed;
  bottom: 0;
  cursor: pointer;
  border-top: 1px solid $gray03;
  @include flexSet(center, center, row);
  @include boxSet(100%, 52px, 0px);
  @include colorSet($black, $white);
}
</style>
