<template>
  <div class="title-wrapper">
    <div>
      {{ number }}
    </div>
    <h1>{{ header }}</h1>
  </div>
</template>

<script setup lang='ts'>
import { ITitleMediumNumberProps } from '@interface/props';
// Props
const {
  number,
  header,
} = defineProps<ITitleMediumNumberProps>();
</script>

<style lang='scss' scoped>
.title-wrapper {
  @include flexSet(center, center, column);
  & > div {
    margin-bottom: 8px;
    color: $empty;
    @include fontSet(12px, 700, 24px);
  }
  & > h1 {
    @include fontSet(20px, 700, 28px);
    margin-bottom: 4px;
    color: $black;
  }
}
</style>
