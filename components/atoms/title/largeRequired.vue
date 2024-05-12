<template>
  <div class="title-wrapper">
    <h1>{{ title }}</h1>
    <p v-if="required">
      *
    </p>
  </div>
</template>

<script setup lang="ts">
import { ITitleLargeRequiredProps } from '@interface/props';
// Props
const {
  title,
  required,
} = defineProps<ITitleLargeRequiredProps>();
</script>

<style lang="scss" scoped>
.title-wrapper {
  @include flexSet(flex-start, center, row);
  @include boxSet(100%, auto, 0px);
  gap: 4px;
  & > h1 {
    @include fontSet(20px, 600, 24px);
  }
  & > p {
    color: $required;
    @include fontSet(14px, 500, 22px);
  }
}
</style>
