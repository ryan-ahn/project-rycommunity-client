<template>
  <ul class="list-wrapper">
    <li
      v-for="item in menu"
      :key="item.id"
      class="list-box"
      @click="onClickFunction(item.id)"
    >
      <OrganismItemCommonRadioCard
        :id="item.id"
        :name="item.name"
        :selectedItem="selectedItem"
      />
    </li>
  </ul>
</template>

<script setup lang="ts">
import { IListCommonRadioListProps } from '@interface/props';
// Props
const {
  menu,
  selectedItem,
  onClickFunction,
} = defineProps<IListCommonRadioListProps>();
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
