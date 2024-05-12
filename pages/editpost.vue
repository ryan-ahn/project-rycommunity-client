<template>
  <WrapperWithStack
    :path="router.currentRoute.value.path"
    :title="HEADER_STACK.editPost.title"
    :metaTitle="META_PAGE.editpost.page_title"
    :right="HEADER_STACK.editPost.right"
  >
    <!-- <EditPostContainer/> -->
  </WrapperWithStack>
</template>

<script setup lang="ts">
// import EditPostContainer from '@containers/stack/editPost/index.vue';
import { META_PAGE } from '@assets/data/meta';
import { HEADER_STACK } from '@assets/data/header';
// Hooks
const router = useRouter();
// Meta
useHead({
  title: META_PAGE.editpost.page_title,
  meta: [{
    name: 'description',
    content: META_PAGE.editpost.page_description,
  }],
  link: [{
    rel: 'canonical',
    href: META_PAGE.editpost.page_cannonical_link,
  }],
});
// Seo Meta
useSeoMeta({
  title: META_PAGE.editpost.page_title,
  ogTitle: META_PAGE.editpost.page_title,
  description: META_PAGE.editpost.page_description,
  ogDescription: META_PAGE.editpost.page_description,
  ogImage: META_PAGE.editpost.page_image,
  twitterCard: 'summary_large_image',
});
</script>
