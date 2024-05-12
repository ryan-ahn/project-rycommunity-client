<template>
  <div class="title-wrapper">
    <h2>{{ title }}</h2>
  </div>
</template>

<script setup lang="ts">
import { ITitleMediumCommonProps } from '@interface/props';
// Props
const { title } = defineProps<ITitleMediumCommonProps>();
</script>

<style lang="scss" scoped>
.title-wrapper {
  @include boxSet(100%, auto, 0px);
  & > h2 {
    @include fontSet(18px, 700, 24px);
  }
}
</style>
