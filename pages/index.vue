<template>
  <WrapperWithPage
    :path="router.currentRoute.value.path"
    :title="HEADER_PAGE.main.title"
    :metaTitle="META_PAGE.default.page_title"
    :show="false"
  >
    <MainContainer/>
  </WrapperWithPage>
</template>

<script setup lang="ts">
import MainContainer from '@containers/page/main/index.vue';
import { META_PAGE } from '@assets/data/meta';
import { HEADER_PAGE } from '@assets/data/header';
// Hooks
const router = useRouter();
// Meta
useHead({
  title: META_PAGE.default.page_title,
  meta: [{
    name: 'description',
    content: META_PAGE.default.page_description,
  }],
  link: [{
    rel: 'canonical',
    href: META_PAGE.default.page_cannonical_link,
  }],
});
// Seo Meta
useSeoMeta({
  title: META_PAGE.default.page_title,
  ogTitle: META_PAGE.default.page_title,
  description: META_PAGE.default.page_description,
  ogDescription: META_PAGE.default.page_description,
  ogImage: META_PAGE.default.page_image,
  twitterCard: 'summary_large_image',
});
</script>
