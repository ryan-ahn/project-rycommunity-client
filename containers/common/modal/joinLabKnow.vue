<template>
  <div class="modal-child-wrapper">
    <OrganismListCommonModalFill
      :data="MENU_LAB_KNOW"
      :onClickFunction="onClickSelectItem"
    />
    <AtomsButtonModalBottom
      :text="buttonText"
      :onClickFunction="() => modalStore.setCloseModal()"
    />
  </div>
</template>

<script setup lang="ts">
import { useModalStore } from '@store/index';
import { IModalListData } from '@interface/data';
import { MENU_LAB_KNOW } from '@assets/data/menu';
import { BUTTON_COMMON } from '@assets/data/button';
// Hooks
const modalStore = useModalStore();
// State
const buttonText = BUTTON_COMMON.confirm.text;
// Functions
const onClickSelectItem = (name: IModalListData) => {
  modalStore.setKnow(name);
  modalStore.setCloseModal();
};
// Cycle
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
