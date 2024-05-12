import { useRoute } from 'vue-router';
import { useScrollStore } from '@store/index';
import {
  TPageOrStackAlias,
  TScrollBehaviorAlias,
} from '@interface/alias';

export const useScrollTop = () => {
  document.getElementById('scroll')?.scrollTo(0, 0);
};

export const trackCurrentScroll = () => {
  const route = useRoute();
  const scrollStore = useScrollStore();
  const { isMobileOrTablet } = useDevice();
  const { setCurrentScrollTop } = scrollStore;
  const scrollElement: HTMLElement | null = document.getElementById('scroll');
  const setDocumentScroll = (e: Event) => {
    e.preventDefault();
    const { scrollTop } = e.target as HTMLElement;
    if (validateSplitPath(route.path) !== 'postdetail') {
      setCurrentScrollTop(scrollTop);
    }
  };
  const setWindowScroll = () => {
    if (validateSplitPath(route.path) !== 'postdetail') {
      setCurrentScrollTop(window.scrollY);
    }
  };
  if (scrollElement !== null && !isMobileOrTablet) {
    scrollElement.addEventListener('scroll', setDocumentScroll);
  }
  if (isMobileOrTablet) {
    window.addEventListener('scroll', setWindowScroll);
  }
};

export const useScrollTo = (
  top: string,
  type: TPageOrStackAlias,
  behavior: TScrollBehaviorAlias,
) => {
  const { isMobileOrTablet } = useDevice();
  let scrollElement: HTMLElement | null = null;
  const targetElement: HTMLElement | null = document.getElementById(top);
  const offsetTop = targetElement?.offsetTop;
  if (window && isMobileOrTablet && offsetTop) {
    window.scrollTo({
      left: 0,
      top: type === 'page' ? offsetTop : offsetTop - 55,
      behavior,
    });
  }
  scrollElement = document.getElementById('scroll');
  if (!isMobileOrTablet && scrollElement && offsetTop) {
    scrollElement.scrollTo({
      left: 0,
      top: type === 'page' ? offsetTop : offsetTop - 55,
      behavior,
    });
  }
};

// export const useScrollHeight = () => {
//   let currentHeight = 0;
//   const scrollElement: HTMLElement | null = document.getElementById('scroll');
//   const { isMobileOrTablet } = useDevice();
//   const setWindowHeight = () => {
//     currentHeight = window.innerHeight;
//   };
//   const setDocumentHeight = (e: Event) => {
//     const { scrollHeight } = e.target as HTMLElement;
//     currentHeight = scrollHeight;
//   };
//   if (isMobileOrTablet) {
//     window.addEventListener('scroll', setWindowHeight);
//   }
//   if (!isMobileOrTablet && scrollElement !== null) {
//     scrollElement.addEventListener('scroll', setDocumentHeight);
//   }
//   return currentHeight;
// };
