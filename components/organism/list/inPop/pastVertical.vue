<template>
  <ul class="list-wrapper">
    <li
      v-for="item in data"
      :key="item.popInfo._id"
      class="list-box"
    >
      <OrganismItemCommonThumbnailLabelCard
        :thumbnail="item.popInfo.thumbnail"
        :title="item.popInfo.title"
        :category="category"
        :onClickFunction="() => onClickFunction(item.popInfo._id)"
      />
    </li>
  </ul>
</template>

<script setup lang="ts">
import { IListInPopPastProps } from '@interface/props';
// Props
const {
  data,
  category,
  onClickFunction,
} = defineProps<IListInPopPastProps>();
</script>

<style lang="scss" scoped>
.list-wrapper {
  @include flexSet(flex-start, center, column);
  @include boxSet(100%, auto, 0px);
}
.list-box {
  @include boxSet(100%, auto, 0px);
}
.title-box {
  padding: 16px 0;
}
</style>
