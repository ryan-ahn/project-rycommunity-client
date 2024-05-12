<template>
  <WrapperWithStack
    :path="router.currentRoute.value.path"
    :title="HEADER_STACK.papershop.title"
    :metaTitle="META_PAGE.papershop.page_title"
    :right="HEADER_STACK.papershop.right"
  >
    <PapershopContainer/>
  </WrapperWithStack>
</template>

<script setup lang="ts">
import PapershopContainer from '@containers/stack/event/papershop.vue';
import { META_PAGE } from '@assets/data/meta';
import { HEADER_STACK } from '@assets/data/header';
// Hooks
const router = useRouter();
// Meta
useHead({
  title: META_PAGE.papershop.page_title,
  meta: [{
    name: 'description',
    content: META_PAGE.papershop.page_description,
  }],
  link: [{
    rel: 'canonical',
    href: META_PAGE.papershop.page_cannonical_link,
  }],
});
// Seo Meta
useSeoMeta({
  title: META_PAGE.papershop.page_title,
  ogTitle: META_PAGE.papershop.page_title,
  description: META_PAGE.papershop.page_description,
  ogDescription: META_PAGE.papershop.page_description,
  ogImage: META_PAGE.papershop.page_image,
  twitterCard: 'summary_large_image',
});
</script>
