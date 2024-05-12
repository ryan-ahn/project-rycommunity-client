<template>
  <ul class="list-wrapper">
    <li
      v-for="(item, index) in data"
      :key="item.id"
      :v-if="data !== null"
      @click="onClickGoToDetail(item.id)"
    >
      <OrganismItemInMainCategoryCard
        :name="item.name"
        :number="index + 1"
        :newCategory="item.new"
        :active="active === index"
      />
    </li>
  </ul>
</template>

<script setup lang="ts">
import { IListInMainCategoryProps } from '@interface/props';
// Props
const {
  data,
  active,
  onClickGoToDetail,
} = defineProps<IListInMainCategoryProps>();
</script>

<style lang="scss" scoped>
.list-wrapper {
  @include boxSet(100%, auto, 0px);
  padding: 0px 20px;
}
</style>
