<template>
  <section class="stack-wrapper">
    <h1>{{ title }}</h1>
    <div class="content-box">
      <p>{{ description }}</p>
      <img
        src="/images/complete-createlab.png"
        alt="thumbnail"
      >
      <AtomsButtonMainLine
        :type="buttonType"
        :text="buttonText"
        :onClickFunction="onClickGoToLab"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { useModalStore } from '@store/index';
import { CONTENT_POPUP } from '@assets/data/content';
import { BUTTON_MAIN_FILL } from '@assets/data/button';
// Hooks
const router = useRouter();
const modalStore = useModalStore();
// State
const title = CONTENT_POPUP.complete.createLab.title;
const description = CONTENT_POPUP.complete.createLab.description;
const buttonType = BUTTON_MAIN_FILL.complete.createLab.type;
const buttonText = BUTTON_MAIN_FILL.complete.createLab.text;
// Functions
const onClickGoToLab = () => {
  router.push('/mypage/?tab=lab');
  modalStore.setCloseModal();
};
</script>

<style lang="scss" scoped>
.stack-wrapper {
  @include flexSet(flex-start, center, column);
  @include boxSet(100%, auto, 0px);
  gap: 20px;
  & > h1 {
    @include fontSet(24px, 700, 32px);
    text-align: center;
    white-space: pre-wrap;
  }
}
.content-box {
  @include boxSet(100%, auto, 0px);
  gap: 20px;
  @include flexSet(space-between, center, column);
  & > p {
    @include fontSet(16px, 400, 24px);
    text-align: center;
    white-space: pre-wrap;
  }
  & > img {
    @include boxSet(65%, auto, 0px);
    margin-bottom: 20px;

  }
}
</style>
