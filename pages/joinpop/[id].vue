<template>
  <WrapperWithStack
    :path="router.currentRoute.value.path"
    :title="HEADER_STACK.joinPop.title"
    :metaTitle="META_PAGE.joinpop.page_title"
    :right="HEADER_STACK.joinPop.right"
  >
    <JoinPopContainer/>
  </WrapperWithStack>
</template>

<script setup lang="ts">
import JoinPopContainer from '@containers/stack/joinPop/index.vue';
import { META_PAGE } from '@assets/data/meta';
import { HEADER_STACK } from '@assets/data/header';
// Hooks
const router = useRouter();
// Meta
useHead({
  title: META_PAGE.joinpop.page_title,
  meta: [{
    name: 'description',
    content: META_PAGE.joinpop.page_description,
  }],
  link: [{
    rel: 'canonical',
    href: META_PAGE.joinpop.page_cannonical_link,
  }],
});
// Seo Meta
useSeoMeta({
  title: META_PAGE.joinpop.page_title,
  ogTitle: META_PAGE.joinpop.page_title,
  description: META_PAGE.joinpop.page_description,
  ogDescription: META_PAGE.joinpop.page_description,
  ogImage: META_PAGE.joinpop.page_image,
  twitterCard: 'summary_large_image',
});
// Layout
definePageMeta({
  layout: 'default',
});
</script>
