<template>
  <ul class="list-wrapper">
    <li
      v-for="item in data"
      :key="item.id"
      class="item-box"
    >
      <div :style="{ backgroundImage: `url(${item.thumbnail})` }"/>
      <div>
        <p>{{ CONTENT_STACK.category.pop }}</p>
        <h2>{{ item.title }}</h2>
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { IListInCategoryPopProps } from '@interface/props';
import { CONTENT_STACK } from '@assets/data/content';
// Props
const { data } = defineProps<IListInCategoryPopProps>();
</script>

<style lang="scss" scoped>
.list-wrapper {
  @include boxSet(100%, auto, 0px);
}
.item-box {
  @include flexSet(center, center, row);
  padding: 10px 0;
  cursor: pointer;
  border-bottom: 0.5px solid $gray03;
  & > div:nth-child(1) {
    margin-right: 12px;
    @include boxSet(80px, 80px, 8px);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  & > div:nth-child(2) {
    @include boxSet(calc(100% - 90px), auto, 0px);
    & > p {
      margin-bottom: 5px;
      color: $gray05;
      @include fontSet(12px, 400, 16px);
      @include ellipsisSet(1, 16px);
    }
    & > h2 {
      @include fontSet(16px, 500, 24px);
      @include ellipsisSet(1, 24px);
    }
  }
}
</style>
