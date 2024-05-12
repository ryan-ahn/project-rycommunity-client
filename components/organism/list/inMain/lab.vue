<template>
  <ul class="list-wrapper">
    <li
      v-for="(item, index) in data"
      :key="item._id"
      :v-if="data !== null"
    >
      <OrganismItemInMainLabCard
        :number="'0' + (index + 1)"
        :name="item.name"
        :background="item.thumbnail"
        :onClickFunction="() => onClickFunction(item._id)"
      />
    </li>
  </ul>
</template>

<script setup lang="ts">
import { IListInMainLabProps } from '@interface/props';
// Props
const {
  data,
  onClickFunction,
} = defineProps<IListInMainLabProps>();
</script>

<style lang="scss" scoped>
.list-wrapper {
  @include boxSet(100%, auto, 0px);
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0 20px;
}
</style>
