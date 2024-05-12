<template>
  <a
    class="button-wrapper"
    :href="href"
  >
    <img
      :src="`/icons/common/button-kakao.svg`"
      alt="icon"
    >
    <h1>{{ text }}</h1>
  </a>
</template>

<script setup lang="ts">
import { IButtonFunctionSocialProps } from '@interface/props';
// Props
const {
  text,
  href,
} = defineProps<IButtonFunctionSocialProps>();
</script>

<style lang="scss" scoped>
.button-wrapper {
  position: relative;
  @include flexSet(center, center, row);
  @include boxSet(100%, 45px, 4px);
  @include colorSet($black, $kakao);
  & > img {
    position: absolute;
    left: 15px;
    width: 22px;
  }
  & > h1 {
    @include fontSet(16px, 500, 22px);
  }
}
</style>
