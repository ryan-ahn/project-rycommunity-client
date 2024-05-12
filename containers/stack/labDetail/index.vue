<template>
  <section class="stack-wrapper">
    <article
      class="thumbnail-box"
      :class="isMobileOrTablet ? 'mobile-vw-wrapper' : 'desktop-wrapper'"
    >
      <OrganismItemInLabDetailThumbnailCard
        v-if="detail"
        :background="detail.labInfo.thumbnail"
      />
      <SkeletonInLabDetailThumbnailCard v-if="!detail"/>
    </article>
    <article class="article-box">
      <OrganismItemInLabDetailInfoCard
        v-if="detail"
        :recruitStatus="detail.periodStatus.recruitStatus"
        :labName="detail.labInfo.name"
        :cardTitle="
          detail.periodStatus.recruitStatus ? recruitTrueText : recruitFalseText
        "
        :cardDescription="
          detail.periodStatus.recruitStatus
            ? `${validateDate(
              detail.labInfo.startDate,
              '년월일',
            )} - ${validateDate(detail.labInfo.endDate, '월일')}`
            : `${detail.labInfo.period} ${detail.labInfo.week} 모임`
        "
        :firstBoxIcon="memberIcon"
        :firstBoxData="validateMember(detail.labInfo.members)"
        :firstBoxLabel="
          detail.periodStatus.recruitStatus
            ? recruitMemberLabel
            : activeMemberLabel
        "
        :secondBoxIcon="
          detail.periodStatus.recruitStatus ? methodIcon : timeIcon
        "
        :secondBoxData="
          detail.periodStatus.recruitStatus
            ? methodMock
            : validateCombineTime(
              detail.labInfo.startTime,
              detail.labInfo.endTime,
              '시',
            )
        "
        :secondBoxLabel="
          detail.periodStatus.recruitStatus ? methodLabel : timeLabel
        "
        :thirdBoxIcon="
          detail.periodStatus.recruitStatus ? priceIcon : placeIcon
        "
        :thirdBoxData="
          detail.periodStatus.recruitStatus
            ? validateKoreaPrice(detail.labInfo.price)
            : detail.labInfo.place
        "
        :thirdBoxLabel="
          detail.periodStatus.recruitStatus ? priceLabel : placeLabel
        "
        :infoText="infoText"
        :infoToggle="infoToggle"
        :firstMeetLabel="firstMeetLabel"
        :firstMeetData="validateDate(detail.labInfo.firstMeet, '년월일')"
        :weekIcon="weekIcon"
        :weekData="`${detail.labInfo.period} ${detail.labInfo.week}`"
        :weekLabel="weekLabel"
        :timeIcon="timeIcon"
        :timeData="
          validateCombineTime(
            detail.labInfo.startTime,
            detail.labInfo.endTime,
            '시',
          )
        "
        :timeLabel="timeLabel"
        :placeIcon="placeIcon"
        :placeData="detail.labInfo.place"
        :placeLabel="placeLabel"
        :onClickToggle="onClickToggle"
      />
      <SkeletonInLabDetailInfoCard v-if="!detail"/>
    </article>
    <article class="article-box">
      <AtomsTitleMediumCommon
        v-if="detail"
        :title="summaryTitle"
      />
      <SkeletonTitleMediumCommon v-if="!detail"/>
      <OrganismItemInLabDetailSummaryCard
        v-if="detail"
        :summaryData="detail.labInfo.summary"
        :masterThumbnail="detail.masterInfo.profileImage"
        :masterName="detail.masterInfo.name"
        :masterGrade="USER_GRADE_MEMBER[0]"
      />
      <SkeletonInLabDetailSummaryCard v-if="!detail"/>
    </article>
    <article class="article-box">
      <AtomsTitleMediumCommon
        v-if="detail"
        :title="categoryTitle"
      />
      <SkeletonTitleMediumCommon v-if="!detail"/>
      <OrganismItemInLabDetailCategoryCard
        v-if="detail"
        :categoryData="validateCategory(detail.labCategory.categoryList)"
        :categoryTagType="categoryTagType"
        :objectiveDataList="detail.labInfo.objective"
        :objectiveTagType="objectiveTagType"
      />
      <SkeletonInLabDetailCategoryCard v-if="!detail"/>
    </article>
    <article class="article-box">
      <AtomsTitleMediumCommon
        v-if="detail"
        :title="introTitle"
      />
      <SkeletonTitleMediumCommon v-if="!detail"/>
      <OrganismItemInLabDetailIntroCard
        v-if="detail"
        :introData="detail?.labInfo.introduce"
      />
      <SkeletonInLabDetailIntroCard v-if="!detail"/>
    </article>
    <article class="flex-row-center-box">
      <OrganismItemInLabDetailFloatCard
        v-if="detail"
        class="button-wrapper"
        :labId="detail.labInfo._id"
        :myStatus="detail.labMembers.myStatus"
        :likeStatus="detail.labLikes.myStatus"
        :likeCount="detail.labLikes.count"
        :recruitStatus="detail.periodStatus.recruitStatus"
        :buttonType="
          buttonText(
            detail.periodStatus.recruitStatus,
            detail.labMembers.myStatus,
          ).type
        "
        :buttonText="
          buttonText(
            detail.periodStatus.recruitStatus,
            detail.labMembers.myStatus,
          ).text
        "
        :onClickLabLike="onClickLabLike"
        :onClickGoToStack="onClickGoToStack"
      />
    </article>
  </section>
</template>

<script setup lang="ts">
import { useToast } from 'vue-toastification';
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useLabStore } from '@store/index';
import { TOAST_STACK } from '@assets/data/toast';
import { TITLE_COMMON } from '@assets/data/title';
import { USER_GRADE_MEMBER } from '@assets/data/data';
import { CONTENT_STACK } from '@assets/data/content';
import {
  BUTTON_MAIN_FILL,
  BUTTON_FUNCTION_TAG,
} from '@assets/data/button';
// Hooks
const { isMobileOrTablet } = useDevice();
const access = useCookie('access');
const toast = useToast();
const route = useRoute();
const router = useRouter();
const labStore = useLabStore();
// State
const {
  detail,
  recruitStatus,
} = storeToRefs(labStore);
const infoToggle = ref(false);
const recruitTrueText = CONTENT_STACK.labDetail.info.recruitTrue;
const recruitFalseText = CONTENT_STACK.labDetail.info.recruitFalse;
const memberIcon = CONTENT_STACK.labDetail.info.memberIcon;
const recruitMemberLabel = CONTENT_STACK.labDetail.info.recruitMember;
const activeMemberLabel = CONTENT_STACK.labDetail.info.member;
const methodIcon = CONTENT_STACK.labDetail.info.methodIcon;
const methodMock = CONTENT_STACK.labDetail.info.methodMock;
const methodLabel = CONTENT_STACK.labDetail.info.method;
const priceIcon = CONTENT_STACK.labDetail.info.priceIcon;
const priceLabel = CONTENT_STACK.labDetail.info.price;
const infoText = CONTENT_STACK.labDetail.info.infoText;
const firstMeetLabel = CONTENT_STACK.labDetail.info.firstMeet;
const weekIcon = CONTENT_STACK.labDetail.info.weekIcon;
const weekLabel = CONTENT_STACK.labDetail.info.week;
const timeIcon = CONTENT_STACK.labDetail.info.timeIcon;
const timeLabel = CONTENT_STACK.labDetail.info.time;
const placeIcon = CONTENT_STACK.labDetail.info.placeIcon;
const placeLabel = CONTENT_STACK.labDetail.info.place;
const summaryTitle = TITLE_COMMON.labDetail.summary.title;
const categoryTitle = TITLE_COMMON.labDetail.category.title;
const categoryTagType = BUTTON_FUNCTION_TAG.labDetail.category.type;
const objectiveTagType = BUTTON_FUNCTION_TAG.labDetail.objective.type;
const introTitle = TITLE_COMMON.labDetail.intro.title;
const deactiveButtonType = BUTTON_MAIN_FILL.labDetail.deactive.type;
const deactiveButtonText = BUTTON_MAIN_FILL.labDetail.deactive.text;
const myLabButtonType = BUTTON_MAIN_FILL.labDetail.myLab.type;
const myLabButtonText = BUTTON_MAIN_FILL.labDetail.myLab.text;
const standByButtonType = BUTTON_MAIN_FILL.labDetail.standBy.type;
const standByButtonText = BUTTON_MAIN_FILL.labDetail.standBy.text;
const userButtonType = BUTTON_MAIN_FILL.labDetail.user.type;
const userButtonText = BUTTON_MAIN_FILL.labDetail.user.text;
const recruitEndText = BUTTON_MAIN_FILL.labDetail.deactive.text;

// Function
const buttonText = (recruit: boolean, myStatus: number) => {
  if (!recruit && myStatus !== 0) {
    return {
      type: deactiveButtonType, text: deactiveButtonText,
    };
  }
  if (myStatus === 0) {
    return {
      type: myLabButtonType, text: myLabButtonText,
    };
  }
  if (recruit && myStatus === 1) {
    return {
      type: standByButtonType, text: standByButtonText,
    };
  }
  if (recruit && myStatus === 2) {
    return {
      type: standByButtonType, text: standByButtonText,
    };
  }
  return {
    type: userButtonType, text: userButtonText,
  };
};
const onClickGoToStack = async (myStatus: number, labId: string) => {
  if (!access.value) {
    await router.push('/login');
  }
  if (access.value && myStatus === 0) {
    await router.push(`/labmember/${labId}`);
  }
  if (access.value && myStatus === 1) {
    toast(TOAST_STACK.labDetail.labMember);
  }
  if (access.value && myStatus === 9) {
    await router.push(`/joinlab/${labId}`);
  }
};
const onClickLabLike = async (id: string) => {
  if (!access.value) {
    router.push('/login');
  }
  await labStore.postLabLike({
    labId: id,
  });
  await labStore.getLabDetail({
    labId: id,
  });
};

const onClickToggle = () => {
  infoToggle.value = !infoToggle.value;
};
// Cycle
onMounted(() => {
  labStore.getLabDetail({
    labId: route.params.id,
  });
});
</script>

<style lang="scss" scoped>
.stack-wrapper {
  @include flexSet(center, center, column);
  gap: 40px;
  padding-top: 55px;
  padding-bottom: 80px;
  @include boxSet(100%, auto, 0px);
}
.thumbnail-box {
  position: absolute;
  top: 0;
  @include boxSet(100%, auto, 0px);
}
.article-box {
  @include flexSet(center, center, column);
  @include boxSet(100%, auto, 0px);
  gap: 20px;
  padding: 0 20px;
}

</style>
