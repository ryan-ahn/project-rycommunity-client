import { fileURLToPath } from 'node:url';

export default defineNuxtConfig({
// const config: NuxtConfig = {
  modules: [
    'nuxt-swiper',
    '@pinia/nuxt',
    '@nuxtjs/device',
  ],
  devtools: {
    enabled: false,
  },
  typescript: {
    strict: true,
  },
  plugins: [
    '@plugins/ga4.ts',
    '@plugins/infinite.ts',
    '@plugins/sentry.ts',
    '@plugins/gtm.client.js',
  ],
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        '/sitemap.xml',
        '/robots.txt',
      ],
    },
  },
  build: {
    transpile: [
      '@vuepic/vue-datepicker',
      '@nuxtjs/style-resources',
      'vue-toastification',
      'resize-textarea-vue3',
      'vuetify',
    ],
  },
  css: [
    'vuetify/lib/styles/main.sass',
    '@styles/global.scss',
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@styles/mixin.scss" as *; @use "@styles/colors.scss" as *;',
        },
      },
    },
  },
  runtimeConfig: {
    public: {
      ENV: process.env.ENV,
      HOST: process.env.PUBLIC_HOST,
      API_HOST: process.env.API_HOST,
      GOOGLE_ANALYTICS_ID: process.env.ENV === 'production' ? process.env.GOOGLE_ANALYTICS_ID_PROD : process.env.GOOGLE_ANALYTICS_ID_DEV,
      GOOGLE_TAG_MANAGER_ID: process.env.ENV === 'production' ? process.env.GOOGLE_TAG_MANAGER_ID_PROD : process.env.GOOGLE_TAG_MANAGER_ID_DEV,
      KAKAO_SCRIPT_KEY: process.env.KAKAO_SCRIPT_KEY,
      KAKAO_REST_KEY: process.env.KAKAO_REST_KEY,
    },
  },
  alias: {
    '@assets': fileURLToPath(new URL('./assets/', import.meta.url)),
    '@components': fileURLToPath(new URL('./components/', import.meta.url)),
    '@containers': fileURLToPath(new URL('./containers/', import.meta.url)),
    '@interface': fileURLToPath(new URL('./interface/', import.meta.url)),
    '@layouts': fileURLToPath(new URL('./layouts/', import.meta.url)),
    '@pages': fileURLToPath(new URL('./pages/', import.meta.url)),
    '@plugins': fileURLToPath(new URL('./plugins/', import.meta.url)),
    '@router': fileURLToPath(new URL('./router/', import.meta.url)),
    '@store': fileURLToPath(new URL('./store/', import.meta.url)),
    '@styles': fileURLToPath(new URL('./styles/', import.meta.url)),
    '@utils': fileURLToPath(new URL('./utils/', import.meta.url)),
  },
  app: {
    head: {
      meta: [
        {
          name: 'google-site-verification',
          content: 'lpTECNyYwaFdIqFDkO-ybFbSZET9-QbdF8hRiR2ZbsQ',
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, maximum-scale=1.0',
        },
        {
          name: 'keyword',
          content: '랩,연구,AI,인공지능',
        },
        {
          name: 'mobile-web-app-capable',
          content: 'yes',
        },
        {
          name: 'apple-mobile-web-app-capable',
          content: 'yes',
        },
      ],
      script: [
        {
          src: `https://www.googletagmanager.com/gtag/js?id=${process.env.ENV === 'production' ? process.env.GOOGLE_ANALYTICS_ID_PROD : process.env.GOOGLE_ANALYTICS_ID_DEV}`,
          async: true,
        },
        {
          src: 'https://t1.kakaocdn.net/kakao_js_sdk/2.3.0/kakao.min.js',
          integrity:
            'sha384-70k0rrouSYPWJt7q9rSTKpiTfX6USlMYjZUtr1Du+9o4cGvhPAWxngdtVZDdErlh',
          crossorigin: 'anonymous',
        },
        {
          children: `Kakao.init("${process.env.KAKAO_SCRIPT_KEY}")`,
        },
        {
          hid: 'gtm-script',
          src: `https://www.googletagmanager.com/gtm.js?id=${process.env.ENV === 'production' ? process.env.GOOGLE_TAG_MANAGER_ID_PROD : process.env.GOOGLE_TAG_MANAGER_ID_DEV}`,
          async: true,
          defer: true,
        },
        {
          hid: 'gtm-noscript',
          innerHTML: `
            <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=${process.env.ENV === 'production' ? process.env.GOOGLE_TAG_MANAGER_ID_PROD : process.env.GOOGLE_TAG_MANAGER_ID_DEV}"
            height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
          `,
        },
      ],
      link: [
        // Icons
        {
          rel: 'shortcut icon',
          href: './favicon.jpg',
        },
        {
          rel: 'apple-touch-icon',
          sizes: '192X192',
          href: '',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32X32',
          href: '',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: 'anonymous',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100;200;300;400;500;600;700&display=swap',
        },
      ],
    },
  },
});