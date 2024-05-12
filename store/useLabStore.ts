import { useToast } from 'vue-toastification';
import { ref } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';
import { useModalStore } from '@store/index';
import {
  TGetJoinLabDetailReq,
  TGetLabListReq,
  TGetLabDetailReq,
  TPostLabCreateReq,
  TPostLabLikeReq,
  TPostMemberJoinReq,
  TPostMemberListReq,
  TPostMemberDetailReq,
  TPatchApproveStatusReq,
  TPatchRecruitStatus,
} from '@interface/message';
import {
  ICombineJoinLabDetailData,
  ILabDetailData,
  ILabElementData,
  ILabMemberItemData,
} from '@interface/data';
import { TOAST_COMMON } from '@assets/data/toast';

const useLabStore = defineStore('lab', () => {
  // Hooks
  const toast = useToast();
  const router = useRouter();
  const config = useRuntimeConfig();
  const modalStore = useModalStore();
  // State
  const count = ref<number>(0);
  const list = ref<ILabElementData[] | null>(null);
  const detail = ref<ILabDetailData | null>(null);
  const labTitle = ref<string | null>(null);
  const joinDetail = ref<ICombineJoinLabDetailData | null>(null);
  const memberList = ref<ILabMemberItemData[] | null>(null);
  const memberStatus = ref<number | null>(null);
  const recruitStatus = ref<boolean>(false);
  const memberDetail = ref<ILabMemberItemData | null>(null);
  const firstMeet = ref();
  const startDate = ref();
  // Set State
  const setLabTitle = (input: string) => {
    labTitle.value = input;
  };
  const setMemberList = (input: ILabMemberItemData[]) => {
    memberList.value = input;
  };
  const setMemberDetail = (input: ILabMemberItemData) => {
    memberDetail.value = input;
  };
  // Async State
  const isLoadingList = ref(false);
  const isLoadingDetail = ref(false);
  const isLoadingLike = ref(false);
  const isLoadingCreateLab = ref(false);
  const isLoadingJoinLab = ref(false);
  const isLoadingMemberJoin = ref(false);
  const isLoadingMemberList = ref(false);
  const isLoadingMemberDetail = ref(false);

  // Data Fetch
  const getLabList = async (payload: TGetLabListReq) => {
    isLoadingList.value = true;
    try {
      const response = await axios.get(`${config.public.API_HOST}/lab/list/?offset=${payload.offset}&limit=${payload.limit}&tab=${payload.tab}`, {
        headers: addRequestHeader(),
      });
      const init = payload.init;
      if (!init && list.value !== null) {
        const copiedList = [...list.value];
        const concatList = copiedList.concat(response.data.data.labList);
        const compareList = copiedList.length === concatList.length;
        list.value = concatList;
        isLoadingList.value = false;
        if (compareList) {
          payload.event.complete();
        }
        if (!compareList) {
          payload.event.loaded();
        }
      }
      if (init && response) {
        list.value = response.data.data.labList;
        count.value = response.data.data.count;
        isLoadingList.value = false;
      }
    } catch (e) {
      isLoadingList.value = false;
      throw new Error(e as never);
    }
  };

  const getLabDetail = async (payload: TGetLabDetailReq) => {
    isLoadingDetail.value = true;
    try {
      const response = await axios.get(
        `${config.public.API_HOST}/lab/detail/${payload.labId}`,
        {
          headers: addRequestHeader(),
        },
      );
      if (response) {
        isLoadingDetail.value = false;
        detail.value = response.data.data.labDetail;
        recruitStatus.value = response.data.labDetail?.periodStatus?.recruitStatus;
      }
    } catch (e) {
      isLoadingDetail.value = false;
      throw new Error(e as never);
    }
  };

  const postLabLike = async (payload: TPostLabLikeReq) => {
    isLoadingLike.value = true;
    try {
      const response = await axios.post(
        `${config.public.API_HOST}/lab/like`,
        payload,
        {
          headers: addRequestHeader(),
        },
      );
      if (response) {
        isLoadingLike.value = false;
      }
    } catch (e) {
      isLoadingLike.value = false;
      throw new Error(e as never);
    }
  };

  const postLabCreate = async (payload: TPostLabCreateReq) => {
    isLoadingCreateLab.value = true;
    try {
      const response = await axios.post(
        `${config.public.API_HOST}/lab/create`,
        payload,
        {
          headers: addRequestHeader(),
        },
      );
      if (response) {
        isLoadingCreateLab.value = false;
        modalStore.setOpenModal('createLab');
      }
    } catch (e) {
      isLoadingCreateLab.value = false;
      toast(TOAST_COMMON.error[404]);
      throw new Error(e as never);
    }
  };

  const getJoinLabDetail = async (payload: TGetJoinLabDetailReq) => {
    isLoadingJoinLab.value = true;
    try {
      const response = await axios.get(
        `${config.public.API_HOST}/lab/detail/join/${payload.labId}`,
        {
          headers: addRequestHeader(),
        },
      );
      if (response) {
        isLoadingJoinLab.value = false;
        joinDetail.value = response.data.data.joinLabDetail;
      }
    } catch (e) {
      isLoadingJoinLab.value = false;
      toast(TOAST_COMMON.error[404]);
      throw new Error(e as never);
    }
  };

  const postMemberJoin = async (payload: TPostMemberJoinReq) => {
    isLoadingMemberJoin.value = true;
    try {
      const response = await axios.post(
        `${config.public.API_HOST}/lab/create/member/join`,
        payload,
        {
          headers: addRequestHeader(),
        },
      );
      if (response) {
        isLoadingMemberJoin.value = false;
        modalStore.setOpenModal('joinLab');
      }
    } catch (e) {
      isLoadingMemberJoin.value = false;
      toast(TOAST_COMMON.error[404]);
      throw new Error(e as never);
    }
  };

  const postMemberList = async (payload: TPostMemberListReq) => {
    isLoadingMemberList.value = true;
    try {
      const response = await axios.post(
        `${config.public.API_HOST}/lab/list/member`,
        payload,
        {
          headers: addRequestHeader(),
        },
      );
      if (response) {
        isLoadingMemberList.value = false;
        memberList.value = response.data.data.labMembers;
      }
    } catch (e) {
      isLoadingMemberList.value = false;
      toast(TOAST_COMMON.error[404]);
      throw new Error(e as never);
    }
  };

  const postMemberDetail = async (payload: TPostMemberDetailReq) => {
    isLoadingMemberDetail.value = true;
    try {
      const response = await axios.post(
        `${config.public.API_HOST}/lab/detail/member`,
        payload,
        {
          headers: addRequestHeader(),
        },
      );
      if (response) {
        memberDetail.value = response.data.data.memberDetail;
        isLoadingMemberDetail.value = false;
      }
    } catch (e) {
      isLoadingMemberDetail.value = false;
      toast(TOAST_COMMON.error[404]);
      throw new Error(e as never);
    }
  };

  const patchMemberStatus = async (payload: TPatchApproveStatusReq) => {
    try {
      const response = await axios.patch(
        `${config.public.API_HOST}/lab/update/member/confirm`,
        payload,
        {
          headers: addRequestHeader(),
        },
      );
      if (response) {
        memberStatus.value = response.data.status;
        if (payload.userGrade === 1) {
          toast('승인이 취소되었습니다.');
        }
        if (payload.userGrade === 2) {
          toast('승인 되었습니다.');
        }
      }
    } catch (e) {
      throw new Error(e as never);
    }
  };

  const patchRecruitStatus = async (payload: TPatchRecruitStatus) => {
    try {
      const response = await axios.patch(
        `${config.public.API_HOST}/lab/update/deadline`,
        payload,
        {
          headers: addRequestHeader(),
        },
      );
      // if (response) {
      //   recruitStatus.value = response.data.status;
      // }
    } catch (e) {
      throw new Error(e as never);
    }
  };

  const initLabList = () => {
    list.value = null;
  };

  const initLabDetail = () => {
    detail.value = null;
  };

  const initLabMemberList = () => {
    memberList.value = null;
  };

  const initMemberList = () => {
    memberList.value = null;
  };

  const initMemberDetail = () => {
    joinDetail.value = null;
  };

  return {
    count,
    list,
    detail,
    labTitle,
    joinDetail,
    memberList,
    memberDetail,
    memberStatus,
    recruitStatus,
    isLoadingList,
    isLoadingDetail,
    isLoadingMemberDetail,
    firstMeet,
    startDate,
    setLabTitle,
    setMemberList,
    setMemberDetail,
    getLabList,
    getLabDetail,
    postLabLike,
    postLabCreate,
    getJoinLabDetail,
    postMemberJoin,
    postMemberList,
    postMemberDetail,
    patchMemberStatus,
    patchRecruitStatus,
    initLabList,
    initLabDetail,
    initLabMemberList,
    initMemberList,
    initMemberDetail,
  };
});

export default useLabStore;
