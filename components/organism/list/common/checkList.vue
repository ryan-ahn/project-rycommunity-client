<template>
  <ul class="list-wrapper">
    <li
      v-for="item in menu"
      :key="item.id"
      class="list-box"
      @click="onClickFunction(item.value)"
    >
      <OrganismItemCommonCheckCard
        :selectedList="selectedList"
        :name="item.name"
      />
    </li>
  </ul>
</template>

<script setup lang="ts">
import { IListCommonCheckListProps } from '@interface/props';
// Props
const {
  menu,
  selectedList,
  onClickFunction,
} = defineProps<IListCommonCheckListProps>();
</script>

<style lang="scss" scoped>
.list-wrapper {
  @include boxSet(100%, auto, 0px);
}
.list-box {
  @include flexSet(flex-start, center, row);
  @include boxSet(100%, auto, 0px);
  cursor: pointer;
}
</style>
