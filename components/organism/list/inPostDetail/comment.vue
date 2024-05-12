<template>
  <ul class="list-wrapper">
    <li
      v-for="(item, index) in data"
      :key="item._id"
      class="list-box"
      :class="(isEditedComment && ((commentId === item._id) && item.userDetail.userId === userDetail?.userId && (item.updateAt !== null))) || isNewlyCreatedComment && (userDetail?.userId === item.userDetail.userId) && (validateElapsedTime(item.createAt) === '방금 전') && (index === commentCount - 1) ? 'background' : ''"
    >
      <OrganismItemInPostDetailCommentCard
        :index="index"
        :commentId="item._id"
        :myComment="userDetail?.userId === item.userDetail.userId"
        :authorName="item.userDetail.name"
        :authorImage="item.userDetail.profileImage"
        :createAt="item.createAt"
        :updateAt="item.updateAt ? item.updateAt : null"
        :body="item.comment"
        :onClickOpenModal="() => onClickOpenModal(item._id)"
      />
    </li>
    <AtomsEmptyImageContent
      v-if="data === null"
      class="empty-box"
      :image="emptyImage"
      :text="emptyText"
      :type="''"
      :description="emptyDescription"
    />
  </ul>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import {
  useAuthStore,
  useModalStore,
  useLoungeStore,
} from '@store/index';
import { IListInPostDetailCommentProps } from '@interface/props';
import { EMPTY_CONTENT } from '@assets/data/empty';
// Hooks
const authStore = useAuthStore();
const modalStore = useModalStore();
const loungeStore = useLoungeStore();
const userDetail = authStore.userDetail;
const {
  isEditedComment,
  isNewlyCreatedComment,
} = storeToRefs(loungeStore);
const { commentId } = storeToRefs(modalStore);
// Props
const {
  data,
  commentCount,
} = defineProps<IListInPostDetailCommentProps>();
// State
const emptyImage = EMPTY_CONTENT.postDetail.image;
const emptyText = EMPTY_CONTENT.postDetail.text;
const emptyDescription = EMPTY_CONTENT.postDetail.description;

// Functions
const onClickOpenModal = (id: string) => {
  modalStore.setOpenModal('loungePostComment');
  modalStore.setCommentId(id);
};
// const isUserComment = computed(() => detailValue.value?.filter((item) => item.userDetail.userId === userDetail?.userId));
// const editedComment = computed(() => detailValue.value?.filter((item) => item._id === modalStore.commentId)[0].comment);

</script>

<style lang="scss" scoped>
.list-wrapper {
  position: relative;
}
.list-box {
  padding: 0 16px;
  &:not(:last-child) {
    border-bottom: 2px solid $gray01;
  }
}
.empty-box {
  @include boxSet(100%, 100px, 0px);
}
.background {
  animation: fadeOutBackground 5s ease-out;
}

@keyframes fadeOutBackground {
  from {
    background-color: rgba(247, 88, 92, 0.05);
  }

  to {
    background-color: rgba(247, 88, 92, 0);
  }
}
</style>
