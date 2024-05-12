<template>
  <div class="item-wrapper">
    <div class="subtitle-box">
      <p>{{ label }}</p>
      <h2>{{ question }}</h2>
    </div>
    <AtomsAreaBox :text="reply"/>
  </div>
</template>

<script setup lang="ts">
import { IItemInJoinLabReplyProps } from '@interface/props';

// Props
const {
  label,
  question,
  reply,
} = defineProps<IItemInJoinLabReplyProps>();
</script>

<style lang="scss" scoped>
.item-wrapper {
  @include flexSet(flex-start, flex-start, column);
  gap: 16px;
}

.subtitle-box {
  @include flexSet(flex-start, flex-start, column);
  gap: 4px;
  & > p {
    color: $gray05;
    @include fontSet(16px, 600, 24px);
  }
  & > h2 {
    @include fontSet(16px, 400, 24px);
  }
}
</style>
