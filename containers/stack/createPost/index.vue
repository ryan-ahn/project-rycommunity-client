<template>
  <section class="stack-wrapper">
    <div class="content-box">
      <div class="first-article-box">
        <AtomsInputAutosize
          ref="textArea"
          :value="post"
          :height="textBoxHeight"
          :placeholder="textBoxPlaceholder"
          :maxLength="textBoxMaxLength"
          :minLength="textBoxMinLength"
          :onInputFunction="onChangePost"
        />
      </div>
      <div class="second-article-box">
        <OrganismItemInCreatePostLinkCard
          :url="link"
          :crawlingUrl="crawlingUrl"
          :isLoading="isLoadingPostCrawling"
          :placeholder="linkBoxPlaceholder"
          :buttonText="linkBoxButtonText"
          :onInputFunction="onChangeUrl"
          :onClickFunction="onClickCrawling"
          :onClickGoToLink="onClickGoToLink"
          :onClickInitPostLink="initCreatePostLink"
        />
      </div>
      <div class="third-article-box">
        <OrganismItemInCreatePostImageCard
          :count="imageList.length + editImageList.length"
          :imageList="imageList"
          :editImageList="editImageList"
          :onClickAddImage="onClickAddImage"
          :onClickRemoveImage="onClickRemoveImage"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useToast } from 'vue-toastification';
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import {
  useAuthStore,
  useLoungeStore,
} from '@store/index';
import { INPUT_AUTO } from '@assets/data/input';
import { CONTENT_STACK } from '@assets/data/content';
// Hooks
const route = useRoute();
const toast = useToast();
const authStore = useAuthStore();
const loungeStore = useLoungeStore();
const {
  imageList,
  editImageList,
  isLoadingPostCrawling,
  crawlingUrl,
  post,
  postDetail,
  link,
} = storeToRefs(loungeStore);
// State
const { userDetail } = storeToRefs(authStore);
const textBoxHeight = INPUT_AUTO.createPost.post.height;
const textBoxMaxLength = INPUT_AUTO.createPost.post.maxLength;
const textBoxMinLength = INPUT_AUTO.createPost.post.minLength;
const textBoxPlaceholder = INPUT_AUTO.createPost.post.placeholder;
const linkBoxPlaceholder = CONTENT_STACK.createPost.link.placeholder;
const linkBoxButtonText = CONTENT_STACK.createPost.link.buttonText;
// Function
const onChangePost = (e: any) => {
  loungeStore.setPost(e);
};
const onChangeUrl = (e: any) => {
  loungeStore.setLink(e);
};
const onClickCrawling = async () => {
  if (link.value) {
    await loungeStore.postLoungePostCrawling({
      url: link.value,
    });
  }
};
const onClickAddImage = (e: any) => {
  const files = e.target.files;
  if ([...files].length + imageList.value.length + editImageList.value.length >= 6) {
    toast.success('사진은 5개까지만 첨부할 수 있습니다.');
  }
  if ([...files].length + imageList.value.length + editImageList.value.length < 6) {
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (!file.type.startsWith('image/')) {
        toast.success('이미지 파일만 업로드가 가능합니다.');
      }
      if (file.type.startsWith('image/')) {
        const image = {
          file,
          url: URL.createObjectURL(file),
        };
        imageList.value.push(image);
      }
    }
  }
};
const onClickRemoveImage = (index: number, type: string) => {
  switch (type) {
    case 'preview':
      imageList.value.splice(index, 1);
      break;
    case 'edit':
      editImageList.value.splice(index, 1);
      break;
    default:
      break;
  }
};

const initCreatePostLink = () => {
  loungeStore.initCreatePostLink();
};
const onClickGoToLink = (link: string) => {
  window.open(link, '_self');
};
// Cycle
onMounted(async () => {
  if (route.query.mode === 'edit') {
    loungeStore.getLoungePostDetail({
      postId: route.query.target,
    });
  }
});
watch(postDetail, (value) => {
  if (value) {
    loungeStore.setEditPost({
      post: value.postInfo.body,
      link: value.postInfo.link,
      images: value.postInfo.images,
    });
  }
  if (value && userDetail.value && value.authorInfo.userId !== userDetail.value.userId) {
    toast.success('접근할 수 없습니다.');
  }
});
</script>

<style lang="scss" scoped>
.stack-wrapper {
  @include boxSet(100%, 100%, 0px);
  padding-top: 55px;
}
.content-box {
  @include flexSet(center, center, column);
  @include boxSet(100%, auto, 0px);
  gap: 20px;
  padding: 20px 0;
}
.first-article-box {
  @include boxSet(100%, auto, 0px);
  padding: 0 20px;
}
.second-article-box {
  @include boxSet(100%, auto, 0px);
  padding: 0 20px;
}
.third-article-box {
  @include boxSet(100%, auto, 0px);
  padding-left: 20px;
  overflow-x: auto;
}
</style>
