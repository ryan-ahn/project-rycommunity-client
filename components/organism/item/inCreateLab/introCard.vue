<template>
  <div class="item-wrapper">
    <AtomsInputSingleLine
      :type="introNameType"
      :placeholder="introNamePlaceholder"
      :maxLength="introNameMaxLength"
      :lengthShow="true"
      :onChangeValue="onChangeLabTitle"
    />
    <AtomsInputMultiLine
      :rows="introSummaryRows"
      :placeholder="introSummaryPlaceholder"
      :maxLength="introSummaryMaxLength"
      :lengthShow="true"
      :onChangeValue="onChangeLabSummary"
    />
  </div>
</template>

<script setup lang="ts">
import { IItemInCreateLabIntroProps } from '@interface/props';
// Props
const {
  introNameType,
  introNamePlaceholder,
  introNameMaxLength,
  introSummaryPlaceholder,
  introSummaryMaxLength,
  introSummaryRows,
  onChangeLabTitle,
  onChangeLabSummary,
} = defineProps<IItemInCreateLabIntroProps>();
</script>

<style lang="scss" scoped>
.item-wrapper {
  @include boxSet(100%, auto, 0px);
  & > p {
    @include boxSet(100%, auto, 8px);
    padding: 8px;
    margin-bottom: 10px;
    background-color: rgba(242, 242, 242, 0.8);
    @include fontSet(14px, 400, 22px);
  }
}
</style>
