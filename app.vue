<template>
  <NuxtLayout :name="layout">
    <NuxtPage/>
    <MoleculesModal :children="modalComponent[modalType]"/>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import { storeToRefs } from 'pinia';
import { useModalStore } from '@store/index';
import { TModalObject } from '@interface/object';
import '@vuepic/vue-datepicker/dist/main.css';
// Hooks
const modalStore = useModalStore();
const { modalType } = storeToRefs(modalStore);
const { isMobileOrTablet } = useDevice();

// State
const layout = ref(isMobileOrTablet ? 'default' : 'desktop');
// Dynamic Import
const modalComponent: TModalObject = {
  default: defineAsyncComponent(
    () => import('@containers/common/modal/commonDefault.vue'),
  ),
  commonFooter: defineAsyncComponent(
    () => import('@containers/common/modal/commonFooter.vue'),
  ),
  commonLinkShare: defineAsyncComponent(
    () => import('@containers/common/modal/commonLinkShare.vue'),
  ),
  agreeLab: defineAsyncComponent(
    () => import('@containers/common/modal/agreeLab.vue'),
  ),
  guideLab: defineAsyncComponent(
    () => import('@containers/common/modal/guideLab.vue'),
  ),
  createLabAgree: defineAsyncComponent(
    () => import('@containers/common/modal/createLabAgree.vue'),
  ),
  createLabCategory: defineAsyncComponent(
    () => import('@containers/common/modal/createLabCategory.vue'),
  ),
  createLabPeriod: defineAsyncComponent(
    () => import('@containers/common/modal/createLabPeriod.vue'),
  ),
  createLabWeek: defineAsyncComponent(
    () => import('@containers/common/modal/createLabWeek.vue'),
  ),
  createLabTime: defineAsyncComponent(
    () => import('@containers/common/modal/createLabTime.vue'),
  ),
  createLabPlace: defineAsyncComponent(
    () => import('@containers/common/modal/createLabPlace.vue'),
  ),
  createLab: defineAsyncComponent(
    () => import('@containers/common/modal/createLab.vue'),
  ),
  endLabRecruit: defineAsyncComponent(
    () => import('@containers/common/modal/endLabRecruit.vue'),
  ),
  noticeEndRecruit: defineAsyncComponent(
    () => import('@containers/common/modal/noticeEndRecruit.vue'),
  ),
  loungePost: defineAsyncComponent(
    () => import('@containers/common/modal/loungePost.vue'),
  ),
  loungePostDelete: defineAsyncComponent(
    () => import('@containers/common/modal/loungePostDelete.vue'),
  ),
  loungePostComment: defineAsyncComponent(
    () => import('@containers/common/modal/loungePostComment.vue'),
  ),
  loungePostCommentDelete: defineAsyncComponent(
    () => import('@containers/common/modal/loungePostCommentDelete.vue'),
  ),
  joinLabKnow: defineAsyncComponent(
    () => import('@containers/common/modal/joinLabKnow.vue'),
  ),
  joinLab: defineAsyncComponent(
    () => import('@containers/common/modal/joinLab.vue'),
  ),
  popQrPopup: defineAsyncComponent(
    () => import('@containers/common/modal/popQrPopup.vue'),
  ),
  joinPopAgree: defineAsyncComponent(
    () => import('@containers/common/modal/joinPopAgree.vue'),
  ),
  // joinPop: defineAsyncComponent(
  //   () => import('@containers/common/modal/joinPop.vue'),
  // ),
};

</script>
