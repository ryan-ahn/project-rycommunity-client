<template>
  <div
    class="item-wrapper"
    @click="onClickGoToDetail"
  >
    <div class="body-box">
      <p>{{ body }}</p>
    </div>
    <div class="flex-row-space-box">
      <div class="flex-row-center-box">
        <div class="heart-box">
          <img
            :src="`/icons/lounge/heart-deactive.svg`"
            alt="heart"
          >
          <p>{{ likeCount }}</p>
        </div>
        <div class="comment-box">
          <img
            src="/icons/lounge/comment-gray.svg"
            alt="comment"
          >
          <p>{{ commentCount }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IItemInMainPostCardProps } from '@interface/props';
// Props
const {
  body,
  likeCount,
  commentCount,
  onClickGoToDetail,
} = defineProps<IItemInMainPostCardProps>();
</script>

<style lang="scss" scoped>
.item-wrapper {
  @include flexSet(flex-start, flex-start, column);
  @include boxSet(100%, auto, 0px);
  gap: 10px;
  padding-bottom: 10px;
  background-color: white;
}
.body-box {
  @include boxSet(100%, auto, 0px);
  white-space: pre-wrap;
  cursor: pointer;
  & > p {
    @include fontSet(16px, 500, 24px);
    @include ellipsisSet(3, 24px);
    word-break: break-all;
  }
}
.heart-box {
  @include flexSet(center, center, row);
  margin-right: 16px;
  cursor: pointer;
  & > img {
    margin-right: 6px;
    @include boxSet(24px, 24px, 0px);
    object-fit: contain;
  }
  & > p {
    color: $gray05;
    @include fontSet(14px, 400, 20px);
  }
}
.comment-box {
  @include flexSet(center, center, row);
  cursor: pointer;
  & > img {
    margin-right: 6px;
    @include boxSet(24px, 24px, 0px);
    object-fit: contain;
  }
  & > p {
    color: $gray05;
    @include fontSet(14px, 400, 20px);
  }
}
</style>
