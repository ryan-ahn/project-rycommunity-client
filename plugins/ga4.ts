import VueGtag from 'vue-gtag-next';

export default defineNuxtPlugin((nuxtApp: any) =>
  nuxtApp.vueApp.use(VueGtag, {
    property: {
      id: process.env.GOOGLE_ANALYTICS_ID,
    },
  }));
