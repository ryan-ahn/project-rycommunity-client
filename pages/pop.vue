<template>
  <WrapperWithStack
    :path="router.currentRoute.value.path"
    :title="HEADER_STACK.pop.title"
    :metaTitle="META_PAGE.pop.page_title"
    :right="HEADER_STACK.pop.right"
  >
    <PopContainer/>
  </WrapperWithStack>
</template>

<script setup lang="ts">
import PopContainer from '@containers/stack/pop/index.vue';
import { META_PAGE } from '@assets/data/meta';
import { HEADER_STACK } from '@assets/data/header';
// Hooks
const router = useRouter();
// Meta
useHead({
  title: META_PAGE.pop.page_title,
  meta: [{
    name: 'description',
    content: META_PAGE.pop.page_description,
  }],
  link: [{
    rel: 'canonical',
    href: META_PAGE.pop.page_cannonical_link,
  }],
});
// Seo Meta
useSeoMeta({
  title: META_PAGE.pop.page_title,
  ogTitle: META_PAGE.pop.page_title,
  description: META_PAGE.pop.page_description,
  ogDescription: META_PAGE.pop.page_description,
  ogImage: META_PAGE.pop.page_image,
  twitterCard: 'summary_large_image',
});
</script>
