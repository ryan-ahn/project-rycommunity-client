<template>
  <section
    ref="pageRef"
    :class="isMobileOrTablet ? 'mobile-wrapper' : 'desktop-wrapper'"
  >
    <MoleculesTabLab
      :tab="route.query.tab"
      :data="MENU_CATEGORY"
      :onClickFunction="onClickGoToTab"
    />
    <OrganismListInLabVertical
      v-if="list"
      :data="list"
      :onClickGoToDetail="onClickGoToDetail"
    />
    <div
      v-if="list && list.length === 0"
      class="empty-box"
    >
      <AtomsEmptyImageContent
        :image="emptyImage"
        :text="emptyText"
        :type="''"
        :description="emptyDescription"
      />
    </div>
    <div
      v-if="list && list.length > 0"
      class="infinite-box"
    >
      <InfiniteLoading
        :target="isMobileOrTablet ? 'window' : '#scroll' "
        :slots="{ complete: ' ' }"
        :identifier="query"
        @infinite="onIntersectBottom"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useScrollTop } from '@utils/useScroll';
import { useLabStore } from '@store/index';
import { MENU_CATEGORY } from '@assets/data/menu';
import { EMPTY_CONTENT } from '@assets/data/empty';
// Hooks
const { isMobileOrTablet } = useDevice();
const route = useRoute();
const router = useRouter();
const labStore = useLabStore();
// State
const { list } = storeToRefs(labStore);
const query = computed(() => route.query.tab);
const pageRef: Ref<HTMLElement | null> = ref(null);
const allEmptyImage = EMPTY_CONTENT.labList.all.image;
const allEmptyText = EMPTY_CONTENT.labList.all.text;
const allEmptyDescription = EMPTY_CONTENT.labList.all.description;
const paperShopEmptyImage = EMPTY_CONTENT.labList.paperShop.image;
const paperShopEmptyText = EMPTY_CONTENT.labList.paperShop.text;
const paperShopEmptyDescription = EMPTY_CONTENT.labList.paperShop.description;
const recruitEmptyImage = EMPTY_CONTENT.labList.recruit.image;
const recruitEmptyText = EMPTY_CONTENT.labList.recruit.text;
const recruitEmptyDescription = EMPTY_CONTENT.labList.recruit.description;
const activeEmptyImage = EMPTY_CONTENT.labList.ongoing.image;
const activeEmptyText = EMPTY_CONTENT.labList.ongoing.text;
const activeEmptyDescription = EMPTY_CONTENT.labList.ongoing.description;

const emptyImage = computed(() => {
  if (route.query.tab === 'papershop') {
    return paperShopEmptyImage;
  }
  if (route.query.tab === 'recruit') {
    return recruitEmptyImage;
  }
  if (route.query.tab === 'active') {
    return activeEmptyImage;
  }
  return allEmptyImage;
});
const emptyText = computed(() => {
  if (route.query.tab === 'papershop') {
    return paperShopEmptyText;
  }
  if (route.query.tab === 'recruit') {
    return recruitEmptyText;
  }
  if (route.query.tab === 'active') {
    return activeEmptyText;
  }
  return allEmptyText;
});
const emptyDescription = computed(() => {
  if (route.query.tab === 'papershop') {
    return paperShopEmptyDescription;
  }
  if (route.query.tab === 'recruit') {
    return recruitEmptyDescription;
  }
  if (route.query.tab === 'active') {
    return activeEmptyDescription;
  }
  return allEmptyDescription;
});

// Function
const onClickGoToTab = (tab: string) => {
  router.push(`/lab/?tab=${tab}`);
};
const onClickGoToDetail = (id: string) => {
  router.push(`/labdetail/${id}/?tab=1`);
};
const onIntersectBottom = async ($state: any) => {
  await labStore.getLabList({
    offset: list.value ? list.value.length + 1 : 0,
    limit: 4,
    tab: route.query.tab,
    init: false,
    event: $state,
  });
};
onMounted(async () => {
  useScrollTop();
  await labStore.getLabList({
    offset: 0,
    limit: 5,
    tab: route.query.tab,
    init: true,
  });
});
// Watcher
watch(
  () => route.query.tab,
  async () => {
    labStore.initLabList();
    await labStore.getLabList({
      offset: 0,
      limit: 5,
      tab: route.query.tab,
      init: true,
    });
  },
);
</script>

<style lang="scss" scoped>
.page-wrapper {
  @include flexSet(flex-start, flex-start, column);
  @include boxSet(100%, auto, 0px);
}
.infinite-box {
  @include flexSet(center, center, row);
  @include boxSet(100%, 50px, 0px);
}
</style>
