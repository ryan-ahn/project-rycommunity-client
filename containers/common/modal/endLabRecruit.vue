<template>
  <div class="modal-child-wrapper">
    <MoleculesModalSystem
      :title="title"
      :description="description"
      :confirm-text="confirmText"
      :cancelText="cancelText"
      :cancelFunction="onClickCloseModal"
      :confirmFunction="onClickEndRecruit"
    />
  </div>
</template>

<script setup lang="ts">
import {
  useModalStore,
  useLabStore,
} from '@store/index';
import { MODAL_SYSTEM } from '@assets/data/modal';
import { BUTTON_MODAL_SYSTEM } from '@assets/data/button';
// Hooks
const route = useRoute();
const modalStore = useModalStore();
const labStore = useLabStore();
// State
const title = MODAL_SYSTEM.labRecruitEnd.title;
const description = MODAL_SYSTEM.labRecruitEnd.description;
const confirmText = BUTTON_MODAL_SYSTEM.postDelete.confirm.text;
const cancelText = BUTTON_MODAL_SYSTEM.postDelete.cancel.text;
// Functions
const onClickEndRecruit = async () => {
  labStore.patchRecruitStatus({
    labId: route.params.id,
  });
  modalStore.setCloseModal();
  modalStore.setOpenModal('noticeEndRecruit');
};
const onClickCloseModal = () => {
  modalStore.setCloseModal();
};
// Cycle
onMounted(() => {
  labStore.getLabDetail({
    labId: route.params.id,
  });
});
</script>

<style lang="scss" scoped>
.modal-child-wrapper {
  position: relative;
}
</style>
