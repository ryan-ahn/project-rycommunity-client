<template>
  <div class="modal-child-wrapper">
    <OrganismListCommonModalFill
      v-if="categoryList"
      :data="categoryList"
      :onClickFunction="onClickSelectItem"
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
  useMainStore,
} from '@store/index';
import { ICategoryModel } from '@interface/model';
import { BUTTON_COMMON } from '@assets/data/button';
// Hooks
const modalStore = useModalStore();
const mainStore = useMainStore();
const { categoryList } = storeToRefs(mainStore);
// State
const buttonText = BUTTON_COMMON.confirm.text;
// Functions
const onClickSelectItem = (category: ICategoryModel) => {
  modalStore.setCategoryData(category);
  modalStore.setCloseModal();
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
