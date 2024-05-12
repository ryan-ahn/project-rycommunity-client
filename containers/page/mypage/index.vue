<template>
  <section
    v-if="isLoggedIn && userDetail"
    class="page-wrapper"
  >
    <div class="profile-box">
      <img
        :src="userDetail.profileImage"
        alt="profile"
      >
      <p>{{ userDetail.name + '님,\n안녕하세요!' }}</p>
    </div>
    <AtomsAreaLine/>
    <div class="tab-wrapper">
      <button
        :class="query === 'pop' ? 'active' : ''"
        @click="onClickGetPopAct"
      >
        <div>{{ popCount }}</div>
        <p>{{ popText }}</p>
      </button>
      <button
        :class="query === 'lab' ? 'active' : ''"
        @click="onClickGetLabAct"
      >
        <div>{{ labCount }}</div>
        <p>{{ labText }}</p>
      </button>
    </div>
    <OrganismItemInMypageRecommendCard
      v-if="query === 'pop' && ongoingPopList && ongoingPopList?.length !== 0 && ongoingList && ongoingList?.length === 0"
      :header="recommendHeader"
      :thumbnail="ongoingPopList && ongoingPopList[0]?.popInfo.thumbnail"
      :category="recommendCategory"
      :title="ongoingPopList && ongoingPopList[0]?.popInfo.title"
      :onClickFunction="() => onClickGoToPopDetail(ongoingPopList[0]?.popInfo._id)"
    />
    <!-- 세미나 -->
    <div
      v-if="query === 'pop'"
      class="box-wrapper"
    >
      <div>{{ joinedPop }}</div>
      <OrganismListInMyPagePopAct
        v-if="isLoadingPopList && ongoingList && ongoingList?.length !== 0"
        :data="ongoingList"
        :invisible="false"
        type="A"
        :onClickFunction="onClickGoToPopDetail"
      />
      <AtomsEmptyContent
        v-if="ongoingList?.length === 0"
        class="mb-40"
        :type="'empty-wrapper-custom'"
        :text="ongoingPopEmoji"
        :description="ongoingPopText"
      />
      <div>{{ finishedPop }}</div>
      <OrganismListInMyPagePopAct
        v-if="isLoadingPopList && finishedList && finishedList?.length !== 0"
        :data="finishedList"
        :invisible="true"
        type="B"
        :onClickFunction="onClickGoToPopDetail"
      />
      <AtomsEmptyContent
        v-if="finishedList?.length === 0"
        :type="'empty-wrapper-custom'"
        :text="finishedPopEmoji"
        :description="finishedPopText"
      />
    </div>
    <!-- <OrganismItemInMypageRecommendCard
      v-if="query === 'lab' && myLabList && myLabList?.length !== 0 && joinLabList && joinLabList?.length !== 0"
      header="지금 모집중인 LAB이에요!"
      :thumbnail="list && list[0]?.labInfo.thumbnail"
      :title="list && list[0]?.labInfo.name"
      category="중분류 카테고리"
      :onClickFuntion="onClickGoToLabDetail"
    /> -->

    <!-- 랩 -->

    <div
      v-if="query === 'lab'"
      class="box-wrapper"
    >
      <div>{{ createLab }}</div>
      <OrganismListInMyPageLabAct
        v-if="isLoadingLabList && myLabList && myLabList?.length !== 0"
        :data="myLabList"
        :invisible="false"
        :onClickToastHandler="onChangeToastHandler"
        :onClickFunction="onClickGoToLabDetail"
      />
      <AtomsEmptyContent
        v-if="myLabList?.length === 0"
        class="mb-40"
        :type="'empty-wrapper-custom'"
        :text="myLabEmoji"
        :description="myLabText"
      />
      <div>{{ joinedLab }}</div>
      <OrganismListInMyPageLabAct
        v-if="isLoadingLabList && joinLabList && joinLabList?.length !== 0"
        :data="joinLabList"
        :invisible="false"
        :onClickToastHandler="onChangeToastHandler"
        :onClickFunction="onClickGoToLabDetail"
      />
      <AtomsEmptyContent
        v-if="joinLabList?.length === 0"
        :type="'empty-wrapper-custom'"
        :text="joinLabEmoji"
        :description="joinLabText"
      />
    </div>
    <AtomsAreaLine/>
    <div class="signout-box">
      <button @click="onClickSignOut">
        로그아웃
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useToast } from 'vue-toastification';
import { storeToRefs } from 'pinia';
import { useScrollTop } from '@utils/useScroll';
import {
  useAuthStore,
  useMypageStore,
  useMainStore,
} from '@store/index';
import { EMPTY_CONTENT } from '@assets/data/empty';
import {
  CONTENT_MYPAGE,
  CONTENT_STACK,
} from '@assets/data/content';
import { BUTTON_SELECT } from '@assets/data/button';

// Hooks
const toast = useToast();
const route = useRoute();
const router = useRouter();
const authStore = useAuthStore();
const access = useCookie('access');
const mypageStore = useMypageStore();
const mainStore = useMainStore();

// State
const {
  ongoingList,
  // upcomingPopList,
  ongoingListCount,
  finishedList,
  finishedListCount,
  myLabList,
  myLabListCount,
  joinLabList,
  joinLabListCount,
  isLoadingLabList,
  isLoadingPopList,
} = storeToRefs(mypageStore);

const { ongoingPopList } = storeToRefs(mainStore);

const {
  isLoggedIn,
  userDetail,
} = storeToRefs(authStore);
const query = computed(() => route.query.tab);
const popCount = computed(() => ongoingListCount.value + finishedListCount.value);
const labCount = computed(() => myLabListCount.value + joinLabListCount.value);
const recommendHeader = EMPTY_CONTENT.myPage.recommendPop.header;
const recommendCategory = CONTENT_STACK.category.pop;
const ongoingPopEmoji = EMPTY_CONTENT.myPage.ongoingPop.text;
const ongoingPopText = EMPTY_CONTENT.myPage.ongoingPop.description;
const finishedPopEmoji = EMPTY_CONTENT.myPage.finishedPop.text;
const finishedPopText = EMPTY_CONTENT.myPage.finishedPop.description;
const myLabEmoji = EMPTY_CONTENT.myPage.myLab.text;
const myLabText = EMPTY_CONTENT.myPage.myLab.description;
const joinLabEmoji = EMPTY_CONTENT.myPage.joinLab.text;
const joinLabText = EMPTY_CONTENT.myPage.joinLab.description;
const joinedPop = CONTENT_MYPAGE.pop.joined;
const finishedPop = CONTENT_MYPAGE.pop.finished;
const createLab = CONTENT_MYPAGE.lab.created;
const joinedLab = CONTENT_MYPAGE.lab.joined;
const popText = BUTTON_SELECT.mypage.pop;
const labText = BUTTON_SELECT.mypage.lab;

// Function
const onClickSignOut = () => {
  if (access.value) {
    access.value = null;
    authStore.initAccess();
    router.push('/');
    toast.success('로그아웃 되었습니다.');
  }
};
// Functions
const onChangeToastHandler = () => {
  toast('신청서를 확인중이에요.');
};
const onClickGoToPopDetail = (id: string) => {
  router.push(`/popdetail/${id}/?tab=pop`);
};

const onClickGoToLabDetail = (id: string) => {
  router.push(`/labdetail/${id}/?tab=lab`);
};

const onClickGetPopAct = () => {
  mypageStore.getPopList();
  router.push('/mypage/?tab=pop');
};

const onClickGetLabAct = () => {
  mypageStore.getLabList();
  router.push('/mypage/?tab=lab');
};

onMounted(() => {
  useScrollTop();
  mypageStore.getPopList();
  mypageStore.getLabList();
  mainStore.getOngoingPopList();
});

</script>

<style lang="scss" scoped>
.page-wrapper {
  @include flexSet(flex-start, flex-start, column);
  @include boxSet(100%, auto, 0px);
}

.profile-box {
  @include flexSet(flex-start, flex-start, column);
  @include boxSet(100%, auto, 0px);
  gap: 16px;
  padding: 40px 20px;

  &>img {
    margin-right: 12px;
    @include boxSet(64px, 64px, 32px);
    object-fit: cover;
  }

  &>p {
    @include fontSet(24px, 400, 32px);
    white-space: pre-wrap;
  }
}

.title-box {
  @include boxSet(100%, auto, 0px);
  padding: 20px;
}

.background-box {
  @include flexSet(center, center, column);
  @include boxSet(100%, auto, 0px);

  &>img {
    @include boxSet(100%, auto, 0px);
  }
}

.tab-wrapper {
  @include flexSet(space-evenly, center, row);
  @include boxSet(100%, 100%, 0px);
  border-bottom: 1px solid $gray03;
  &>button {
    @include flexSet(center, center, column);
    @include boxSet(100%, 72px, 0px);
    border-bottom: 3px solid $transparent;
    & > div {
      @include fontSet(16px, 600, 24px);
      color: $black;
    }
    & > p {
      @include fontSet(16px, 400, 24px);
      color: $black;
    }
  }
  &>.active {
    border-bottom: 3px solid $black;
  }
}

.box-wrapper {
  @include flexSet(center, flex-start, column);
  @include boxSet(100%, auto, 0px);
  padding: 24px 20px;
  &>div {
    @include fontSet(14px, 500, 22px);
    color: $gray07;
  }

  &>p {
    @include fontSet(12px, 400, 20px);
    text-align: left;
  }
}
.mb-40 {
  margin-bottom: 40px;
}
.coming span {
  color: $theme01;
}

.signout-box {
  @include flexSet(center, center, row);
  @include boxSet(100%, auto, 0px);
  @include fontSet(16px, 400, 24px);
  padding: 20px 0;
  color: $gray07;
  text-decoration: underline;
}
</style>
