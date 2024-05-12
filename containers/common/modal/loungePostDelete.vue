<template>
  <div class="modal-child-wrapper">
    <MoleculesModalSystem
      :title="title"
      :description="description"
      :confirm-text="confirmText"
      :cancelText="cancelText"
      :cancelFunction="onClickCloseModal"
      :confirmFunction="onClickDeletePost"
    />
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import {
  useModalStore,
  useLoungeStore,
} from '@store/index';
import { MODAL_SYSTEM } from '@assets/data/modal';
import { BUTTON_MODAL_SYSTEM } from '@assets/data/button';
// Hooks
const router = useRouter();
const modalStore = useModalStore();
const loungeStore = useLoungeStore();
// State
const title = MODAL_SYSTEM.postDelete.title;
const description = MODAL_SYSTEM.postDelete.description;
const confirmText = BUTTON_MODAL_SYSTEM.postDelete.delete.text;
const cancelText = BUTTON_MODAL_SYSTEM.postDelete.cancel.text;
const { postId } = storeToRefs(modalStore);
// Functions
const onClickDeletePost = async () => {
  await loungeStore.deleteLoungePost({
    postId: postId.value,
  });
  await loungeStore.getLoungePostList();
  modalStore.setCloseModal();
  router.push('/lounge');
  // 삭제 완료 토스트 필요
};
const onClickCloseModal = () => {
  modalStore.setCloseModal();
};
</script>

<style lang="scss" scoped>
.modal-child-wrapper {
  position: relative;
}
</style>
