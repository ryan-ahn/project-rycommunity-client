<template>
  <section class="stack-wrapper">
    <h1>{{ title }}</h1>
    <div class="content-box">
      <img
        src="/images/complete-joinlab.png"
        alt="thumbnail"
      >
      <p>{{ description }}</p>
      <AtomsButtonMainLine
        :type="buttonType"
        :text="buttonText"
        :onClickFunction="onClickGoToLab"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  useLabStore,
  useModalStore,
} from '@store/index';
import { CONTENT_POPUP } from '@assets/data/content';
import { BUTTON_MAIN_FILL } from '@assets/data/button';
// Hooks
const route = useRoute();
const router = useRouter();
const labStore = useLabStore();
const modalStore = useModalStore();
// State
const title = CONTENT_POPUP.complete.recruitLab.title;
const description = CONTENT_POPUP.complete.recruitLab.description;
const buttonType = BUTTON_MAIN_FILL.complete.recruitLab.type;
const buttonText = BUTTON_MAIN_FILL.complete.recruitLab.text;
// Functions
const onClickGoToLab = () => {
  modalStore.setCloseModal();
  router.push(`/labdetail/${route.params.id}`);
};
// Cycle
onMounted(() => {
  labStore.postMemberList({
    labId: route.params.id,
  });
});
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
