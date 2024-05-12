<template>
  <div class="item-wrapper">
    <div class="title-box">
      <p>{{ label }}</p>
      <AtomsTitleMediumCommon :title="title"/>
    </div>
    <div class="content-box">
      <OrganismListCommonRadioList
        :menu="menu"
        :selectedItem="selectedItem"
        :onClickFunction="onClickFunction"
      />
    </div>
  </div>
</template>

<script setup lang='ts'>
import { IItemInJoinPopFifthQuestionProps } from '@interface/props';
// Props
const {
  label,
  title,
} = defineProps<IItemInJoinPopFifthQuestionProps>();
</script>

<style lang='scss' scoped>
.item-wrapper {
  @include flexSet(flex-start, flex-start, column);
  gap: 20px;
}
.title-box {
  @include flexSet(flex-start, flex-start, column);
  gap: 4px;
  & > p {
    color: $gray05;
    @include fontSet(16px, 600, 24px);
  }
}
.content-box {
  @include boxSet(100%, auto, 0px);
}
</style>
