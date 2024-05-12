import { ref } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';
import { IUserModel } from '@interface/model';
import { TGetKakaoCallbackReq } from '@interface/message';

const useAuthStore = defineStore('auth', () => {
  // Hooks
  const config = useRuntimeConfig();
  const router = useRouter();
  // State
  const isLoggedIn = ref<boolean>(false);
  const userDetail = ref<IUserModel | null>(null);
  // Async State
  const isLoadingDetail = ref(false);
  const isLoadingAccess = ref(false);
  // Data Fetch
  const getKakaoCallback = async (payload: TGetKakaoCallbackReq) => {
    isLoadingDetail.value = true;
    try {
      const response = await axios.get(
        `${config.public.API_HOST}/auth/kakao/callback/${payload.code}`,
      );
      if (response) {
        userDetail.value = response.data.data.userDetail;
        setAccessToken('access', response.data.data.token.accessToken);
        isLoadingDetail.value = false;
        isLoggedIn.value = true;
        router.push('/');
      }
    } catch (e) {
      userDetail.value = null;
      isLoadingDetail.value = false;
      isLoggedIn.value = false;
      throw new Error(e as never);
    }
  };

  const getTokenAccess = async () => {
    isLoadingAccess.value = true;
    try {
      const response = await axios.get(
        `${config.public.API_HOST}/auth/token/access`,
        {
          headers: addRequestHeader(),
        },
      );
      if (response) {
        userDetail.value = response.data.data.userDetail;
        isLoadingAccess.value = false;
        isLoggedIn.value = true;
      }
    } catch (e) {
      deleteAccessToken();
      userDetail.value = null;
      isLoadingAccess.value = false;
      isLoggedIn.value = false;
      throw new Error(e as never);
    }
  };
  // Init
  const initAccess = () => {
    userDetail.value = null;
    isLoggedIn.value = false;
  };

  return {
    isLoggedIn,
    userDetail,
    isLoadingDetail,
    getKakaoCallback,
    getTokenAccess,
    initAccess,
  };
});

export default useAuthStore;
