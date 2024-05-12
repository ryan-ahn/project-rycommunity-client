<template>
  <div class="item-wrapper">
    <AtomsInputMultiLine
      :rows="detailRows"
      :placeholder="detailPlaceholder"
      :maxLength="detailMaxLength"
      :lengthShow="true"
      :onChangeValue="onChangeLabDetail"
    />
  </div>
</template>

<script setup lang="ts">
import { IItemInCreateLabDetailProps } from '@interface/props';
// Props
const {
  detailPlaceholder,
  detailRows,
  detailMaxLength,
  onChangeLabDetail,
} = defineProps<IItemInCreateLabDetailProps>();
</script>

<style lang="scss" scoped>
.item-wrapper {
  @include boxSet(100%, auto, 0px);
}
</style>
