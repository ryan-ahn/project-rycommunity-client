import { useRouter } from 'vue-router'; // 페이지 이동을 위해 nuxt용 router를 사용
import { createGtm } from '@gtm-support/vue-gtm';

// eslint-disable-next-line no-undef
export default defineNuxtPlugin((nuxtApp) => {
  const router = useRouter();
  // eslint-disable-next-line no-undef
  const config = useRuntimeConfig().public;
  nuxtApp.vueApp.use(
    createGtm({
      id: `${config.GOOGLE_TAG_MANAGER_ID}`,
      defer: false,
      compatibility: false,
      enabled: true,
      debug: true,
      loadScript: false,
      vueRouter: router,
      trackOnNextTick: false,
    }),
  );
});
