<template>
  <WrapperWithStack
    :path="router.currentRoute.value.path"
    title="멤버 상세"
    :metaTitle="META_PAGE.createlab.page_title"
    :right="HEADER_STACK.createLab.right"
  >
    <MemberDetailContainer/>
  </WrapperWithStack>
</template>

<script setup lang="ts">
import MemberDetailContainer from '@containers/stack/memberDetail/index.vue';
import { META_PAGE } from '@assets/data/meta';
import { HEADER_STACK } from '@assets/data/header';
// Hooks
const router = useRouter();

</script>
