<template>
  <div class="modal-child-wrapper">
    <OrganismListCommonModalFill
      :data="MENU_MY_LIST"
      :onClickFunction="onClickCommentHandler"
    />
    <AtomsButtonModalBottom
      :text="buttonText"
      :onClickFunction="() => modalStore.setCloseModal()"
    />
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import {
  useModalStore,
  useLoungeStore,
} from '@store/index';
import { IModalListData } from '@interface/data';
import { MENU_MY_LIST } from '@assets/data/menu';
import { BUTTON_COMMON } from '@assets/data/button';
// Hooks
const modalStore = useModalStore();
const loungeStore = useLoungeStore();
const route = useRoute();
const { postDetail } = storeToRefs(loungeStore);
const {
  commentId,
  isEditing,
} = storeToRefs(modalStore);
// State
const buttonText = BUTTON_COMMON.cancel.text;
// Functions
const onClickCommentHandler = async (object: IModalListData) => {
  if (object.id === 0) {
    modalStore.setCloseModal();
    isEditing.value = true;
    const comment = postDetail.value?.postComments.commentList?.find((comment) => comment._id === commentId.value)?.comment;
    if (comment) {
      loungeStore.setComment(comment);
    }
    await loungeStore.getLoungePostDetail({
      postId: route.params.id,
    });
  }
  if (object.id === 1) {
    modalStore.setOpenModal('loungePostCommentDelete');
  }
};
</script>

<style lang="scss" scoped>
.modal-child-wrapper {
  position: relative;
  @include flexSet(flex-start, flex-start, column);
  @include boxSet(100%, 100%, 0px);
  max-height: 420px;
  padding-bottom: 52px;
}
</style>
