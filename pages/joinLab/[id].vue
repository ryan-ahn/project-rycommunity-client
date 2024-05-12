<template>
  <WrapperWithStack
    :path="router.currentRoute.value.path"
    :title="HEADER_STACK.joinLab.title"
    :metaTitle="META_PAGE.joinlab.page_title"
    :right="HEADER_STACK.joinLab.right"
  >
    <JoinLabContainer/>
  </WrapperWithStack>
</template>

<script setup lang="ts">
import JoinLabContainer from '@containers/stack/joinLab/index.vue';
import { META_PAGE } from '@assets/data/meta';
import { HEADER_STACK } from '@assets/data/header';
// Hooks
const router = useRouter();
// Meta
useHead({
  title: META_PAGE.joinlab.page_title,
  meta: [{
    name: 'description',
    content: META_PAGE.joinlab.page_description,
  }],
  link: [{
    rel: 'canonical',
    href: META_PAGE.joinlab.page_cannonical_link,
  }],
});
// Seo Meta
useSeoMeta({
  title: META_PAGE.joinlab.page_title,
  ogTitle: META_PAGE.joinlab.page_title,
  description: META_PAGE.joinlab.page_description,
  ogDescription: META_PAGE.joinlab.page_description,
  ogImage: META_PAGE.joinlab.page_image,
  twitterCard: 'summary_large_image',
});
// Layout
definePageMeta({
  layout: 'default',
});
</script>
