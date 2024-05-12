<template>
  <section class="stack-wrapper">
    <h1>{{ title }}</h1>
    <div class="content-box">
      <p>{{ description }}</p>
      <img
        src="/images/complete-joinpop.png"
        alt="thumbnail"
      >
      <p>{{ question }}</p>
      <AtomsButtonMainLine
        :type="buttonType"
        :text="buttonText"
        :onClickFunction="onClickPreliminaryQuestion"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import {
  useMainStore,
  useModalStore,
} from '@store/index';
import { CONTENT_POPUP } from '@assets/data/content';
import { BUTTON_MAIN_FILL } from '@assets/data/button';
// Hooks
const mainStore = useMainStore();
const modalStore = useModalStore();
const router = useRouter();
const route = useRoute();
// State
const { popDetail } = storeToRefs(mainStore);
const title = CONTENT_POPUP.complete.joinPop.title;
const description = CONTENT_POPUP.complete.joinPop.description;
const question = CONTENT_POPUP.complete.joinPop.question;
const buttonType = BUTTON_MAIN_FILL.complete.joinPop.type;
const buttonText = BUTTON_MAIN_FILL.complete.joinPop.text;
// Functions
const onClickPreliminaryQuestion = () => {
  if (popDetail.value) {
    window.open(popDetail.value.popInfo.link);
    modalStore.setCloseModal();
    router.push(`/popdetail/${route.params.id}`);
  }
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
  }
}
</style>
