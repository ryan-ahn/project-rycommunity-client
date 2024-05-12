<template>
  <WrapperWithPage
    :path="router.currentRoute.value.path"
    :title="HEADER_PAGE.lab.title"
    :metaTitle="META_PAGE.lab.page_title"
    :show="true"
  >
    <LabContainer/>
  </WrapperWithPage>
</template>

<script setup lang="ts">
import LabContainer from '@containers/page/lab/index.vue';
import { META_PAGE } from '@assets/data/meta';
import { HEADER_PAGE } from '@assets/data/header';
// Hooks
const router = useRouter();
// Meta
useHead({
  title: META_PAGE.lab.page_title,
  meta: [{
    name: 'description',
    content: META_PAGE.lab.page_description,
  }],
  link: [{
    rel: 'canonical',
    href: META_PAGE.lab.page_cannonical_link,
  }],
});
// Seo Meta
useSeoMeta({
  title: META_PAGE.lab.page_title,
  ogTitle: META_PAGE.lab.page_title,
  description: META_PAGE.lab.page_description,
  ogDescription: META_PAGE.lab.page_description,
  ogImage: META_PAGE.lab.page_image,
  twitterCard: 'summary_large_image',
});
</script>
