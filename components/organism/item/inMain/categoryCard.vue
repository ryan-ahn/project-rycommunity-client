<template>
  <div class="item-wrapper">
    <div
      class="content-box"
      :class="active ? 'activeBox' : ''"
    >
      <p>{{ number }}</p>
      <h1>{{ name }}</h1>
      <span v-if="newCategory">NEW</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IItemInMainCategoryProps } from '@interface/props';
// Props
const {
  name,
  active,
  newCategory,
  number,
} = defineProps<IItemInMainCategoryProps>();
</script>

<style lang="scss" scoped>
.item-wrapper {
  position: relative;
  cursor: pointer;
}

.content-box {
  @include flexSet(flex-start, center, row);
  @include boxSet(100%, 64px, 20px);
  padding: 0 16px;
  & > p {
    margin-right: 12px;
    color: $gray05;
    @include fontSet(11px, 600, 22px);
  }
  & > h1 {
    color: white;
    @include fontSet(20px, 900, 22px);
    letter-spacing: 1px;
    -webkit-text-stroke: 1px $gray05;
  }
  & > span {
    margin-left: 3px;
    color: $theme01;
    @include fontSet(10px, 800, 22px);
  }
}
.activeBox {
  background-color: white;
  @include shadowSet(0, 0, 2.5, $shadow, 0.3);
  border: 0.5px solid $black;
  transition: border 0.3s ease-out;
  & > p:nth-child(1) {
    color: $black;
    @include fontSet(14px, 800, 22px);
    transition: all 0.2s ease-out;
  }
  & > h1 {
    color: $black;
    @include fontSet(26px, 900, 30px);
    letter-spacing: 0px;
    -webkit-text-stroke: 0px;
    transition: all 0.2s ease-out;
  }
}
</style>
