<template>
  <div
    class="item-wrapper"
    :style="{
      backgroundImage: `url(${thumbnail})`,
    }"
    @click="onClickFunction"
  >
    <div class="position-box">
      <AtomsButtonFunctionChip
        v-if="offline"
        :type="offChipType"
        :text="offChipText"
      />
      <AtomsButtonFunctionChip
        v-if="live"
        :type="liveChipType"
        :text="liveChipText"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { IItemCommonCardProps } from '@interface/props';
// Props
const {
  thumbnail,
  offline,
  offChipType,
  offChipText,
  live,
  liveChipType,
  liveChipText,
  onClickFunction,
} = defineProps<IItemCommonCardProps>();
</script>

<style lang="scss" scoped>
.item-wrapper {
  position: relative;
  @include boxSet(100%, auto, 20px);
  overflow: hidden;
  cursor: pointer;
  background-size: cover;
  border: 0.5px solid $black;
  aspect-ratio: 320 / 380;
}
.position-box {
  position: absolute;
  top: 16px;
  left: 16px;
  @include flexSet(center, center, row);
  gap: 4px;
}
</style>
