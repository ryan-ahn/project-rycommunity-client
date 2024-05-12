<template>
  <div class="item-wrapper">
    <AtomsAreaSlot>
      <div class="content-box">
        <p>{{ introData }}</p>
      </div>
    </AtomsAreaSlot>
  </div>
</template>

<script setup lang="ts">
import { IItemInLabDetailIntroCardProps } from '@interface/props';
// Props
const { introData } = defineProps<IItemInLabDetailIntroCardProps>();
</script>

<style lang="scss" scoped>
.item-wrapper {
  @include boxSet(100%, auto, 0px);
}
.content-box {
  & > p {
    @include fontSet(18px, 400, 26px);
    word-break: break-all;
    white-space: pre-wrap;
  }
}
</style>
