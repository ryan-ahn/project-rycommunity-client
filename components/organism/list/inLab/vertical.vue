<template>
  <ul class="list-wrapper">
    <li
      v-for="item in data"
      :key="item.labInfo._id"
      class="content-box"
      @click="onClickGoToDetail(item.labInfo._id)"
    >
      <OrganismItemInLabVerticalCard
        :recruitLabelStatus="item.periodStatus.recruitStatus"
        :recruitLabelText="recruitLabelText"
        :chipType="chipType"
        :category="item.labCategory.categoryList"
        :name="item.labInfo.name"
        :summary="item.labInfo.summary"
        :background="item.labInfo.thumbnail"
      />
    </li>
  </ul>
</template>

<script setup lang="ts">
import { IListInLabVerticalProps } from '@interface/props';
import { EMPTY_CONTENT } from '@assets/data/empty';
import { CONTENT_STACK } from '@assets/data/content';
import { BUTTON_FUNCTION_CHIP } from '@assets/data/button';
// Props
const {
  data,
  onClickGoToDetail,
} = defineProps<IListInLabVerticalProps>();
// State
const recruitLabelText = CONTENT_STACK.lab.recruitText;
const chipType = BUTTON_FUNCTION_CHIP.lab.vertical.type;
const emptyText = EMPTY_CONTENT.labList.all.text;
</script>

<style lang="scss" scoped>
.list-wrapper {
  position: relative;
  @include flexSet(center, center, column);
  @include boxSet(100%, auto, 0px);
  gap: 20px;
  padding: 20px;
  overflow: scroll;
}
.content-box {
  @include boxSet(100%, auto, 0px);
}
.empty-box {
  @include boxSet(100%, auto, 0px);
}
</style>
