<template>
  <WrapperWithStack
    :path="router.currentRoute.value.path"
    :title="HEADER_STACK.labMember.title"
    :metaTitle="META_PAGE.labmember.page_title"
    :right="HEADER_STACK.labMember.right"
  >
    <labMemberContainer/>
  </WrapperWithStack>
</template>

<script setup lang="ts">
import labMemberContainer from '@containers/stack/labMember/index.vue';
import { META_PAGE } from '@assets/data/meta';
import { HEADER_STACK } from '@assets/data/header';

// Hooks
const router = useRouter();

// Meta
useHead({
  title: META_PAGE.labmember.page_title,
  meta: [{
    name: 'description',
    content: META_PAGE.labmember.page_description,
  }],
  link: [{
    rel: 'canonical',
    href: META_PAGE.labmember.page_cannonical_link,
  }],
});
// Seo Meta
useSeoMeta({
  title: META_PAGE.labmember.page_title,
  ogTitle: META_PAGE.labmember.page_title,
  description: META_PAGE.labmember.page_description,
  ogDescription: META_PAGE.labmember.page_description,
  ogImage: META_PAGE.labmember.page_image,
  twitterCard: 'summary_large_image',
});
// Layout
definePageMeta({
  layout: 'default',
});
</script>
