<template>
  <div class="item-wrapper">
    <ul class="ul-box">
      <li>
        <AtomsButtonFunctionTag
          :type="categoryTagType"
          :text="categoryData"
        />
      </li>
      <li
        v-for="(item, index) in objectiveDataList"
        :key="index"
      >
        <AtomsButtonFunctionTag
          :type="objectiveTagType"
          :text="item"
        />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { IItemInLabDetailCategoryCardProps } from '@interface/props';
// Props
const {
  categoryData,
  categoryTagType,
  objectiveDataList,
  objectiveTagType,
} = defineProps<IItemInLabDetailCategoryCardProps>();
</script>

<style lang="scss" scoped>
.item-wrapper {
  @include flexSet(flex-start, flex-start, column);
  @include boxSet(100%, auto, 0px);
  gap: 20px;
}
.ul-box {
  @include flexSet(flex-start, center, row);
  @include boxSet(auto, auto, 0px);
  flex-wrap: wrap;
  gap: 8px;
}
</style>
