<template>
  <div class="item-wrapper">
    <AtomsAreaSlot>
      <AtomsProfile52size
        :thumbnail="masterThumbnail"
        :name="masterName"
        :grade="masterGrade"
      />
      <div class="intro-box">
        <p>{{ summaryData }}</p>
      </div>
    </AtomsAreaSlot>
  </div>
</template>

<script setup lang="ts">
import { IItemInLabDetailSummaryCardProps } from '@interface/props';
// Props
const {
  summaryData,
  masterThumbnail,
  masterName,
  masterGrade,
} = defineProps<IItemInLabDetailSummaryCardProps>();
</script>

<style lang="scss" scoped>
.item-wrapper {
  @include flexSet(flex-start, flex-start, column);
  @include boxSet(100%, auto, 0px);
  gap: 20px;
}
.intro-box {
  & > p {
    @include fontSet(18px, 400, 26px);
    word-break: break-all;
    white-space: pre-wrap;
  }
}
</style>
