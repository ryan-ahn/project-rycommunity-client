<template>
  <section
    class="page-wrapper"
    :class="isMobileOrTablet ? 'mobile-wrapper' : 'desktop-wrapper'"
  >
    <div class="description-box">
      <AtomsAreaMessage
        :message="pageMessage"
        :type="commonType"
      />
    </div>
    <OrganismListInLoungePost
      v-if="postList"
      :data="postList"
      :onClickGoToDetail="onClickGoToDetail"
      :onClickGoToLink="onClickGoToLink"
      :onClickPostLike="onClickPostLike"
      :onClickOpenModal="onClickOpenMyListModal"
    />
    <SkeletonInLoungePost v-if="!postList"/>
  </section>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import {
  trackCurrentScroll,
  useScrollTop,
} from '@utils/useScroll';
import {
  useLoungeStore,
  useModalStore,
  useStackStore,
  useScrollStore,
} from '@store/index';
import { AREA_MESSAGE } from '@assets/data/area';

// Hooks
const router = useRouter();
const access = useCookie('access');
const { isMobileOrTablet } = useDevice();
const loungeStore = useLoungeStore();
const modalStore = useModalStore();
const stackStore = useStackStore();
const scrollStore = useScrollStore();
// State
const { setStackHistory } = stackStore;
const { postList } = storeToRefs(loungeStore);
const {
  scrollPositions,
  stackHistory,
} = storeToRefs(stackStore);
const { currentScrollTop } = storeToRefs(scrollStore);
const pageMessage = AREA_MESSAGE.lounge.message;
const commonType = AREA_MESSAGE.lounge.type;
// Function
const onClickGoToDetail = (id: string) => {
  router.push(`/postdetail/${id}`);
};
const onClickGoToLink = (link: string) => {
  window.open(link, '_black');
};
const onClickPostLike = async (id: string) => {
  if (!access.value) {
    router.push('/login');
  }
  await loungeStore.postLoungePostLike({
    postId: id,
  });
  await loungeStore.getLoungePostList();
};
const onClickOpenMyListModal = (id: string) => {
  modalStore.setOpenModal('loungePost');
  modalStore.setPostId(id);
};

// Cycle
onBeforeMount(() => {
  trackCurrentScroll();
});
onMounted(() => {
  loungeStore.getLoungePostList();
  currentScrollTop.value = scrollPositions.value['/lounge'];
  // desktop
  document.getElementById('scroll')?.scrollTo(0, currentScrollTop.value);
  // mobile
  if (isMobileOrTablet) {
    requestAnimationFrame(() => {
      document.documentElement.scrollTop = currentScrollTop.value;
    });
  }
});

</script>

<style lang="scss" scoped>
.page-wrapper {
  @include flexSet(flex-start, flex-start, column);
  @include boxSet(100%, auto, 0px);
}
.description-box {
  @include boxSet(100%, auto, 0px);
  padding: 0 20px;
}
</style>
