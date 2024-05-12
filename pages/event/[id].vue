<template>
  <WrapperWithStack
    :path="router.currentRoute.value.path"
    :title="HEADER_STACK.template.title"
    :metaTitle="META_PAGE.template.page_title"
    :right="HEADER_STACK.template.right"
  >
    <TemplateContainer/>
  </WrapperWithStack>
</template>

<script setup lang="ts">
import TemplateContainer from '@containers/stack/event/template.vue';
import { META_PAGE } from '@assets/data/meta';
import { HEADER_STACK } from '@assets/data/header';
// Hooks
const router = useRouter();
// Meta
useHead({
  title: META_PAGE.template.page_title,
  meta: [{
    name: 'description',
    content: META_PAGE.template.page_description,
  }],
  link: [{
    rel: 'canonical',
    href: META_PAGE.template.page_cannonical_link,
  }],
});
// Seo Meta
useSeoMeta({
  title: META_PAGE.template.page_title,
  ogTitle: META_PAGE.template.page_title,
  description: META_PAGE.template.page_description,
  ogDescription: META_PAGE.template.page_description,
  ogImage: META_PAGE.template.page_image,
  twitterCard: 'summary_large_image',
});
</script>
