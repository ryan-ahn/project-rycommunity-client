<template>
  <WrapperWithStack
    :path="router.currentRoute.value.path"
    :title="HEADER_STACK.labDetail.title"
    :metaTitle="META_PAGE.labdetail.page_title"
    :right="HEADER_STACK.labDetail.right"
  >
    <LabDetailContainer/>
  </WrapperWithStack>
</template>

<script setup lang="ts">
import LabDetailContainer from '@containers/stack/labDetail/index.vue';
import { META_PAGE } from '@assets/data/meta';
import { HEADER_STACK } from '@assets/data/header';
// Hooks
const router = useRouter();
// Meta
useHead({
  title: META_PAGE.labdetail.page_title,
  meta: [{
    name: 'description',
    content: META_PAGE.labdetail.page_description,
  }],
  link: [{
    rel: 'canonical',
    href: META_PAGE.labdetail.page_cannonical_link,
  }],
});
// Seo Meta
useSeoMeta({
  title: META_PAGE.labdetail.page_title,
  ogTitle: META_PAGE.labdetail.page_title,
  description: META_PAGE.labdetail.page_description,
  ogDescription: META_PAGE.labdetail.page_description,
  ogImage: META_PAGE.labdetail.page_image,
  twitterCard: 'summary_large_image',
});
// Layout
definePageMeta({
  layout: 'default',
});
</script>
