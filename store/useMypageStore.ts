import { ref } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';
import {
  IMyPopItemData,
  IMyLabItemData,
} from '@interface/data';

const useMypageStore = defineStore('mypage', () => {
  // Hooks
  const config = useRuntimeConfig();

  // State
  const ongoingList = ref<IMyPopItemData[] | null>(null);
  // const upcomingPopList = ref();
  const ongoingListCount = ref<number>(0);
  const finishedList = ref<IMyPopItemData[] | null>(null);
  const finishedListCount = ref<number>(0);
  const myLabList = ref<IMyLabItemData[] | null>(null);
  const myLabListCount = ref<number>(0);
  const joinLabList = ref<IMyLabItemData[] | null>(null);
  const joinLabListCount = ref<number>(0);
  const isLoadingPopList = ref(true);
  const isLoadingLabList = ref(false);

  // Data Fetch
  const getPopList = async () => {
    isLoadingPopList.value = true;
    try {
      const response = await axios.get(`${config.public.API_HOST}/my/list/pop`, {
        headers: addRequestHeader(),
      });
      if (response) {
        ongoingList.value = response.data.data.onGoingList.popList;
        ongoingListCount.value = response.data.data.onGoingList.count;
        finishedList.value = response.data.data.finishedList.popList;
        finishedListCount.value = response.data.data.finishedList.count;
        // upcomingPopList.value = ongoingList.value?.sort((a, b) => new Date(b.popInfo.date).getDate() - new Date(a.popInfo.date).getDate());
      }
    } catch (e) {
      isLoadingPopList.value = false;
      throw new Error(e as never);
    }
  };

  const getLabList = async () => {
    isLoadingLabList.value = true;
    try {
      const response = await axios.get(`${config.public.API_HOST}/my/list/lab`, {
        headers: addRequestHeader(),
      });
      if (response) {
        myLabList.value = response.data.data.myLabList.labList;
        myLabListCount.value = response.data.data.myLabList.count;
        joinLabList.value = response.data.data.joinLabList.labList;
        joinLabListCount.value = response.data.data.joinLabList.count;
      }
    } catch (e) {
      isLoadingLabList.value = false;
      throw new Error(e as never);
    }
  };

  return {
    ongoingList,
    // upcomingPopList,
    ongoingListCount,
    finishedList,
    finishedListCount,
    myLabList,
    myLabListCount,
    joinLabList,
    joinLabListCount,
    isLoadingPopList,
    isLoadingLabList,
    getPopList,
    getLabList,
  };
});

export default useMypageStore;
