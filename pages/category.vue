<template>
  <WrapperWithStack
    :path="router.currentRoute.value.path"
    :title="HEADER_STACK.category.title"
    :metaTitle="META_PAGE.category.page_title"
    :right="HEADER_STACK.category.right"
  >
    <CategoryContainer/>
  </WrapperWithStack>
</template>

<script setup lang="ts">
import CategoryContainer from '@containers/stack/category/index.vue';
import { META_PAGE } from '@assets/data/meta';
import { HEADER_STACK } from '@assets/data/header';
// Hooks
const router = useRouter();
// Meta
useHead({
  title: META_PAGE.category.page_title,
  meta: [{
    name: 'description',
    content: META_PAGE.category.page_description,
  }],
  link: [{
    rel: 'canonical',
    href: META_PAGE.category.page_cannonical_link,
  }],
});
// Seo Meta
useSeoMeta({
  title: META_PAGE.category.page_title,
  ogTitle: META_PAGE.category.page_title,
  description: META_PAGE.category.page_description,
  ogDescription: META_PAGE.category.page_description,
  ogImage: META_PAGE.category.page_image,
  twitterCard: 'summary_large_image',
});
</script>
