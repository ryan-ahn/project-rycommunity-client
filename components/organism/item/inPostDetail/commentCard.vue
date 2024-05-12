<template>
  <div class="item-wrapper">
    <div class="profile-wrapper">
      <div class="profile-box">
        <img
          :src="authorImage"
          alt="profile"
        >
      </div>
      <div class="comment-box">
        <div class="user-info-box">
          <div class="name-box">
            <span>{{ authorName }}</span>
            <span
              v-if="index === 0"
              class="first-comment"
            >
              첫댓글
            </span>
          </div>
          <div class="time-box">
            <p>{{ validateElapsedTime(createAt) }}</p>
            <p v-if="updateAt !== null && createAt !== updateAt">
              수정됨
            </p>
          </div>
          <div class="body-box">
            <p v-html="body.replace(linkUseRex, toLink)"/>
          </div>
        </div>
      </div>
      <div
        v-if="myComment"
        class="menu-box"
      >
        <img
          src="/icons/lounge/add-info.svg"
          alt="add"
          @click="onClickOpenModal(commentId)"
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { linkUseRex } from '@utils/useRex';
import { IItemInPostDetailCommentProps } from '@interface/props';
// Props
const {
  index,
  commentId,
  myComment,
  body,
  authorName,
  authorImage,
  createAt,
  updateAt,
  onClickOpenModal,
} = defineProps<IItemInPostDetailCommentProps>();

// State
const toLink = '<a href="$1" target="_blank" style="word-break: break-all">$1</a>';

</script>

<style lang="scss" scoped>

.item-wrapper {
  @include flexSet(space-between, flex-start, row);
  @include boxSet(100%, auto, 0px);
  padding: 20px 0;
}
.profile-wrapper {
  @include flexSet(flex-start, flex-start, row);
  @include boxSet(100%, auto, 0px);
  gap: 12px;
  & > div:nth-child(1) {
    @include boxSet(26px, 26px, 20px);
  }
}
.profile-box {
  @include flexSet(flex-start, center, row);
  & > img {
    @include boxSet(26px, 26px, 13px);
    object-fit: cover;
  }
}
.comment-box {
  width: calc(100% - 32px);
}

.first-comment {
  @include flexSet(center, center, row);
  padding: 0px 4.5px;
  color: $theme01;
  border: 1px solid $theme01;
  border-radius: 10px;
  @include fontSet(10px, 400, 14px);
}
.user-info-box {
  @include flexSet(flex-start, flex-start, column);
  /* width: calc(100% - 32px); */
  .name-box {
    @include flexSet(flex-start, center, row);
    gap: 4px;
    & > span:nth-child(1) {
      @include fontSet(14px, 500, 20px);
    }
  }
  .time-box {
    @include flexSet(flex-start, center, row);
    gap: 2px;
    @include fontSet(12px, 400, 16px);
    color: $gray05;
    & > p:nth-child(2)::before {
      margin: 0 2px;
      content: 'ᐧ';
    }
  }
}

.body-box {
  @include boxSet(100%, auto, 0px);
  padding-top: 10px;
  white-space: pre-wrap;
  @include fontSet(15px, 500, 22px);

  & > p {
    color: black;
    text-decoration: none;
    word-break: break-all;
    cursor: text;
    a {
      color: blue;
      text-decoration: underline;
      word-break: break-all;
      cursor: pointer;
    }
  }
}

.menu-box {
  @include flexSet(flex-end, flex-end, row);
  & > img {
    @include boxSet(24px, 24px, 12px);
  }
}
</style>
