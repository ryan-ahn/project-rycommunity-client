<template>
  <div class="modal-child-wrapper">
    <h3>{{ title }}</h3>
    <div class="content-box">
      <div class="description-box">
        <span>{{ agreeText }}</span>
        <span
          class="link-box"
          @click="onClickOpenModal"
        >{{ modalText }}</span>
      </div>
      <AtomsButtonMainFill
        :type="buttonType"
        :text="buttonText"
        :onClickFunction="onClickGoToStack"
      />
      <p @click="onClickOpenGuideModal">
        {{ guideText }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useModalStore } from '@store/index';
import { CONTENT_MODAL } from '@assets/data/content';
import { BUTTON_MAIN_FILL } from '@assets/data/button';
// Hooks
const router = useRouter();
const modalStore = useModalStore();
// State
const title = CONTENT_MODAL.createLab.title;
const agreeText = CONTENT_MODAL.createLab.description;
const modalText = CONTENT_MODAL.createLab.modalText;
const guideText = CONTENT_MODAL.createLab.guide;
const buttonType = BUTTON_MAIN_FILL.modal.createLab.type;
const buttonText = BUTTON_MAIN_FILL.modal.createLab.text;
// Functions
const onClickGoToStack = () => {
  router.push('/createlab');
  modalStore.setCloseModal();
};
const onClickOpenModal = () => {
  modalStore.setOpenModal('agreeLab');
};
const onClickOpenGuideModal = () => {
  modalStore.setOpenModal('guideLab');
};
</script>

<style lang="scss" scoped>
.modal-child-wrapper {
  @include flexSet(center, center, column);
  padding: 16px 20px;
  & > h3 {
    padding: 24px 0;
    text-align: center;
    white-space: pre-wrap;
    @include fontSet(20px, 600, 26px);
  }
}
.content-box {
  @include flexSet(center, center, column);
  @include boxSet(100%, auto, 0px);
  gap: 20px;
  padding: 24px 0;
  & > p {
    padding-bottom: 0.3px;
    color: $gray07;
    border-bottom: 1px solid $gray07;
    @include fontSet(16px, 400, 20px);
  }
}
.description-box {
  @include flexSet(center, center, row);
  gap: 5px;
  & > span {
    @include fontSet(12px, 500, 22px);
  }
}

.link-box {
  color: $theme03;
  text-decoration: underline;
  cursor: pointer;
  @include fontSet(12px, 500, 22px);
}
</style>
