<template>
  <WrapperWithStack
    :path="router.currentRoute.value.path"
    :title="HEADER_STACK.popDetail.title"
    :metaTitle="META_PAGE.popdetail.page_title"
    :right="HEADER_STACK.popDetail.right"
  >
    <PopDetailContainer/>
  </WrapperWithStack>
</template>

<script setup lang="ts">
import PopDetailContainer from '@containers/stack/popDetail/index.vue';
import { META_PAGE } from '@assets/data/meta';
import { HEADER_STACK } from '@assets/data/header';
// Hooks
const config = useRuntimeConfig();
const route = useRoute();
const router = useRouter();
const response:any = await $fetch(`${config.public.API_HOST}/common/detail/meta/pop+${route.params.id}`);
// Meta
useHead({
  title: `[라이언연구소] ${response.data.title}`,
  meta: [{
    name: 'description',
    content: META_PAGE.popdetail.page_description,
  }],
  link: [{
    rel: 'canonical',
    href: `${META_PAGE.popdetail.page_cannonical_link}/${route.params.id}`,
  }],
});
// Seo Meta
useSeoMeta({
  title: `[라이언연구소] ${response.data.title}`,
  description: META_PAGE.popdetail.page_description,
  ogSiteName: '라이언연구소',
  ogTitle: `[라이언연구소] ${response.data.title}`,
  ogDescription: META_PAGE.popdetail.page_description,
  ogImage: `${response.data.image}`,
  ogImageAlt: 'thumbnail',
  ogUrl: `${META_PAGE.popdetail.page_cannonical_link}/${route.params.id}`,
  ogType: 'article',
  twitterSite: '@라이언연구소',
  twitterTitle: `[라이언연구소] ${response.data.title}`,
  twitterDescription: META_PAGE.popdetail.page_description,
  twitterImage: `${response.data.image}`,
});
// Layout
definePageMeta({
  layout: 'default',
});
</script>
