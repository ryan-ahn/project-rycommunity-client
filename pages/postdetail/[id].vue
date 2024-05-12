<template>
  <WrapperWithStack
    :path="router.currentRoute.value.path"
    :title="HEADER_STACK.postDetail.title"
    :metaTitle="META_PAGE.postdetail.page_title"
    :right="HEADER_STACK.postDetail.right"
  >
    <PostDetailContainer/>
  </WrapperWithStack>
</template>

<script setup lang="ts">
import PostDetailContainer from '@containers/stack/postDetail/index.vue';
import { META_PAGE } from '@assets/data/meta';
import { HEADER_STACK } from '@assets/data/header';
// Hooks
const router = useRouter();
// Meta
useHead({
  title: META_PAGE.postdetail.page_title,
  meta: [{
    name: 'description',
    content: META_PAGE.postdetail.page_description,
  }],
  link: [{
    rel: 'canonical',
    href: META_PAGE.postdetail.page_cannonical_link,
  }],
});
// Seo Meta
useSeoMeta({
  title: META_PAGE.postdetail.page_title,
  ogTitle: META_PAGE.postdetail.page_title,
  description: META_PAGE.postdetail.page_description,
  ogDescription: META_PAGE.postdetail.page_description,
  ogImage: META_PAGE.postdetail.page_image,
  twitterCard: 'summary_large_image',
});
</script>
