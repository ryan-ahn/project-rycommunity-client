<template>
  <section class="stack-wrapper">
    <article>
      <OrganismItemInPostDetailPostCard
        v-if="postDetail"
        :postId="postDetail.postInfo._id"
        :myMenu="userDetail?.userId === postDetail.authorInfo.userId"
        :body="postDetail.postInfo.body"
        :link="postDetail.postInfo.link"
        :images="postDetail.postInfo.images"
        :authorName="postDetail.authorInfo.name"
        :authorImage="postDetail.authorInfo.profileImage"
        :createAt="postDetail.postInfo.createAt"
        :likeCount="postDetail.postLikes.count"
        :likeStatus="postDetail.postLikes.myStatus"
        :commentCount="postDetail.postComments.count"
        :onClickPostLike="onClickPostLike"
        :onClickOpenModal="onClickOpenMyListModal"
        :onClickGoToLink="onClickGoToLink"
      />
      <SkeletonInPostDetailPostCard v-if="!postDetail"/>
    </article>
    <AtomsAreaLine/>
    <article class="list-box">
      <OrganismListInPostDetailComment
        v-if="postDetail"
        :data="postDetail.postComments.commentList"
        :commentCount="postDetail.postComments.count"
      />
      <SkeletonInPostDetailComment v-if="!postDetail"/>
    </article>
    <article>
      <OrganismItemInPostDetailFloatCard
        :comment="isEditing ? editedComment : comment"
        :placeholder="floatPlaceholder"
        :onKeyupFunction="onKeyUpEnter"
        :onChangeFunction="e => onChangeComment(e)"
        :onClickFunction="isEditing ? onClickEditPostComment : onClickCreatePostComment"
      />
    </article>
  </section>
</template>

<script setup lang="ts">
import { useToast } from 'vue-toastification';
import { storeToRefs } from 'pinia';
import { useScrollTop } from '@utils/useScroll';
import {
  useAuthStore,
  useLoungeStore,
  useModalStore,
  useScrollStore,
} from '@store/index';
import { TOAST_STACK } from '@assets/data/toast';
import { CONTENT_STACK } from '@assets/data/content';
// Hooks

const access = useCookie('access');
const route = useRoute();
const router = useRouter();
const toast = useToast();
const authStore = useAuthStore();
const loungeStore = useLoungeStore();
const modalStore = useModalStore();
const scrollStore = useScrollStore();
// State
const { userDetail } = storeToRefs(authStore);
const {
  postDetail,
  comment,
  isEditedComment,
  isNewlyCreatedComment,
} = storeToRefs(loungeStore);
const { isEditing } = storeToRefs(modalStore);
const { currentScrollTop } = storeToRefs(scrollStore);

// Variable
const floatPlaceholder = CONTENT_STACK.postDetail.float.placeholder;
const editedComment = computed(() => postDetail.value?.postComments.commentList?.filter((item) => item._id === modalStore.commentId)[0].comment as string);
// Functions
const onClickPostLike = async () => {
  if (!access.value) {
    router.push('/login');
  }
  if (postDetail.value) {
    await loungeStore.postLoungePostLike({
      postId: postDetail.value.postInfo._id,
    });
    await loungeStore.getLoungePostDetail({
      postId: postDetail.value.postInfo._id,
    });
  }
};
const onClickCreatePostComment = async () => {
  if (!access.value) {
    router.push('/login');
  }
  if (!comment.value) {
    toast(TOAST_STACK.postDetail.emptyComment);
  }
  if (access.value && comment.value) {
    isNewlyCreatedComment.value = false;
    await loungeStore.postLoungePostCreateComment({
      postId: route.params.id,
      comment: comment.value,
    });
    await loungeStore.getLoungePostDetail({
      postId: route.params.id,
    });
    comment.value = '';
    isNewlyCreatedComment.value = true;
  }
};
const onClickEditPostComment = async () => {
  isNewlyCreatedComment.value = false;
  if (!access.value) {
    router.push('/login');
  }
  if (!comment.value) {
    toast(TOAST_STACK.postDetail.emptyComment);
  }
  if (access.value && comment.value) {
    isEditedComment.value = false;
    await loungeStore.editLoungePostComment({
      commentId: modalStore.commentId,
      comment: comment.value,
    });
    isEditing.value = false;
    await loungeStore.getLoungePostDetail({
      postId: route.params.id,
    });
    comment.value = '';
    isEditedComment.value = true;
  }
};
const onChangeComment = (e: any) => {
  comment.value = e.target.value;
};
const onKeyUpEnter = () => {
  if (!access.value && !isEditing.value) {
    router.push('/login');
  }
  if (isEditing.value === true) {
    onClickEditPostComment();
    comment.value = '';
  }
  if (isEditing.value === false) {
    onClickCreatePostComment();
    comment.value = '';
  }
};
const onClickOpenMyListModal = (id: string) => {
  modalStore.setOpenModal('loungePost');
  modalStore.setPostId(id);
};
const onClickGoToLink = (link: string) => {
  window.open(link, '_black');
};
// Cycle
onMounted(() => {
  useScrollTop();
  loungeStore.getLoungePostDetail({
    postId: route.params.id,
  });
  isNewlyCreatedComment.value = false;
  isEditedComment.value = false;
});
</script>

<style lang="scss" scoped>
.stack-wrapper {
  @include boxSet(100%, auto, 0px);
  padding-top: 55px;
}
.list-box {
  padding-bottom: 60px;
}
</style>
