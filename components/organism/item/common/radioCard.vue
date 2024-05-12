<template>
  <div class="item-wrapper">
    <div :class="reactiveClass(id === selectedItem)">
      <div/>
    </div>
    <p>{{ name }}</p>
  </div>
</template>

<script setup lang="ts">
import { IItemCommonRadioProps } from '@interface/props';
// Props
const {
  id,
  name,
  selectedItem,
} = defineProps<IItemCommonRadioProps>();
// Functions
const reactiveClass = (selected: boolean) => {
  switch (selected) {
    case true:
      return 'active-box';
    case false:
      return 'deactive-box';
    default:
      return '';
  }
};
</script>

<style lang="scss" scoped>
.item-wrapper {
  @include flexSet(flex-start, center, row);
  @include boxSet(100%, auto, 0px);
  gap: 8px;
  padding: 16px 0px;
  & > p {
    @include fontSet(18px, 500, 22px);
  }
}
.active-box {
  @include flexSet(center, center, row);
  @include boxSet(21px, 21px, 10.5px);
  border: 1.5px solid $theme01;
  & > div {
    @include boxSet(9px, 9px, 5px);
    background-color: $theme01;
  }

}
.deactive-box {
  & > div {
    @include flexSet(center, center, row);
    @include boxSet(21px, 21px, 10.5px);
    border: 1px solid $black;
  }
}
</style>
