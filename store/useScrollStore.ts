import { ref } from 'vue';
import { defineStore } from 'pinia';

const useScrollStore = defineStore('scroll', () => {
  // State
  const currentScrollTop = ref<number>(0);
  const { isMobileOrTablet } = useDevice();

  // Set State
  const setCurrentScrollTop = (number: number) => {
    currentScrollTop.value = number;
    if (isMobileOrTablet) {
      currentScrollTop.value = window.scrollY;
    }
  };
  // Init
  const initCurrentScrollTop = () => {
    currentScrollTop.value = 0;
  };

  return {
    currentScrollTop,
    setCurrentScrollTop,
    initCurrentScrollTop,
  };
});

export default useScrollStore;
