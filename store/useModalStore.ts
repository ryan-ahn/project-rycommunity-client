import { ref } from 'vue';
import { defineStore } from 'pinia';
import { ICategoryModel } from '@interface/model';
import { IModalListData } from '@interface/data';

const useModalStore = defineStore('modal', () => {
  // State
  const isOpen = ref<boolean>(false);
  const isEditing = ref<boolean>(false);
  const modalType = ref<string>('default');
  const headerTitle = ref<string | null>(null);
  const category = ref<ICategoryModel | null>(null);
  const period = ref<IModalListData | null>(null);
  const week = ref<IModalListData | null>(null);
  const startTime = ref<IModalListData | null>(null);
  const endTime = ref<string>('');
  const place = ref<IModalListData | null>(null);
  const postId = ref<string>('');
  const commentId = ref<string>('');
  const know = ref<IModalListData | null>(null);
  const knowEtc = ref<string>('');
  const link = ref<string>('');
  const linkTitle = ref<string>('');
  // Set State
  const setOpenModal = (modal: string) => {
    isOpen.value = true;
    modalType.value = modal;
  };

  const setCloseModal = () => {
    isOpen.value = false;
  };

  const setHeaderTitle = (payload: string) => {
    headerTitle.value = payload;
  };

  const setCategoryData = (object: ICategoryModel) => {
    category.value = object;
  };

  const setPeriodData = (payload: IModalListData) => {
    period.value = payload;
  };

  const setWeekData = (payload: IModalListData) => {
    week.value = payload;
  };

  const setStartTimeData = (payload: IModalListData) => {
    startTime.value = payload;
  };

  const setEndTimeData = (payload: string) => {
    endTime.value = payload;
  };

  const setPlaceData = (payload: IModalListData) => {
    place.value = payload;
  };

  const setPostId = (payload: string) => {
    postId.value = payload;
  };

  const setCommentId = (payload: string) => {
    commentId.value = payload;
  };

  const setKnow = (payload: IModalListData) => {
    know.value = payload;
  };

  const setKnowEtc = (payload: string) => {
    knowEtc.value = payload;
  };

  const setLinkShare = (payload: string) => {
    link.value = payload;
  };

  const setLinkTitleShare = (payload: string) => {
    linkTitle.value = payload;
  };

  const initCreateLab = () => {
    category.value = null;
    period.value = null;
    week.value = null;
    startTime.value = null;
    endTime.value = '';
    place.value = null;
  };

  const initTime = () => {
    startTime.value = null;
    endTime.value = '';
  };

  const initLink = () => {
    link.value = '';
    linkTitle.value = '';
  };

  return {
    isOpen,
    isEditing,
    modalType,
    category,
    period,
    week,
    startTime,
    endTime,
    place,
    postId,
    commentId,
    know,
    knowEtc,
    link,
    linkTitle,
    setOpenModal,
    setCloseModal,
    setHeaderTitle,
    setCategoryData,
    setPeriodData,
    setWeekData,
    setStartTimeData,
    setEndTimeData,
    setPlaceData,
    setPostId,
    setCommentId,
    setKnow,
    setKnowEtc,
    setLinkShare,
    setLinkTitleShare,
    initCreateLab,
    initTime,
    initLink,
  };
});

export default useModalStore;
