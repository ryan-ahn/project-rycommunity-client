<template>
  <ul class="list-wrapper">
    <li
      v-for="(item, index) in data"
      :key="item.postInfo._id"
    >
      <OrganismItemInLoungePostCard
        :myMenu="userDetail?.userId === item.authorInfo.userId"
        :body="item.postInfo.body"
        :images="item.postInfo.images"
        :link="item.postInfo.link"
        :authorId="item.authorInfo.userId"
        :authorName="item.authorInfo.name"
        :authorImage="item.authorInfo.profileImage"
        :createAt="item.postInfo.createAt"
        :likeCount="item.postLikes.count"
        :likeStatus="item.postLikes.myStatus"
        :commentCount="item.postComments.count"
        :onClickGoToLink="onClickGoToLink"
        :onClickGoToDetail="() => onClickGoToDetail(item.postInfo._id)"
        :onClickPostLike="() => onClickPostLike(item.postInfo._id)"
        :onClickOpenModal="() => onClickOpenModal(item.postInfo._id)"
      />
      <AtomsAreaLine v-if="index !== data.length - 1"/>
    </li>
    <li
      v-if="data && data.length === 0"
      class="empty-box"
    >
      <AtomsEmptyContent
        :text="emptyText"
        :description="null"
        :type="'empty-wrapper-custom'"
      />
    </li>
  </ul>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useAuthStore } from '@store/index';
import { IListInLoungePostProps } from '@interface/props';
import { EMPTY_CONTENT } from '@assets/data/empty';
// Hooks
const authStore = useAuthStore();
// Props
const {
  data,
  onClickGoToLink,
  onClickGoToDetail,
  onClickPostLike,
  onClickOpenModal,
} = defineProps<IListInLoungePostProps>();
// State
const emptyText = EMPTY_CONTENT.post.text;
const { userDetail } = storeToRefs(authStore);
</script>

<style lang="scss" scoped>
.list-wrapper {
  @include boxSet(100%, auto, 0px);
  background-color: white;
}
.empty-box {
  @include boxSet(100%, 100px, 0px);
}
</style>
