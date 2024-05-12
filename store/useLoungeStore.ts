import { useToast } from 'vue-toastification';
import { ref } from 'vue';
import {
  defineStore,
  storeToRefs,
} from 'pinia';
import axios from 'axios';
import { useStackStore } from '@store/index';
import { ILinkModel } from '@interface/model';
import {
  TPostLoungePostLikeReq,
  TGetLoungePostDetailReq,
  TPostLoungePostCreateCommentReq,
  TDeleteLoungePostReq,
  TPostLoungePostDeleteCommentReq,
  TPostLoungePostCrawlingReq,
  TPostLoungePostEditCommentReq,
} from '@interface/message';
import {
  ILoungePostItemData,
  ILoungePostDetailItemData,
} from '@interface/data';
import { TOAST_STORE } from '@assets/data/toast';

const useLoungeStore = defineStore('lounge', () => {
  // Hooks
  const toast = useToast();
  const router = useRouter();
  const config = useRuntimeConfig();
  const stackStore = useStackStore();

  // Variable
  const createPostSuccess = TOAST_STORE.lounge.createPostSuccess;
  const createPostFailure = TOAST_STORE.lounge.createPostFailure;
  const deletePostSuccess = TOAST_STORE.lounge.deletePostSuccess;
  const deletePostFailure = TOAST_STORE.lounge.deletePostFailure;
  const crawlingLinkError = TOAST_STORE.lounge.crawlingLinkError;
  // State
  const { stackHistory } = storeToRefs(stackStore);
  const imageList = ref<Array<any>>([]);
  const editImageList = ref<Array<any>>([]);
  const postList = ref<ILoungePostItemData[] | null>(null);
  const postDetail = ref<ILoungePostDetailItemData | null>(null);
  const crawlingUrl = ref<ILinkModel | null>(null);
  const post = ref('');
  const link = ref('');
  const comment = ref('');
  // Async State
  const isLoadingPostList = ref(false);
  const isLoadingPostDetail = ref(false);
  const isLoadingPostPost = ref(false);
  const isLoadingPutPost = ref(false);
  const isLoadingDeletePost = ref(false);
  const isLoadingPostLike = ref(false);
  const isLoadingPostCreateComment = ref(false);
  const isLoadingPostEditComment = ref(false);
  const isLoadingPostDeleteComment = ref(false);
  const isLoadingPostCrawling = ref(false);
  const isEditedComment = ref(false);
  const isNewlyCreatedComment = ref(false);

  // Set State
  const setPost = (payload: any) => {
    post.value = payload.target.value;
  };

  const setEditPost = (payload: any) => {
    post.value = payload.post;
    link.value = payload.link ? payload.link.link : '';
    crawlingUrl.value = payload.link ? payload.link : null;
    editImageList.value = payload.images ? payload.images : [];
  };

  const setLink = (payload: any) => {
    link.value = payload.target.value;
  };

  const setComment = (payload: any) => {
    comment.value = payload.target.value;
  };

  // Date Fetch
  const getLoungePostList = async () => {
    isLoadingPostList.value = true;
    try {
      const response = await axios.get(
        `${config.public.API_HOST}/lounge/list/post`,
        {
          headers: addRequestHeader(),
        },
      );
      postList.value = response.data.data.postList;
      if (response) {
        isLoadingPostList.value = false;
      }
    } catch (e) {
      isLoadingPostList.value = false;
      throw new Error(e as never);
    }
  };

  const getLoungePostDetail = async (payload: TGetLoungePostDetailReq) => {
    isLoadingPostDetail.value = true;
    try {
      const response = await axios.get(
        `${config.public.API_HOST}/lounge/detail/post/${payload.postId}`,
        {
          headers: addRequestHeader(),
        },
      );
      postDetail.value = response.data.data.postDetail;
      if (response) {
        isLoadingPostDetail.value = false;
      }
    } catch (e) {
      isLoadingPostDetail.value = false;
      throw new Error(e as never);
    }
  };

  const postLoungePost = async () => {
    const formData = new FormData();
    for (const image of imageList.value) {
      formData.append('images', image.file);
    }
    const jsonBody = JSON.stringify({
      link: crawlingUrl.value ? {
        link: link.value,
        title: crawlingUrl.value.title,
        description: crawlingUrl.value.description,
        image: crawlingUrl.value.image,
      } : null,
    });
    formData.append('link', jsonBody);
    formData.append('body', post.value);
    isLoadingPostPost.value = true;
    try {
      const response = await axios.post(
        `${config.public.API_HOST}/lounge/create/post`,
        formData,
        {
          headers: addRequestHeader(true),
        },
      );
      if (response) {
        isLoadingPostPost.value = false;
        router.push(stackHistory.value[1]);
        toast(createPostSuccess);
      }
    } catch (e) {
      isLoadingPostPost.value = false;
      toast(createPostFailure);
      throw new Error(e as never);
    }
  };

  const putLoungePost = async () => {
    const formData = new FormData();
    for (const image of imageList.value) {
      formData.append('images', image.file);
    }
    const jsonLink = JSON.stringify({
      link: crawlingUrl.value ? {
        link: link.value,
        title: crawlingUrl.value.title,
        description: crawlingUrl.value.description,
        image: crawlingUrl.value.image,
      } : null,
    });
    const jsonImage = JSON.stringify(editImageList.value);
    formData.append('editImage', jsonImage);
    formData.append('link', jsonLink);
    formData.append('body', post.value);
    formData.append('postId', String(postDetail.value?.postInfo._id));
    isLoadingPutPost.value = true;
    try {
      const response = await axios.put(
        `${config.public.API_HOST}/lounge/update/post`,
        formData,
        {
          headers: addRequestHeader(true),
        },
      );
      if (response) {
        isLoadingPutPost.value = false;
        router.push(stackHistory.value[1]);
        toast(createPostSuccess);
      }
    } catch (e) {
      isLoadingPutPost.value = false;
      toast(createPostFailure);
      throw new Error(e as never);
    }
  };

  const deleteLoungePost = async (payload: TDeleteLoungePostReq) => {
    isLoadingDeletePost.value = true;
    try {
      const response = await axios.post(
        `${config.public.API_HOST}/lounge/delete/post`,
        payload,
        {
          headers: addRequestHeader(),
        },
      );
      if (response) {
        isLoadingDeletePost.value = false;
        toast(deletePostSuccess);
      }
    } catch (e) {
      isLoadingDeletePost.value = false;
      toast(deletePostFailure);
      throw new Error(e as never);
    }
  };

  const postLoungePostLike = async (payload: TPostLoungePostLikeReq) => {
    isLoadingPostLike.value = true;
    try {
      const response = await axios.post(
        `${config.public.API_HOST}/lounge/like/post`,
        payload,
        {
          headers: addRequestHeader(),
        },
      );
      if (response) {
        isLoadingPostLike.value = false;
      }
    } catch (e) {
      isLoadingPostLike.value = false;
      throw new Error(e as never);
    }
  };

  const postLoungePostCreateComment = async (
    payload: TPostLoungePostCreateCommentReq,
  ) => {
    isLoadingPostCreateComment.value = true;
    try {
      const response = await axios.post(
        `${config.public.API_HOST}/lounge/create/post/comment`,
        payload,
        {
          headers: addRequestHeader(),
        },
      );
      if (response) {
        isLoadingPostCreateComment.value = false;
      }
    } catch (e) {
      isLoadingPostCreateComment.value = false;
      throw new Error(e as never);
    }
  };

  const editLoungePostComment = async (
    payload: TPostLoungePostEditCommentReq,
  ) => {
    isLoadingPostEditComment.value = true;
    try {
      const response = await axios.patch(
        `${config.public.API_HOST}/lounge/update/post/comment`,
        payload,
        {
          headers: addRequestHeader(),
        },
      );
      if (response) {
        isLoadingPostEditComment.value = false;
      }
    } catch (e) {
      isLoadingPostEditComment.value = false;
      throw new Error(e as never);
    }
  };

  const deleteLoungePostComment = async (payload: TPostLoungePostDeleteCommentReq) => {
    isLoadingPostDeleteComment.value = true;
    try {
      const response = await axios.post(
        `${config.public.API_HOST}/lounge/delete/post/comment`,
        payload,
        {
          headers: addRequestHeader(),
        },
      );
      if (response) {
        isLoadingPostDeleteComment.value = false;
      }
    } catch (e) {
      isLoadingPostDeleteComment.value = false;
      throw new Error(e as never);
    }
  };

  const postLoungePostCrawling = async (
    payload: TPostLoungePostCrawlingReq,
  ) => {
    isLoadingPostCrawling.value = true;
    try {
      const response = await axios.post(
        `${config.public.API_HOST}/common/crawling/link`,
        payload,
        {
          headers: addRequestHeader(),
        },
      );
      if (response) {
        crawlingUrl.value = response.data.data.urlData;
        isLoadingPostCrawling.value = false;
      }
    } catch (e) {
      link.value = '';
      isLoadingPostCrawling.value = false;
      toast(crawlingLinkError);
      throw new Error(e as never);
    }
  };
  // Init
  const initPostDetail = () => {
    postDetail.value = null;
  };

  const initCreatePost = () => {
    post.value = '';
    link.value = '';
    crawlingUrl.value = null;
    imageList.value = [];
    editImageList.value = [];
  };

  const initCreatePostLink = () => {
    link.value = '';
    crawlingUrl.value = null;
  };

  return {
    imageList,
    editImageList,
    postList,
    postDetail,
    comment,
    crawlingUrl,
    post,
    link,
    isLoadingPostCrawling,
    isLoadingPostPost,
    isLoadingPostCreateComment,
    isNewlyCreatedComment,
    isEditedComment,
    setPost,
    setEditPost,
    setLink,
    setComment,
    getLoungePostList,
    getLoungePostDetail,
    postLoungePost,
    putLoungePost,
    deleteLoungePost,
    postLoungePostLike,
    postLoungePostCreateComment,
    editLoungePostComment,
    deleteLoungePostComment,
    postLoungePostCrawling,
    initPostDetail,
    initCreatePost,
    initCreatePostLink,
  };
});

export default useLoungeStore;
