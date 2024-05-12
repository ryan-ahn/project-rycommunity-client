<template>
  <div class="item-wrapper">
    <div class="button-box">
      <AtomsButtonFunctionChip
        :type="popButtonType"
        :text="popButtonText"
      />
      <AtomsButtonFunctionChip
        v-if="liveStatus"
        :type="liveButtonType"
        :text="liveButtonText"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { IItemInPopDetailLiveCardProps } from '@interface/props';
// Props
const {
  popButtonText,
  popButtonType,
  liveButtonText,
  liveButtonType,
  liveStatus,
} = defineProps<IItemInPopDetailLiveCardProps>();
</script>

<style lang="scss" scoped>
.item-wrapper {
  padding: 40px 20px 24px 20px;
}
.button-box {
  @include flexSet(flex-start, center, row);
  gap: 6px;
}
</style>
