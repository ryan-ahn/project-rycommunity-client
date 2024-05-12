<template>
  <WrapperWithPage
    :path="router.currentRoute.value.path"
    :title="HEADER_PAGE.mypage.title"
    :metaTitle="META_PAGE.mypage.page_title"
    :show="true"
  >
    <MyPageContainer/>
  </WrapperWithPage>
</template>

<script setup lang="ts">
import MyPageContainer from '@containers/page/mypage/index.vue';
import { META_PAGE } from '@assets/data/meta';
import { HEADER_PAGE } from '@assets/data/header';
// Hooks
const router = useRouter();
// Meta
useHead({
  title: META_PAGE.mypage.page_title,
  meta: [{
    name: 'description',
    content: META_PAGE.mypage.page_description,
  }],
  link: [{
    rel: 'canonical',
    href: META_PAGE.mypage.page_cannonical_link,
  }],
});
// Seo Meta
useSeoMeta({
  title: META_PAGE.mypage.page_title,
  ogTitle: META_PAGE.mypage.page_title,
  description: META_PAGE.mypage.page_description,
  ogDescription: META_PAGE.mypage.page_description,
  ogImage: META_PAGE.mypage.page_image,
  twitterCard: 'summary_large_image',
});
</script>
