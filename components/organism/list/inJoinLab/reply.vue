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
      <OrganismItemInJoinLabReplyCard
        :label="label[index]"
        :question="item.question"
        :reply="item.answer"
      />
    </li>
  </ul>
</template>

<script setup lang="ts">
import { IListInJoinLabReplyProps } from '@interface/props';
// Props
const {
  data,
  label,
} = defineProps<IListInJoinLabReplyProps>();
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
