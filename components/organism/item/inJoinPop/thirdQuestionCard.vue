<template>
  <div class="item-wrapper">
    <div class="title-box">
      <p>{{ label }}</p>
      <AtomsTitleMediumCommon :title="title"/>
      <p class="description-box">
        {{ description }}
      </p>
    </div>
    <div class="content-box">
      <OrganismListCommonCheckList
        :menu="menu"
        :selectedList="selectedList"
        :onClickFunction="onClickFunction"
      />
    </div>
  </div>
</template>

<script setup lang='ts'>
import { IItemInJoinPopThirdQuestionProps } from '@interface/props';
// Props
const {
  label,
  title,
  description,
  menu,
  selectedList,
  onClickFunction,
} = defineProps<IItemInJoinPopThirdQuestionProps>();
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
  & > .description-box {
    color: $gray07;
    @include fontSet(14px, 400, 22px);
  }
}
.content-box {
  @include boxSet(100%, auto, 0px);
}
</style>
