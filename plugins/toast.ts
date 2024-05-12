import Toast, { POSITION } from 'vue-toastification';
import 'vue-toastification/dist/index.css';

export default defineNuxtPlugin((nuxtApp) => {
  const { isMobileOrTablet } = useDevice();
  nuxtApp.vueApp.use(Toast, {
    position: POSITION.TOP_CENTER,
    hideProgressBar: true,
    closeButton: false,
    icon: false,
    timeout: 2000,
    toastClassName: isMobileOrTablet
      ? 'mobile-toast-container'
      : 'desktop-toast-container',
    bodyClassName: 'toast-content-box',
    transition: {
      enter: 'toast-enter',
      leave: 'toast-leave',
    },
  });
});
