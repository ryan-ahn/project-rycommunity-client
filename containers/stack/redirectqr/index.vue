<template>
  <section class="stack-wrapper">
    <h1>
      <span>{{ userDetail && userDetail.name ? userDetail.name : 'OOO' }}</span>
      <span>{{ title }}</span>
    </h1>
    <div class="content-box">
      <p>{{ description }}</p>
      <img
        src="/images/complete-joinpop.png"
        alt="thumbnail"
      >
      <p>{{ eventText }}</p>
      <AtomsButtonMainLine
        :type="buttonType"
        :text="buttonText"
        :onClickFunction="onClickRouteToLoungeStack"
      />
      <div
        class="serviceButton"
        @click="onClickRouteToMainStack"
      >
        <p>
          {{ serviceText }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import {
  useAuthStore,
  useMainStore,
} from '@store/index';
import { CONTENT_POPUP } from '@assets/data/content';
import { BUTTON_MAIN_FILL } from '@assets/data/button';
// Hooks
const route = useRoute();
const router = useRouter();
const access = useCookie('access');
const authStore = useAuthStore();
const mainStore = useMainStore();
// State
const { userDetail } = storeToRefs(authStore);
const title = CONTENT_POPUP.complete.redirectQr.title;
const description = CONTENT_POPUP.complete.redirectQr.description;
const eventText = CONTENT_POPUP.complete.redirectQr.event;
const serviceText = CONTENT_POPUP.complete.redirectQr.service;
const buttonType = BUTTON_MAIN_FILL.complete.event.type;
const buttonText = BUTTON_MAIN_FILL.complete.event.text;
// Functions
const onClickRouteToLoungeStack = () => {
  router.push('/lounge');
};
const onClickRouteToMainStack = () => {
  router.push('/');
};
// Cycle
onMounted(async () => {
  if (access.value) {
    await mainStore.postCheckQrDetail({
      popId: route.params.id,
    });
  }
});
</script>

<style lang="scss" scoped>
.stack-wrapper {
  @include flexSet(flex-start, center, column);
  @include boxSet(100%, auto, 0px);
  gap: 20px;
  padding: 55px 30px;
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
.serviceButton {
  @include flexSet(center, center, row);
  @include boxSet(178px, 48px, 0px);
  & > p {
    color: $gray07;
    @include fontSet(16px, 400, 24px);
    text-decoration: underline;
  }
}
</style>
