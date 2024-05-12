import { storeToRefs } from 'pinia';
import useStackStore from '@store/useStackStore';
import {
  useLabStore,
  useScrollStore,
  useMainStore,
  useAuthStore,
  useLoungeStore,
  useModalStore,
} from '@store/index';

export default defineNuxtRouteMiddleware((to, from) => {
  // Hooks
  const access = useCookie('access');
  const router = useRouter();
  const authStore = useAuthStore();
  const labStore = useLabStore();
  const modalStore = useModalStore();
  const loungeStore = useLoungeStore();
  const stackStore = useStackStore();
  const mainStore = useMainStore();
  const scrollStore = useScrollStore();
  // State
  const { setStackHistory } = useStackStore();
  const { stackHistory } = storeToRefs(stackStore);
  // Set State
  setStackHistory(to.fullPath, stackHistory.value);
  // Init
  if (validateSplitPath(to.path) === 'labdetail') {
    labStore.initLabDetail();
    scrollStore.initCurrentScrollTop();
  }
  // if (validateSplitPath(to.path) === 'labdetail') {
  //   labStore.initLabDetail();
  //   scrollStore.useScrollToTop();
  //   console.log(validateSplitPath(to.path));
  // }
  if (validateSplitPath(to.path) === 'createlab') {
    modalStore.initCreateLab();
    scrollStore.initCurrentScrollTop();
  }
  if (validateSplitPath(to.path) === 'labmember') {
    labStore.initLabMemberList();
    scrollStore.initCurrentScrollTop();
  }
  // if (validateSplitPath(to.path) === 'memberdetail') {
  //   labStore.initMemberDetail();
  //   scrollStore.initCurrentScrollTop();
  // }
  if (validateSplitPath(from.path) === 'popdetail') {
    mainStore.initPopDetail();
    scrollStore.initCurrentScrollTop();
  }
  if (validateSplitPath(to.path) === 'postdetail') {
    loungeStore.initPostDetail();
    // document.getElementById('scroll')?.scrollTo(0, 0);
    // scrollStore.initCurrentScrollTop();
  }
  if (validateSplitPath(to.path) === 'createpost') {
    loungeStore.initCreatePost();
    scrollStore.initCurrentScrollTop();
  }
  // Access
  if (access.value) {
    authStore.getTokenAccess();
  } else {
    authStore.initAccess();
  }
  if (validateSplitPath(to.path) === 'mypage' && !access.value) {
    router.push('/login');
  }
  if (validateSplitPath(to.path) === 'redirectqr' && !access.value) {
    router.push('/login');
  }
  if (validateSplitPath(to.path) === 'joinlab' && !access.value) {
    router.push('/login');
  }
  if (validateSplitPath(to.path) === 'labmember' && !access.value) {
    router.push('/login');
  }
  if (validateSplitPath(to.path) === 'memberdetail' && !access.value) {
    router.push('/login');
  }
  if (validateSplitPath(to.path) === 'createpost' && !access.value) {
    router.push('/login');
  }

  // QueryString
  if (validateSplitPath(to.path) === 'lab' && !to.query.tab) {
    router.push('/lab/?tab=all');
  }

  // Stack Animation
  // if (isMobile && !checkPathIsPage(to.path) && checkPathIsPage(from.path)) {
  //   to.meta.pageTransition = { name: 'page-left' };
  //   from.meta.pageTransition = { name: 'page-left' };
  // }
  // if (
  //   isMobile &&
  //   toStackStatus.value === 'page' &&
  //   fromStackStatus.value === 'stack'
  // ) {
  //   to.meta.pageTransition = { name: 'page-right' };
  //   from.meta.pageTransition = { name: 'page-right' };
  // }
  // if (
  //   isMobile &&
  //   toStackStatus.value === 'stack' &&
  //   fromStackStatus.value === 'stack' &&
  //   stackHistory.value.includes(to.path)
  // ) {
  //   to.meta.pageTransition = { name: 'page-right' };
  //   from.meta.pageTransition = { name: 'page-right' };
  // }
});
