<template>
  <div class="item-wrapper">
    <img
      :src="`/icons/lab/check-${
        selectedList?.includes(name) ? 'red' : 'white'
      }.svg`"
      alt="check"
    >
    <p>{{ name }}</p>
  </div>
</template>

<script setup lang="ts">
import { IItemCommonCheckProps } from '@interface/props';
// Props
const { selectedList } = defineProps<IItemCommonCheckProps>();
</script>

<style lang="scss" scoped>
.item-wrapper {
  @include flexSet(flex-start, center, row);
  @include boxSet(100%, auto, 0px);
  padding: 16px 0px;
  & > img {
    @include boxSet(18px, 18px, 3px);
    margin-right: 14px;
  }
  & > p {
    @include fontSet(18px, 500, 26px);
  }
}
</style>
