import { useToast } from 'vue-toastification';
import { ref } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';
import { useModalStore } from '@store/index';
import {
  ICombineBannerModel,
  ICategoryModel,
  ILabModel,
} from '@interface/model';
import {
  TGetCheckPopMemberReq,
  TGetEventDetailReq,
  TGetJoinPopDetailReq,
  TGetPopDetailReq,
  TGetFinishedPopListReq,
  TPostJoinPopMemberReq,
  TPostCheckQrDetailReq,
} from '@interface/message';
import {
  IJoinPopData,
  IPopItemData,
  IPostRecommendItemData,
} from '@interface/data';
import {
  TOAST_COMMON,
  TOAST_STORE,
} from '@assets/data/toast';

const useMainStore = defineStore('main', () => {
  // Hooks
  const toast = useToast();
  const router = useRouter();
  const config = useRuntimeConfig();
  const modalStore = useModalStore();
  const route = useRoute();
  // State
  const finishedPopCount = ref<number>(0);
  const bannerList = ref<ICombineBannerModel[] | null>(null);
  const eventDetail = ref<ICombineBannerModel | null>(null);
  const ongoingPopList = ref<IPopItemData[] | null>(null);
  const finishedPopList = ref<IPopItemData[] | null>(null);
  const popDetail = ref<IPopItemData | null>(null);
  const isCheckPopMember = ref<boolean>(false);
  const categoryList = ref<ICategoryModel[] | null>(null);
  const labRecommendList = ref<ILabModel[] | null>(null);
  const postRecommendList = ref<IPostRecommendItemData[] | null>(null);
  const joinPopDetail = ref<IJoinPopData | null>(null);
  // Async State
  const isLoadingBannerList = ref(false);
  const isLoadingEventDetail = ref(false);
  const isLoadingPopList = ref(false);
  const isLoadingPopDetail = ref(false);
  const isLoadingCategoryList = ref(false);
  const isLoadingLabRecommendList = ref(false);
  const isLoadingPostRecommendList = ref(false);
  const isLoadingJoinPopDetail = ref(false);
  const isLoadingJoinPopMember = ref(false);
  const isLoadingCheckPopMember = ref(false);
  const isLoadingCheckQrDetail = ref(false);
  // Data Fetch
  const getOngoingPopList = async () => {
    isLoadingPopList.value = true;
    try {
      const response = await axios.get(
        `${config.public.API_HOST}/main/list/pop/ongoing`,
        {
          headers: addRequestHeader(),
        },
      );
      if (response) {
        ongoingPopList.value = response.data.data.popList;
        isLoadingPopList.value = false;
      }
    } catch (e) {
      isLoadingPopList.value = false;
      toast(TOAST_COMMON.error[404]);
      throw new Error(e as never);
    }
  };

  const getFinishedPopList = async (payload: TGetFinishedPopListReq) => {
    isLoadingPopList.value = true;
    try {
      const response = await axios.get(
        `${config.public.API_HOST}/main/list/pop/finished/?offset=${payload.offset}&limit=5`,
        {
          headers: addRequestHeader(),
        },
      );
      if (response) {
        if (finishedPopList.value !== null) { // 더보기 로드
          finishedPopList.value = [
            ...finishedPopList.value,
            ...response.data.data.popList,
          ];
          isLoadingPopList.value = false;
        }
        if (finishedPopList.value === null) { // 처음 로드
          finishedPopCount.value = response.data.data.count;
          finishedPopList.value = response.data.data.popList;
          isLoadingPopList.value = false;
        }
      }
    } catch (e) {
      isLoadingPopList.value = false;
      toast(TOAST_COMMON.error[404]);
      throw new Error(e as never);
    }
  };

  const getPopDetail = async (payload: TGetPopDetailReq) => {
    isLoadingPopDetail.value = true;
    try {
      const response = await axios.get(
        `${config.public.API_HOST}/main/detail/pop/${payload.popId}`,
        {
          headers: addRequestHeader(),
        },
      );
      if (response) {
        isLoadingPopDetail.value = false;
        popDetail.value = response.data.data.popDetail;
      }
    } catch (e) {
      isLoadingPopDetail.value = false;
      toast(TOAST_COMMON.error[404]);
      throw new Error(e as never);
    }
  };

  const getCheckPopMember = async (payload: TGetCheckPopMemberReq) => {
    isLoadingCheckPopMember.value = true;
    try {
      const response = await axios.get(
        `${config.public.API_HOST}/main/check/joinpop/${payload.popId}`,
        {
          headers: addRequestHeader(),
        },
      );
      if (response) {
        isLoadingCheckPopMember.value = false;
        isCheckPopMember.value = response.data.data.apply;
      }
    } catch (e) {
      isLoadingCheckPopMember.value = false;
      toast(TOAST_COMMON.error[404]);
      throw new Error(e as never);
    }
  };

  const getLabRecommendList = async () => {
    isLoadingLabRecommendList.value = true;
    try {
      const response = await axios.get(
        `${config.public.API_HOST}/main/list/lab/recommend`,
      );
      if (response) {
        isLoadingLabRecommendList.value = false;
        labRecommendList.value = response.data.data.labRecommendList;
      }
    } catch (e) {
      isLoadingLabRecommendList.value = false;
      toast(TOAST_COMMON.error[404]);
      throw new Error(e as never);
    }
  };

  const getPostRecommendList = async () => {
    isLoadingPostRecommendList.value = true;
    try {
      const response = await axios.get(
        `${config.public.API_HOST}/main/list/post/recommend`,
      );
      if (response) {
        isLoadingPostRecommendList.value = false;
        postRecommendList.value = response.data.data.postRecommendList;
      }
    } catch (e) {
      isLoadingPostRecommendList.value = false;
      toast(TOAST_COMMON.error[404]);
      throw new Error(e as never);
    }
  };

  const getCategoryList = async () => {
    isLoadingCategoryList.value = true;
    try {
      const response = await axios.get(
        `${config.public.API_HOST}/main/list/category`,
        {
          headers: addRequestHeader(),
        },
      );
      if (response) {
        isLoadingCategoryList.value = false;
        categoryList.value = response.data.data.categoryList;
      }
    } catch (e) {
      isLoadingCategoryList.value = false;
      toast(TOAST_COMMON.error[404]);
      throw new Error(e as never);
    }
  };

  const getBannerList = async () => {
    isLoadingBannerList.value = true;
    try {
      const response = await axios.get(
        `${config.public.API_HOST}/main/list/banner`,
        {
          headers: addRequestHeader(),
        },
      );
      if (response) {
        isLoadingBannerList.value = false;
        bannerList.value = response.data.data.bannerList;
      }
    } catch (e) {
      isLoadingBannerList.value = false;
      toast(TOAST_COMMON.error[404]);
      throw new Error(e as never);
    }
  };

  const getEventDetail = async (payload: TGetEventDetailReq) => {
    isLoadingEventDetail.value = true;
    try {
      const response = await axios.get(
        `${config.public.API_HOST}/main/detail/event/${payload.eventId}`,
        {
          headers: addRequestHeader(),
        },
      );
      if (response) {
        isLoadingEventDetail.value = false;
        eventDetail.value = response.data.data.eventDetail;
      }
    } catch (e) {
      isLoadingEventDetail.value = false;
      toast(TOAST_COMMON.error[404]);
      throw new Error(e as never);
    }
  };

  const getJoinPopDetail = async (payload: TGetJoinPopDetailReq) => {
    isLoadingJoinPopDetail.value = true;
    try {
      const response = await axios.get(
        `${config.public.API_HOST}/main/detail/joinpop/${payload.popId}`,
        {
          headers: addRequestHeader(),
        },
      );
      if (response) {
        isLoadingJoinPopDetail.value = false;
        joinPopDetail.value = response.data.data.joinPopDetail;
      }
    } catch (e) {
      isLoadingJoinPopDetail.value = false;
      toast(TOAST_COMMON.error[404]);
      throw new Error(e as never);
    }
  };

  const postJoinPopMember = async (payload: TPostJoinPopMemberReq) => {
    isLoadingJoinPopMember.value = true;
    try {
      const response = await axios.post(
        `${config.public.API_HOST}/main/create/joinpop`,
        payload,
        {
          headers: addRequestHeader(),
        },
      );
      if (response) {
        isLoadingJoinPopMember.value = false;
        //   modalStore.setOpenModal('joinPop');
        router.push(`/complete/joinpop/${payload.popId}`);
      }
    } catch (e) {
      isLoadingJoinPopMember.value = false;
      toast(TOAST_COMMON.error[404]);
      throw new Error(e as never);
    }
  };

  const postCheckQrDetail = async (payload: TPostCheckQrDetailReq) => {
    isLoadingCheckQrDetail.value = true;
    try {
      const response = await axios.post(
        `${config.public.API_HOST}/common/detail/qr`,
        payload,
        {
          headers: addRequestHeader(),
        },
      );
      if (response) {
        isLoadingCheckQrDetail.value = false;
      }
    } catch (e) {
      isLoadingCheckQrDetail.value = false;
      router.push('/');
      toast(TOAST_STORE.main.checkQrDetail);
      throw new Error(e as never);
    }
  };

  const initPopDetail = () => {
    popDetail.value = null;
  };

  return {
    bannerList,
    eventDetail,
    finishedPopCount,
    ongoingPopList,
    finishedPopList,
    popDetail,
    isCheckPopMember,
    categoryList,
    labRecommendList,
    postRecommendList,
    joinPopDetail,
    getOngoingPopList,
    getFinishedPopList,
    getPopDetail,
    getCheckPopMember,
    getCategoryList,
    getLabRecommendList,
    getPostRecommendList,
    getBannerList,
    getEventDetail,
    getJoinPopDetail,
    postJoinPopMember,
    postCheckQrDetail,
    initPopDetail,
  };
});

export default useMainStore;
