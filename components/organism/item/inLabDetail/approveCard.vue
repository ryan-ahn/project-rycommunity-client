<template>
  <div
    class="item-wrapper"
    :class="isMobileOrTablet ? 'mobile-vw-wrapper' : 'desktop-wrapper'"
  >
    <div class="status-box">
      <div>승인완료</div>
      <p>{{ validateCount(approvedCount) }}</p>
    </div>
    <AtomsButtonMainFill
      class="button-wrapper"
      :type="buttonType"
      :text="buttonText"
      :onClickFunction="() => onClickFunction(labId)"
    />
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useLabStore } from '@store/index';
import { IItemInLabDetailApproveCardProps } from '@interface/props';
// Hooks
const { isMobileOrTablet } = useDevice();
const labStore = useLabStore();
const { recruitStatus } = storeToRefs(labStore);
// Props
const {
  labId,
  approvedCount,
  buttonType,
  buttonText,
  onClickFunction,
} = defineProps<IItemInLabDetailApproveCardProps>();
// State

</script>

<style lang="scss" scoped>
.item-wrapper {
  position: fixed;
  bottom: 0;
  @include flexSet(space-between, center, row);
  @include boxSet(100%, 80px, 0px);
  gap: 20px;
  padding: 16px;
  background-color: white;
  @include shadowSet(0, -10, 30, $shadow, 0.05);
}
.status-box {
  @include flexSet(center, flex-start, column);
  gap: 2px;
  & > div {
    @include fontSet(16px, 400, 20px);
  }
  & > p {
    @include fontSet(16px, 500, 24px);
  }
}

.button-wrapper {
  @include colorSet($white, $theme01);
}

</style>
