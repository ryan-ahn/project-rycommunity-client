<template>
  <div class="item-wrapper">
    <img
      src="/icons/logo-text.png"
      alt="logo"
    >
    <p>{{ description }}</p>
    <AtomsButtonMainFill
      :type="makeButtonType"
      :text="makeButtonText"
      :onClickFunction="onClickGoToStack"
    />
  </div>
</template>

<script setup lang="ts">
import { useModalStore } from '@store/index';
import { CONTENT_PAGE } from '@assets/data/content';
import { BUTTON_MAIN_FILL } from '@assets/data/button';
// Hooks
const router = useRouter();
const modalStore = useModalStore();
// State
const description = CONTENT_PAGE.main.makeLab.content;
const makeButtonType = BUTTON_MAIN_FILL.main.makeLab.type;
const makeButtonText = BUTTON_MAIN_FILL.main.makeLab.text;
// Functions
const onClickGoToStack = () => {
  modalStore.setOpenModal('createLabAgree');
};
</script>

<style lang="scss" scoped>
.item-wrapper {
  padding: 50px 20px 50px 20px;
  & > img {
    @include boxSet(97px, 38px, 0px);
    margin-bottom: 20px;
  }
  & > p {
    margin-bottom: 24px;
    @include fontSet(20px, 300, 28px);
    white-space: pre-wrap;
  }
}
</style>
