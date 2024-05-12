<template>
  <div class="modal-child-wrapper">
    <MoleculesModalSystem
      :title="title"
      :description="description"
      :confirm-text="confirmText"
      :cancelText="cancelText"
      :cancelFunction="onClickCloseModal"
      :confirmFunction="onClickDeleteComment"
    />
  </div>
</template>

<script setup lang="ts">
import { useToast } from 'vue-toastification';
import { storeToRefs } from 'pinia';
import {
  useModalStore,
  useLoungeStore,
} from '@store/index';
import { MODAL_SYSTEM } from '@assets/data/modal';
import { BUTTON_MODAL_SYSTEM } from '@assets/data/button';
// Hooks
const router = useRouter();
const toast = useToast();
const modalStore = useModalStore();
const loungeStore = useLoungeStore();
// State
const title = MODAL_SYSTEM.postDelete.title;
const description = MODAL_SYSTEM.postDelete.description;
const confirmText = BUTTON_MODAL_SYSTEM.postDelete.delete.text;
const cancelText = BUTTON_MODAL_SYSTEM.postDelete.cancel.text;
const {
  postId,
  commentId,
} = storeToRefs(modalStore);
// Functions
const onClickDeleteComment = async () => {
  await loungeStore.deleteLoungePostComment({
    commentId: commentId.value,
  });
  await loungeStore.getLoungePostDetail({
    postId: postId.value,
  });
  modalStore.setCloseModal();
  router.push(`/postdetail/${postId.value}`);
  toast('댓글이 삭제되었습니다.');
};
const onClickCloseModal = () => {
  modalStore.setCloseModal();
};

onMounted(() => {
  postId.value = router.currentRoute.value.params.id;
});
</script>

<style lang="scss" scoped>
.modal-child-wrapper {
  position: relative;
}
</style>
