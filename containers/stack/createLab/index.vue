<template>
  <section class="stack-wrapper">
    <article class="article-box">
      <AtomsTitleLargeRequired
        :title="introTitle"
        :required="introRequired"
      />
      <AtomsAreaMessage
        :message="stackMessage"
        :type="commonType"
      />
      <OrganismItemInCreateLabIntroCard
        :introNameType="introNameType"
        :introNamePlaceholder="introNamePlaceholder"
        :introNameMaxLength="introNameMaxLength"
        :introSummaryRows="introSummaryRows"
        :introSummaryPlaceholder="introSummaryPlaceholder"
        :introSummaryMaxLength="introSummaryMaxLength"
        :onChangeLabTitle="onChangeLabTitle"
        :onChangeLabSummary="onChangeLabSummary"
      />
    </article>
    <AtomsAreaLine/>
    <article class="article-box">
      <AtomsTitleLargeRequired
        :title="detailTitle"
        :required="detailRequired"
      />
      <OrganismItemInCreateLabDetailCard
        :detailRows="detailRows"
        :detailPlaceholder="detailPlaceholder"
        :detailMaxLength="detailMaxLength"
        :onChangeLabDetail="onChangeLabDetail"
      />
    </article>
    <AtomsAreaLine/>
    <article class="article-box">
      <AtomsTitleLargeRequired
        :title="categoryTitle"
        :required="categoryRequired"
      />
      <OrganismItemInCreateLabCategoryCard
        :categoryTitle="categoryTitle"
        :categoryRequired="categoryRequired"
        :categoryButtonText="categoryButtonText"
        :onClickFunction="onClickOpenModal"
      />
    </article>
    <AtomsAreaLine/>
    <article class="article-box">
      <AtomsTitleLargeRequired
        :title="objectiveTitle"
        :required="objectiveRequired"
      />
      <OrganismListCommonCheckList
        :menu="MENU_OBJECTIVE"
        :selectedList="labObjective"
        :onClickFunction="onClickSelectObjective"
      />
    </article>
    <AtomsAreaLine/>
    <article class="article-box">
      <AtomsTitleLargeRequired
        :title="meetingTitle"
        :required="meetingRequired"
      />
      <OrganismItemInCreateLabMeetingCard
        :meetingDateLabel="meetingDateLabel"
        :meetingDatePlaceholder="meetingDatePlaceholder"
        :meetingPeriodLabel="meetingPeriodLabel"
        :meetingPeriodPlaceholder="meetingPeriodPlaceholder"
        :meetingWeekLabel="meetingWeekLabel"
        :meetingWeekPlaceholder="meetingWeekPlaceholder"
        :meetingTimeLabel="meetingTimeLabel"
        :meetingTimePlaceholder="meetingTimePlaceholder"
        :meetingPlaceLabel="meetingPlaceLabel"
        :meetingPlacePlaceholder="meetingPlacePlaceholder"
        :onClickOpenModal="onClickOpenModal"
      />
    </article>
    <AtomsAreaLine/>
    <article class="article-box">
      <AtomsTitleLargeRequired
        :title="recruitTitle"
        :required="recruitRequired"
      />
      <OrganismItemInCreateLabRecruitCard
        :enteredQuestion="questions"
        :recruitMembersLabel="recruitMembersLabel"
        :recruitMembersPlaceholder="recruitMembersPlaceholder"
        :recruitMembersType="recruitMembersType"
        :recruitMembersMaxLength="recruitMembersMaxLength"
        :recruitMembersLengthShow="recruitMembersLengthShow"
        :recruitStartDateLabel="recruitStartDateLabel"
        :recruitStartDatePlaceholder="recruitStartDatePlaceholder"
        :recruitQuestionsLabel="recruitQuestionsLabel"
        :recruitQuestionsPlaceholder="recruitQuestionsPlaceholder"
        :recruitQuestionsType="recruitQuestionsType"
        :recruitQuestionsMaxLength="recruitQuestionsMaxLength"
        :recruitQuestionsLengthShow="recruitQuestionsLengthShow"
        :recruitQuestionButtonType="recruitQuestionButtonType"
        :recruitQuestionButtonText="recruitQuestionButtonText"
        :onChangeLabMembers="onChangeLabMembers"
        :onChangeQuestion="onChangeQuestion"
        :onClickAddQuestion="onClickAddQuestion"
        :onClickSubmit="onClickSubmit"
      />
    </article>
    <article class="button-box">
      <AtomsButtonMainFill
        :disabled="
          labTitle === ''
            || labSummary === ''
            || labDetail === ''
            || category === null
            || labObjective.length < 0
            || firstMeet === ''
            || period === null
            || week === null
            || startTime === null
            || endTime === ''
            || place === null
            || members === 0
            || !startDate
        "
        :type="submitButtonType"
        :text="submitButtonText"
        :onClickFunction="onClickSubmit"
      />
    </article>
  </section>
</template>

<script setup lang="ts">
import { useToast } from 'vue-toastification';
import { storeToRefs } from 'pinia';
import {
  useLabStore,
  useMainStore,
  useModalStore,
} from '@store/index';
import { TITLE_LARGE_REQUIRED } from '@assets/data/title';
import { MENU_OBJECTIVE } from '@assets/data/menu';
import {
  INPUT_MULTI,
  INPUT_SINGLE,
} from '@assets/data/input';
import { CONTENT_MODAL } from '@assets/data/content';
import {
  BUTTON_MAIN_FILL,
  BUTTON_SELECT,
} from '@assets/data/button';
import { AREA_MESSAGE } from '@assets/data/area';
// Hooks
const modalStore = useModalStore();
const mainStore = useMainStore();
const labStore = useLabStore();
const toast = useToast();
// Variable
const stackMessage = AREA_MESSAGE.createLab.message;
const introTitle = TITLE_LARGE_REQUIRED.createLab.intro.title;
const introRequired = TITLE_LARGE_REQUIRED.createLab.intro.required;
const introNameType = INPUT_SINGLE.createLab.title.type;
const introNamePlaceholder = INPUT_SINGLE.createLab.title.placeholder;
const introNameMaxLength = INPUT_SINGLE.createLab.title.maxLength;
const introSummaryPlaceholder = INPUT_MULTI.createLab.summary.placeholder;
const introSummaryMaxLength = INPUT_MULTI.createLab.summary.maxLength;
const introSummaryRows = INPUT_MULTI.createLab.summary.rows;
const detailTitle = TITLE_LARGE_REQUIRED.createLab.detail.title;
const detailRequired = TITLE_LARGE_REQUIRED.createLab.detail.required;
const detailPlaceholder = INPUT_MULTI.createLab.detail.placeholder;
const detailMaxLength = INPUT_MULTI.createLab.detail.maxLength;
const detailRows = INPUT_MULTI.createLab.detail.rows;
const categoryTitle = TITLE_LARGE_REQUIRED.createLab.category.title;
const categoryRequired = TITLE_LARGE_REQUIRED.createLab.category.required;
const categoryButtonText = CONTENT_MODAL.category.title;
const objectiveTitle = TITLE_LARGE_REQUIRED.createLab.objective.title;
const objectiveRequired = TITLE_LARGE_REQUIRED.createLab.objective.required;
const meetingTitle = TITLE_LARGE_REQUIRED.createLab.meeting.title;
const meetingRequired = TITLE_LARGE_REQUIRED.createLab.meeting.required;
const meetingDateLabel = BUTTON_SELECT.createLab.date.label;
const meetingDatePlaceholder = BUTTON_SELECT.createLab.date.placeholder;
const meetingPeriodLabel = BUTTON_SELECT.createLab.period.label;
const meetingPeriodPlaceholder = BUTTON_SELECT.createLab.period.placeholder;
const meetingWeekLabel = BUTTON_SELECT.createLab.week.label;
const meetingWeekPlaceholder = BUTTON_SELECT.createLab.week.placeholder;
const meetingTimeLabel = BUTTON_SELECT.createLab.time.label;
const meetingTimePlaceholder = BUTTON_SELECT.createLab.time.placeholder;
const meetingPlaceLabel = BUTTON_SELECT.createLab.place.label;
const meetingPlacePlaceholder = BUTTON_SELECT.createLab.place.placeholder;
const recruitTitle = TITLE_LARGE_REQUIRED.createLab.recruit.title;
const recruitRequired = TITLE_LARGE_REQUIRED.createLab.recruit.required;
const recruitMembersLabel = INPUT_SINGLE.createLab.members.label;
const recruitMembersPlaceholder = INPUT_SINGLE.createLab.members.placeholder;
const recruitMembersType = INPUT_SINGLE.createLab.members.type;
const recruitMembersMaxLength = INPUT_SINGLE.createLab.members.maxLength;
const recruitMembersLengthShow = INPUT_SINGLE.createLab.members.lengthShow;
const recruitStartDateLabel = BUTTON_SELECT.createLab.startDate.label;
const recruitStartDatePlaceholder = BUTTON_SELECT.createLab.startDate.placeholder;
const recruitQuestionsLabel = INPUT_SINGLE.createLab.questions.label;
const recruitQuestionsPlaceholder = INPUT_SINGLE.createLab.questions.placeholder;
const recruitQuestionsType = INPUT_SINGLE.createLab.questions.type;
const recruitQuestionsMaxLength = INPUT_SINGLE.createLab.questions.maxLength;
const recruitQuestionsLengthShow = INPUT_SINGLE.createLab.questions.lengthShow;
const recruitQuestionButtonType = BUTTON_MAIN_FILL.createLab.question.type;
const recruitQuestionButtonText = BUTTON_MAIN_FILL.createLab.question.text;
const submitButtonType = BUTTON_MAIN_FILL.createLab.submit.type;
const submitButtonText = BUTTON_MAIN_FILL.createLab.submit.text;
const commonType = AREA_MESSAGE.createLab.type;
// State
const {
  category,
  period,
  week,
  startTime,
  endTime,
  place,
} = storeToRefs(modalStore);
const {
  firstMeet,
  startDate,
} = storeToRefs(labStore);
const labTitle = ref('');
const labSummary = ref('');
const labDetail = ref('');
const labObjective = ref<Array<string>>([]);
const members = ref(0);
const questions = ref(['']);
// Functions
const onClickOpenModal = (modal: string) => {
  if (modal === 'createLabTime' && week.value === null) {
    toast('모임 요일을 선택해 주세요.');
  } else {
    modalStore.setOpenModal(modal);
  }
};
const onChangeLabTitle = (e: any) => {
  labTitle.value = e.target.value;
};
const onChangeLabSummary = (e: any) => {
  labSummary.value = e.target.value;
};
const onChangeLabDetail = (e: any) => {
  labDetail.value = e.target.value;
};
const selectObjective = (value: string) => {
  labObjective.value = [
    ...labObjective.value,
    value,
  ];
};
const removeObjective = (value: string) => {
  labObjective.value = labObjective.value.filter((item) => item !== value);
};
const onClickSelectObjective = (value: string) => {
  if (!labObjective.value.includes(value)) {
    selectObjective(value);
  } else {
    removeObjective(value);
  }
};
const onChangeLabMembers = (e: any) => {
  if (e.target.value < 0) {
    toast('인원은 2명 이상만 가능합니다.');
  }
  if (e.target.value > 100) {
    toast('최대 인원 초과 입니다.');
  }
  if (e.target.value >= 1 && e.target.value <= 100) {
    members.value = e.target.value;
  }
};
const onChangeQuestion = (text: string, index: number) => {
  questions.value[index] = text;
};
const onClickAddQuestion = () => {
  questions.value.push('');
};
const onClickSubmit = () => {
  if (period.value && week.value && startTime.value && place.value) {
    labStore.postLabCreate({
      name: labTitle.value,
      summary: labSummary.value,
      introduce: labDetail.value,
      thumbnail: null,
      category: category.value?.number,
      objective: labObjective.value,
      price: 0,
      firstMeet: firstMeet.value,
      period: period.value.value,
      week: week.value.value,
      startTime: startTime.value.value,
      endTime: endTime.value,
      place: place.value.value,
      members: members.value,
      startDate: startDate.value[0],
      endDate: startDate.value[1],
      question: questions.value,
      private: false,
    });
  }
};
// Cycle
onMounted(() => {
  mainStore.getCategoryList();
});
</script>

<style lang="scss" scoped>
.stack-wrapper {
  @include boxSet(100%, auto, 0px);
  padding-top: 55px;
}
.article-box {
  @include flexSet(flex-start, flex-start, column);
  @include boxSet(100%, auto, 0px);
  gap: 20px;
  padding: 24px 20px;
}
.button-box {
  padding: 20px;
}
</style>
