<template>
  <WrapperWithPage
    :path="router.currentRoute.value.path"
    :title="HEADER_PAGE.lounge.title"
    :metaTitle="META_PAGE.lounge.page_title"
    :show="true"
  >
    <LoungeContainer/>
  </WrapperWithPage>
</template>

<script setup lang="ts">
import LoungeContainer from '@containers/page/lounge/index.vue';
import { META_PAGE } from '@assets/data/meta';
import { HEADER_PAGE } from '@assets/data/header';
// Hooks
const router = useRouter();
// Meta
useHead({
  title: META_PAGE.lounge.page_title,
  meta: [{
    name: 'description',
    content: META_PAGE.lounge.page_description,
  }],
  link: [{
    rel: 'canonical',
    href: META_PAGE.lounge.page_cannonical_link,
  }],
});
// Seo Meta
useSeoMeta({
  title: META_PAGE.lounge.page_title,
  ogTitle: META_PAGE.lounge.page_title,
  description: META_PAGE.lounge.page_description,
  ogDescription: META_PAGE.lounge.page_description,
  ogImage: META_PAGE.lounge.page_image,
  twitterCard: 'summary_large_image',
});
</script>
