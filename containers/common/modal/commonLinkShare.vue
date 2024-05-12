<template>
  <div class="modal-child-wrapper">
    <div class="button-container">
      <button
        class="button-box"
        @click="onClickShareLink(link)"
      >
        <img
          src="/icons/common/share-link.svg"
          alt="link"
        >
        <p>링크복사</p>
      </button>
      <!-- <button class="button-box" @click="onClickShareKakao">
        <img src="/icons/common/share-kakao.svg" alt="kakao" />
        <p>카카오톡</p>
      </button> -->
    </div>
    <AtomsButtonModalBottom
      :text="buttonText"
      :onClickFunction="() => modalStore.setCloseModal()"
    />
  </div>
</template>

<script setup lang="ts">
import { useToast } from 'vue-toastification';
import { storeToRefs } from 'pinia';
import { kakaoShare } from '@utils/useKakao';
import useModalStore from '@store/useModalStore';
import { TOAST_STACK } from '@assets/data/toast';
import { BUTTON_COMMON } from '@assets/data/button';
// Hooks
const toast = useToast();
const config = useRuntimeConfig();
const modalStore = useModalStore();
// State
const {
  link,
  linkTitle,
} = storeToRefs(modalStore);
const buttonText = BUTTON_COMMON.cancel.text;
const toastLinkShare = TOAST_STACK.lab.linkShare;
// Function
const onClickShareLink = (link: string) => {
  navigator.clipboard.writeText(config.public.HOST + link);
  modalStore.setCloseModal();
  toast(toastLinkShare);
};
const onClickShareKakao = () => {
  kakaoShare(config.public.HOST + link.value, linkTitle.value);
};
</script>

<style lang="scss" scoped>
.modal-child-wrapper {
  @include flexSet(center, center, column);
  padding-bottom: 52px;
}
.button-container {
  @include flexSet(center, center, row);
  @include boxSet(100%, auto, 0px);
}
.button-box {
  gap: 4px;
  @include flexSet(center, center, column);
  @include boxSet(100%, auto, 0px);
  max-width: 107px;
  aspect-ratio: 107 / 90;
  & > img {
    @include boxSet(32px, 32px, 0px);
    object-fit: contain;
  }
  & > p {
    @include fontSet(14px, 700, 22px);
  }
}
</style>
