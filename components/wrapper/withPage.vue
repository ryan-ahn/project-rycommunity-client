<template>
  <div class="g-page-wrapper">
    <MoleculesHeaderPage
      v-if="show"
      :title="title"
    />
    <slot/>
    <AtomsButtonMainFab
      v-if="checkHasButtonPage(path)"
      :text="fabText"
      :width="fabWidth"
      :expand="tabExpand"
      :onClickFunction="onClickGoToStack"
    />
    <MoleculesNavigatorBottom
      :path="path"
      :onClickFunction="onClickGoToPage"
    />
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import {
  useScrollStore,
  useModalStore,
} from '@store/index';
import { IWrapperWithPageProps } from '@interface/props';
import { BUTTON_MAIN_FAB } from '@assets/data/button';
// Hooks
const router = useRouter();
const access = useCookie('access');
const scrollStore = useScrollStore();
const modalStore = useModalStore();
// Props
const {
  path,
  title,
  show,
} = defineProps<IWrapperWithPageProps>();
// State
const { currentScrollTop } = storeToRefs(scrollStore);
const fabText = computed(() => BUTTON_MAIN_FAB[validateSplitPath(path)].text);
const fabWidth = computed(() => BUTTON_MAIN_FAB[validateSplitPath(path)].width);
const tabExpand = computed(() => currentScrollTop.value === 0);
// Functions
const onClickGoToPage = (page: string) => {
  switch (page) {
    case '/':
      router.push('/');
      break;
    case '/lounge':
      router.push('/lounge');
      break;
    case '/lab':
      router.push('/lab/?tab=all');
      break;
    case '/mypage':
      router.push('/mypage/?tab=pop');
      break;
    default:
      break;
  }
};
const onClickGoToStack = () => {
  if (access.value) {
    switch (path) {
      case '/lounge':
        router.push('/createpost');
        break;
      case '/lab/':
        modalStore.setOpenModal('createLabAgree');
        break;
      default:
        break;
    }
  } else {
    router.push('/login');
  }
};
// Cycle
onMounted(() => {
  // useScrollTop();
});
</script>

<style lang="scss">
.g-page-wrapper {
  position: relative;
  padding-bottom: 60px;
}
</style>
