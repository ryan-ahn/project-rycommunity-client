<template>
  <div class="item-wrapper">
    <div class="subtitle-box">
      <p>{{ label }}</p>
      <h2>{{ question }}</h2>
    </div>
    <AtomsInputMultiLine
      :rows="questionRows"
      :placeholder="questionPlaceholder"
      :maxLength="questionMaxLength"
      :lengthShow="questionLengthShow"
      :onChangeValue="onChangeFunction"
    />
  </div>
</template>

<script setup lang="ts">
import { IItemInJoinLabQuestionProps } from '@interface/props';
// Props
const {
  label,
  question,
  questionRows,
  questionPlaceholder,
  questionMaxLength,
  questionLengthShow,
  onChangeFunction,
} = defineProps<IItemInJoinLabQuestionProps>();
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
