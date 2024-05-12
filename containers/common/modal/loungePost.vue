<template>
  <div class="modal-child-wrapper">
    <OrganismListCommonModalFill
      :data="MENU_MY_LIST"
      :onClickFunction="onClickDeletePost"
    />
    <AtomsButtonModalBottom
      :text="buttonText"
      :onClickFunction="() => modalStore.setCloseModal()"
    />
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useModalStore } from '@store/index';
import { IModalListData } from '@interface/data';
import { MENU_MY_LIST } from '@assets/data/menu';
import { BUTTON_COMMON } from '@assets/data/button';
// Hooks
const router = useRouter();
const modalStore = useModalStore();
// State
const { postId } = storeToRefs(modalStore);
const buttonText = BUTTON_COMMON.cancel.text;
// Functions
const onClickDeletePost = (object: IModalListData) => {
  if (object.id === 0) {
    modalStore.setCloseModal();
    router.push(`/createpost/?mode=edit&target=${postId.value}`);
  }
  if (object.id === 1) {
    modalStore.setOpenModal('loungePostDelete');
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
