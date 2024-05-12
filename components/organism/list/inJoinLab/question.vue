<template>
  <ul
    v-if="data"
    class="list-wrapper"
  >
    <li
      v-for="(item, index) in data"
      :key="index"
      class="list-box"
    >
      <OrganismItemInJoinLabQuestionCard
        :label="label[index]"
        :question="item"
        :questionRows="questionRows"
        :questionPlaceholder="questionPlaceholder"
        :questionMaxLength="questionMaxLength"
        :questionLengthShow="questionLengthShow"
        :onChangeFunction="e => onChangeFunction(e, index, item)"
      />
    </li>
  </ul>
</template>

<script setup lang="ts">
import { IListInJoinLabQuestionProps } from '@interface/props';
// Props
const {
  data,
  label,
  questionRows,
  questionPlaceholder,
  questionMaxLength,
  questionLengthShow,
  onChangeFunction,
} = defineProps<IListInJoinLabQuestionProps>();
</script>

<style lang="scss" scoped>
.list-wrapper {
  @include flexSet(flex-start, flex-start, column);
  @include boxSet(100%, auto, 0px);
  gap: 20px;
}
.list-box {
  @include boxSet(100%, auto, 0px);
}
</style>
