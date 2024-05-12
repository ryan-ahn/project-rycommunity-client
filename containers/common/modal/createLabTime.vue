<template>
  <div class="modal-child-wrapper">
    <OrganismListCommonModalFill
      v-if="week"
      :data="
        checkWeekend(week.value) ? MENU_WEEKEND_TIME : MENU_WEEK_TIME
      "
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
import { useModalStore } from '@store/index';
import { IModalListData } from '@interface/data';
import {
  MENU_WEEK_TIME,
  MENU_WEEKEND_TIME,
} from '@assets/data/menu';
import { BUTTON_COMMON } from '@assets/data/button';
// Hooks
const modalStore = useModalStore();
// State
const { week } = storeToRefs(modalStore);
const buttonText = BUTTON_COMMON.confirm.text;
// Functions
const onClickSelectItem = (object: IModalListData) => {
  modalStore.setStartTimeData(object);
  modalStore.setEndTimeData(`${validateEndTime(object.value)}:00`);
  modalStore.setCloseModal();
};
</script>

<style lang="scss" scoped>
.modal-child-wrapper {
  position: relative;
  @include flexSet(flex-start, flex-start, column);
  @include boxSet(100%, auto, 0px);
  padding-bottom: 52px;
}
</style>
