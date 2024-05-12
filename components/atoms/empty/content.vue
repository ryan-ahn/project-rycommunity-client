<template>
  <div
    class="empty-wrapper"
    :class="type"
  >
    <p>{{ text }}</p>
    <p>{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
import { IEmptyContentProps } from '@interface/props';
// Props
const {
  text,
  type,
  description,
} = defineProps<IEmptyContentProps>();
</script>

<style lang="scss" scoped>
.empty-wrapper {
  @include flexSet(center, center, column);
  @include boxSet(100%, 100%, 0px);
  gap: 8px;
  & > p:nth-child(1) {
    color: $empty;
    @include fontSet(16px, 600, 20px);
  }
  & > p:nth-child(2) {
    color: $empty;
    @include fontSet(12px, 400, 20px);
  }
}

.empty-wrapper-custom {
  padding: 46px 0;
  & > p:nth-child(1) {
    color: $gray07;
    @include fontSet(14px, 500, 22px);
  }
  & > p:last-child {
    color: $gray05;
    @include fontSet(16px, 400, 24px);
  }
}
</style>
