<template>
  <div class="item-wrapper">
    <div class="profile-bar">
      <div class="profile-box">
        <img
          :src="authorImage"
          alt="profile"
        >
        <div class="name-box">
          <p>{{ authorName }}</p>
          <p>{{ validateElapsedTime(createAt) }}</p>
        </div>
      </div>
      <img
        v-if="myMenu"
        src="/icons/lounge/add-info.svg"
        alt="add"
        @click="onClickOpenModal(postId)"
      >
    </div>
    <div class="body-box">
      <p v-if="body">
        {{ body }}
      </p>
    </div>
    <ul
      v-if="images"
      class="ul-box"
    >
      <li
        v-for="(item, index) in images"
        :key="index"
      >
        <img
          :src="item.origin"
          class="image-box"
          alt="image"
        >
      </li>
    </ul>
    <div
      v-if="link"
      class="sized-row-full-box"
    >
      <AtomsLinkEntered
        type="list"
        :url="link.link"
        :crawlingTitle="link.title"
        :crawlingDescription="link.description"
        :crawlingImage="link.image"
        :onClickGoToLink="onClickGoToLink"
      />
    </div>
    <div class="flex-row-space-box">
      <div class="flex-row-center-box">
        <div
          class="heart-box"
          @click="onClickPostLike"
        >
          <img
            :src="`/icons/lounge/heart-${
              likeStatus ? 'active' : 'deactive'
            }.svg`"
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
      <!-- <img src="/icons/lounge/share-silver.svg" /> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { IItemInPostDetailPostProps } from '@interface/props';
// Props
const {
  postId,
  body,
  link,
  authorName,
  authorImage,
  createAt,
  likeCount,
  likeStatus,
  commentCount,
  onClickPostLike,
  onClickOpenModal,
  onClickGoToLink,
} = defineProps<IItemInPostDetailPostProps>();
</script>

<style lang="scss" scoped>
.item-wrapper {
  @include flexSet(flex-start, flex-start, column);
  @include boxSet(100%, auto, 0px);
  gap: 20px;
  padding: 28px 20px;
}
.profile-bar {
  @include flexSet(space-between, center, row);
  @include boxSet(100%, auto, 0px);
  & > img {
    cursor: pointer;
  }
}
.profile-box {
  @include flexSet(flex-start, center, row);
  gap: 12px;
  & > img {
    @include boxSet(36px, 36px, 18px);
    object-fit: cover;
  }
}
.name-box {
  @include flexSet(flex-start, flex-start, column);
  & > p:nth-child(1) {
    @include fontSet(14px, 500, 20px);
  }
  & > p:nth-child(2) {
    color: $gray05;
    @include fontSet(12px, 400, 16px);
  }
}
.body-box {
  @include boxSet(100%, auto, 0px);
  white-space: pre-wrap;
  & > p {
    @include fontSet(16px, 500, 24px);
    word-break: break-all;
  }
}
.ul-box {
  @include flexSet(center, center, column);
  gap: 20px;
}
.image-box {
  @include boxSet(100%, auto, 8px);
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
