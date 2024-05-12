<template>
  <div class="modal-child-wrapper">
    <OrganismListCommonModalFill
      :data="MENU_WEEK"
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
import { MENU_WEEK } from '@assets/data/menu';
import { BUTTON_COMMON } from '@assets/data/button';
// Hooks
const modalStore = useModalStore();
// State
const buttonText = BUTTON_COMMON.confirm.text;
// Functions
const onClickSelectItem = (object: IModalListData) => {
  modalStore.setWeekData(object);
  modalStore.setCloseModal();
  modalStore.initTime();
};
// Cycle
</script>

<style lang="scss" scoped>
.modal-child-wrapper {
  position: relative;
  @include flexSet(flex-start, flex-start, column);
  @include boxSet(100%, auto, 0px);
  padding-bottom: 52px;
}
</style>
