<template>
  <div class="list-wrapper">
    <ul class="ul-box">
      <AtomsButtonFunctionChip
        :type="chipType"
        :text="chipText"
      />
      <li
        v-for="item in data"
        :key="item.postDetail._id"
        :v-if="data !== null"
        class="list-box"
      >
        <OrganismItemInMainPostCard
          :body="item.postDetail.body"
          :likeCount="item.postLikes.count"
          :commentCount="item.postComments.count"
          :onClickGoToDetail="() => onClickFunction(item.postDetail._id)"
        />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { IListInMainPostProps } from '@interface/props';
// Props
const {
  data,
  chipText,
  chipType,
  onClickFunction,
} = defineProps<IListInMainPostProps>();
</script>

<style lang="scss" scoped>
.list-wrapper {
  padding: 0 20px;
}
.ul-box {
  @include flexSet(flex-start, flex-start, column);
  @include boxSet(100%, auto, 20px);
  gap: 10px;
  padding: 16px;
  border: 1px solid $black;
  & > li:not(:last-child) {
    border-bottom: 1px solid $gray03;
  }
}
.list-box {
  @include boxSet(100%, auto, 0px);
}
</style>
