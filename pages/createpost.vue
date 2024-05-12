<template>
  <WrapperWithStack
    :path="router.currentRoute.value.path"
    :title="route.query.mode === 'edit' ? HEADER_STACK.editPost.title : HEADER_STACK.createPost.title"
    :metaTitle="route.query.mode === 'edit' ? META_PAGE.editpost.page_title : META_PAGE.createpost.page_title"
    :right="route.query.mode === 'edit' ? HEADER_STACK.editPost.right : HEADER_STACK.createPost.right"
  >
    <CreatePostContainer/>
  </WrapperWithStack>
</template>

<script setup lang="ts">
import CreatePostContainer from '@containers/stack/createPost/index.vue';
import { META_PAGE } from '@assets/data/meta';
import { HEADER_STACK } from '@assets/data/header';
// Hooks
const router = useRouter();
const route = useRoute();
// Meta
useHead({
  title: route.query.mode === 'edit' ? META_PAGE.editpost.page_title : META_PAGE.createpost.page_title,
  meta: [{
    name: 'description',
    content: route.query.mode === 'edit' ? META_PAGE.editpost.page_description : META_PAGE.createpost.page_description,
  }],
  link: [{
    rel: 'canonical',
    href: route.query.mode === 'edit' ? META_PAGE.editpost.page_cannonical_link : META_PAGE.createpost.page_cannonical_link,
  }],
});
// Seo Meta
useSeoMeta({
  title: route.query.mode === 'edit' ? META_PAGE.editpost.page_title : META_PAGE.createpost.page_title,
  ogTitle: route.query.mode === 'edit' ? META_PAGE.editpost.page_title : META_PAGE.createpost.page_title,
  description: route.query.mode === 'edit' ? META_PAGE.editpost.page_description : META_PAGE.createpost.page_description,
  ogDescription: route.query.mode === 'edit' ? META_PAGE.editpost.page_description : META_PAGE.createpost.page_description,
  ogImage: route.query.mode === 'edit' ? META_PAGE.editpost.page_image : META_PAGE.createpost.page_image,
  twitterCard: 'summary_large_image',
});
</script>
