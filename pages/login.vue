<template>
  <WrapperWithStack
    :path="router.currentRoute.value.path"
    :title="HEADER_STACK.login.title"
    :metaTitle="META_PAGE.login.page_title"
    :right="HEADER_STACK.login.right"
  >
    <LoginContainer/>
  </WrapperWithStack>
</template>

<script setup lang="ts">
import LoginContainer from '@containers/stack/login/index.vue';
import { META_PAGE } from '@assets/data/meta';
import { HEADER_STACK } from '@assets/data/header';
// Hooks
const router = useRouter();
// Meta
useHead({
  title: META_PAGE.login.page_title,
  meta: [{
    name: 'description',
    content: META_PAGE.login.page_description,
  }],
  link: [{
    rel: 'canonical',
    href: META_PAGE.login.page_cannonical_link,
  }],
});
// Seo Meta
useSeoMeta({
  title: META_PAGE.login.page_title,
  ogTitle: META_PAGE.login.page_title,
  description: META_PAGE.login.page_description,
  ogDescription: META_PAGE.login.page_description,
  ogImage: META_PAGE.login.page_image,
  twitterCard: 'summary_large_image',
});
</script>
