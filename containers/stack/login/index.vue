<template>
  <section class="stack-wrapper">
    <div class="content-box">
      <img
        src="/icons/logo-text.png"
        alt="logo"
        @dblclick="touchSecretEvent"
      >
      <h1>{{ description }}</h1>
      <div
        v-if="switchButton"
        class="token-box"
      >
        <input
          placeholder="token"
          @input="onChangeToken"
        >
        <button @click="onClickTokenLogin">
          확인
        </button>
      </div>
      <AtomsButtonFunctionSocial
        v-if="!switchButton"
        :text="buttonText"
        :href="onClickKakaoInit()"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { useAuthStore } from '@store/index';
import { CONTENT_PAGE } from '@assets/data/content';
import { BUTTON_SOCIAL } from '@assets/data/button';
// Hooks
const config = useRuntimeConfig();
const authStore = useAuthStore();
const route = useRoute();
const router = useRouter();
// State
const switchButton = ref(false);
const token = ref('');
const description = CONTENT_PAGE.login.description.content;
const buttonText = BUTTON_SOCIAL.login.kakao.text;
// Functions
const touchSecretEvent = () => {
  setTimeout(() => {
    switchButton.value = !switchButton.value;
  }, 5000);
};
const onChangeToken = (e:any) => {
  token.value = e.target.value;
};
const onClickTokenLogin = () => {
  setAccessToken('access', token.value);
  router.push('/');
};
const onClickKakaoInit = () => {
  const initUrl = 'https://kauth.kakao.com/oauth/authorize';
  const kakaoInitConfig:any = {
    client_id: `${config.public.KAKAO_REST_KEY}`,
    redirect_uri: `${config.public.HOST}/login`,
    response_type: 'code',
  };
  const params = new URLSearchParams(kakaoInitConfig).toString();
  // Response
  const redirectUrl = `${initUrl}?${params}`;
  return redirectUrl;
};
// Cycle
onMounted(() => {
  if (route.query.code) {
    authStore.getKakaoCallback({
      code: route.query.code,
    });
  }
});
</script>

<style lang="scss" scoped>
.stack-wrapper {
  @include flexSet(center, center, column);
  @include boxSet(100%, 100%, 0px);
  min-height: 100vh;
  padding: 0 30px;
  @supports (-webkit-touch-callout: none) {
    min-height: -webkit-fill-available;
  }
}
.content-box {
  @include flexSet(center, center, column);
  @include boxSet(100%, auto, 0px);
  & > img {
    @include boxSet(90px, 34px, 0px);
    margin-bottom: 32px;
    object-fit: cover;
  }
  & > h1 {
    margin-bottom: 60px;
    color: $gray07;
    @include fontSet(18px, 500, 28px);
    text-align: center;
    white-space: pre-wrap;
  }
}
.token-box {
  @include flexSet(space-between, center, row);
  @include boxSet(100%, 45px, 20px);
  gap: 10px;
  padding: 0 5px 0 10px;
  border: 1px solid $gray03;
  & > input {
    @include boxSet(100%, auto, 0px);
  }
  & > button {
    @include flexSet(center, center, row);
    @include boxSet(50px, 35px, 17px);
    @include colorSet($white, $black);
    @include fontSet(14px, 500, 20px);
  }
}
</style>
