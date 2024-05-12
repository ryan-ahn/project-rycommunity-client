import { ref } from 'vue';
import {
  defineStore,
  storeToRefs,
} from 'pinia';
import useScrollStore from '@store/useScrollStore';

const useStackStore = defineStore('stack', () => {
  // Store
  const scrollStore = useScrollStore();
  const { currentScrollTop } = storeToRefs(scrollStore);
  // State
  const stackHistory = ref(['/']);
  const scrollPositions = ref<ScrollPositions>({});

  // Interface scrollPositions
  interface ScrollPositions {
    [key: string]: number;
  }

  const setStackHistory = (path: string, paths: string[]) => {
    const newHistory = pushHistory(path, paths);
    if (path !== paths[0]) {
      stackHistory.value = newHistory;
    }
    scrollPositions.value['/lounge'] = currentScrollTop.value;
  };

  // const scrollRouter = createRouter({
  //   history: 'history',
  //   setStackHistory,
  //   scrollBehavior: (to: any, from: any, savedPosition: any) => {
  //     if (savedPosition) {
  //       return savedPosition;
  //     }
  //     return {
  //       x: 0, y: 0,
  //     };
  //   },
  // });

  return {
    stackHistory,
    setStackHistory,
    scrollPositions,
  };
});

export default useStackStore;
