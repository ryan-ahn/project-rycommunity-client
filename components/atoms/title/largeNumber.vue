<template>
  <div class="title-wrapper">
    <p>{{ number }}</p>
    <h1>{{ title }}</h1>
  </div>
</template>

<script setup lang='ts'>
import { ITitleLargeNumberProps } from '@interface/props';
// Props
const {
  number,
  title,
} = defineProps<ITitleLargeNumberProps>();
</script>

<style lang='scss' scoped>
.title-wrapper {
  @include flexSet(flex-start, center, row);
  & > p {
    margin-right: 5px;
    color: $theme01;
    @include fontSet(20px, 600, 24px);
  }
  & > h1 {
    @include fontSet(20px, 600, 24px);
  }
}
</style>
