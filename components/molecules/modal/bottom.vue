<template>
  <div class="modal-wrapper">
    <div class="touch-bar">
      <div/>
    </div>
    <div class="content-box">
      <div class="padding-bar"/>
      <component :is="children"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IModalBottomProps } from '@interface/props';
// Props
const { children } = defineProps<IModalBottomProps>();
</script>

<style lang="scss" scoped>
.modal-wrapper {
  @include boxSet(100%, auto, 0px);
}
.content-box {
  position: relative;
  width: 100%;
  height: calc(100% - 14px);
  overflow: hidden;
  background-color: $white;
  border-radius: 20px 20px 0 0;
}
.touch-bar {
  @include flexSet(center, center, row);
  padding: 4px 0;
  & > div {
    background-color: #a6a6a6;
    @include boxSet(54px, 6px, 3px);
  }
}
.padding-bar {
  background-color: $white;
  @include boxSet(100%, 15px, 0px);
}
</style>
