<template>
  <div class="box-wrapper">
    <p>
      {{ text }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { IAreaBoxProps } from '@interface/props';

// Props
const { text } = defineProps<IAreaBoxProps>();
</script>

<style lang="scss" scoped>
.box-wrapper {
  @include boxSet(100%, auto, 0px);
  padding:16px 12px;
  background-color: #FAFAFA;
  border: 1px solid $gray03;
  border-radius: 8px;
  & > p {
    @include fontSet(16px, 500, 24px);
    word-wrap: break-word;
  }
}
</style>
