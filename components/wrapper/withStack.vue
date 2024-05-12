<template>
  <div class="g-stack-wrapper">
    <MoleculesHeaderStack
      :path="path"
      :title="title"
      :right="right"
      :backColor="
        checkTransparentHeader(path) && currentScrollTop < 1
          ? 'transparent'
          : 'white'
      "
      :icon="
        checkTransparentHeader(path) && currentScrollTop < 1 ? 'white' : 'gray'
      "
      :onClickFunction="joinPop ? (onClickGoToHome || onClickGoToBack) : (postDetail ? onClickGoToLounge : onClickGoToBack)"
      :onClickOpenShareModal="() => onClickOpenShareModal(path)"
      :onClickWritePost="onClickWritePost"
      :onClickEditPost="onClickEditPost"
    />
    <slot/>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import {
  useStackStore,
  useScrollStore,
  useLoungeStore,
  useModalStore,
} from '@store/index';
import { IWrapperWithStackProps } from '@interface/props';

// Props
const {
  path,
  title,
  metaTitle,
  right,
} = defineProps<IWrapperWithStackProps>();
// Hooks
const router = useRouter();
const route = useRoute();
const stackStore = useStackStore();
const loungeStore = useLoungeStore();
const scrollStore = useScrollStore();
const modalStore = useModalStore();

// State
const { stackHistory } = storeToRefs(stackStore);
const { currentScrollTop } = storeToRefs(scrollStore);
const joinPop = computed(() => validateSplitPath(route.path) === 'popdetail' && stackHistory.value[1] === `/complete/joinpop/${route.params.id}`);
const postDetail = computed(() => validateSplitPath(route.path) === 'postdetail');

// Functions
const onClickGoToHome = () => {
  router.push('/');
};
const onClickGoToBack = () => {
  router.push(stackHistory.value[1]);
};
const onClickGoToLounge = () => {
  router.push({
    path: '/lounge',

  });
};
const onClickOpenShareModal = (path: string) => {
  modalStore.setLinkShare(path);
  modalStore.setLinkTitleShare(metaTitle);
  modalStore.setOpenModal('commonLinkShare');
};
const onClickWritePost = () => {
  loungeStore.postLoungePost();
};
const onClickEditPost = () => {
  loungeStore.putLoungePost();
};
// Cycle
onMounted(() => {
  trackCurrentScroll();
});
</script>

<style lang="scss">
.g-stack-wrapper {
  position: relative;
}
</style>
