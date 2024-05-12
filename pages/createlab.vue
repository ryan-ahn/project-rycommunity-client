<template>
  <WrapperWithStack
    :path="router.currentRoute.value.path"
    :title="HEADER_STACK.createLab.title"
    :metaTitle="META_PAGE.createlab.page_title"
    :right="HEADER_STACK.createLab.right"
  >
    <CreateLabContainer/>
  </WrapperWithStack>
</template>

<script setup lang="ts">
import CreateLabContainer from '@containers/stack/createLab/index.vue';
import { META_PAGE } from '@assets/data/meta';
import { HEADER_STACK } from '@assets/data/header';
// Hooks
const router = useRouter();
// Meta
useHead({
  title: META_PAGE.createlab.page_title,
  meta: [{
    name: 'description',
    content: META_PAGE.createlab.page_description,
  }],
  link: [{
    rel: 'canonical',
    href: META_PAGE.createlab.page_cannonical_link,
  }],
});
// Seo Meta
useSeoMeta({
  title: META_PAGE.createlab.page_title,
  ogTitle: META_PAGE.createlab.page_title,
  description: META_PAGE.createlab.page_description,
  ogDescription: META_PAGE.createlab.page_description,
  ogImage: META_PAGE.createlab.page_image,
  twitterCard: 'summary_large_image',
});
</script>
