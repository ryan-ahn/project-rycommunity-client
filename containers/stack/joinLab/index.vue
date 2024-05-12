<template>
  <section class="stack-wrapper">
    <article class="article-box">
      <AtomsTitleLargeRequired
        :title="profileTitle"
        :required="profileRequired"
      />
      <AtomsProfileToggle
        v-if="joinDetail"
        :open="profileToggle"
        :thumbnailData="joinDetail.userDetail.profileImage"
        :nameData="joinDetail.userDetail.name + profileExplanation"
        :phoneLabel="phoneLabel"
        :emailLabel="emailLabel"
        :emailData="joinDetail.userDetail.email"
        :phoneData="
          joinDetail.userDetail.phone ? joinDetail.userDetail.phone : ''
        "
        :onClickFunction="onClickToggle"
      />
    </article>
    <article class="article-box">
      <AtomsTitleLargeRequired
        :title="introTitle"
        :required="introRequired"
      />
      <AtomsInputMultiLine
        :placeholder="introPlaceholder"
        :rows="introRows"
        :maxLength="introMaxLength"
        :lengthShow="introLengthShow"
        :onChangeValue="onChangeIntro"
      />
    </article>
    <AtomsAreaLine/>
    <article class="article-box">
      <AtomsTitleLargeRequired
        :title="questionTitle"
        :required="questionRequired"
      />
      <AtomsAreaMessage
        :message="questionMessage"
        :type="commonType"
      />
      <OrganismListInJoinLabQuestion
        v-if="joinDetail"
        :data="joinDetail.labDetail.question"
        :label="QUESTION_LABEL"
        :questionRows="questionRows"
        :questionPlaceholder="questionPlaceholder"
        :questionMaxLength="questionMaxLength"
        :questionLengthShow="questionLengthShow"
        :onChangeFunction="onChangeAnswer"
      />
    </article>
    <AtomsAreaLine/>
    <article class="article-box">
      <AtomsTitleLargeRequired
        :title="knowTitle"
        :required="knowRequired"
      />
      <OrganismItemInJoinLabKnowCard
        :knowPlaceholder="knowPlaceholder"
        :onClickFunction="onClickOpenModal"
        :onChangeFunction="onChangeKnowEtc"
      />
    </article>
    <article class="article-box">
      <AtomsButtonMainFill
        v-if="joinDetail"
        :type="floatType"
        :text="floatText"
        :disabled="
          !know || !answer || (know.value === '기타(직접입력)' && !knowEtc)
        "
        :onClickFunction="onClickSubmit"
      />
    </article>
  </section>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import {
  useLabStore,
  useModalStore,
} from '@store/index';
import { TITLE_LARGE_REQUIRED } from '@assets/data/title';
import { INPUT_MULTI } from '@assets/data/input';
import { QUESTION_LABEL } from '@assets/data/data';
import { CONTENT_STACK } from '@assets/data/content';
import {
  BUTTON_MAIN_FILL,
  BUTTON_SELECT,
} from '@assets/data/button';
import { AREA_MESSAGE } from '@assets/data/area';
// Hooks
const route = useRoute();
const labStore = useLabStore();
const modalStore = useModalStore();
// Variable
const {
  know,
  knowEtc,
} = storeToRefs(modalStore);
const { joinDetail } = storeToRefs(labStore);
const profileTitle = TITLE_LARGE_REQUIRED.joinLab.profile.title;
const profileExplanation = CONTENT_STACK.joinLab.profile;
const profileRequired = TITLE_LARGE_REQUIRED.joinLab.profile.required;
const phoneLabel = CONTENT_STACK.joinLab.phoneLabel;
const emailLabel = CONTENT_STACK.joinLab.emailLabel;
const introRows = INPUT_MULTI.joinLab.intro.rows;
const introPlaceholder = INPUT_MULTI.joinLab.intro.placeholder;
const introMaxLength = INPUT_MULTI.joinLab.intro.maxLength;
const introLengthShow = INPUT_MULTI.joinLab.intro.lengthShow;
const introTitle = TITLE_LARGE_REQUIRED.joinLab.intro.title;
const introRequired = TITLE_LARGE_REQUIRED.joinLab.intro.required;
const questionTitle = TITLE_LARGE_REQUIRED.joinLab.question.title;
const questionRequired = TITLE_LARGE_REQUIRED.joinLab.question.required;
const questionMessage = AREA_MESSAGE.joinLab.message;
const questionRows = INPUT_MULTI.joinLab.question.rows;
const questionPlaceholder = INPUT_MULTI.joinLab.question.placeholder;
const questionMaxLength = INPUT_MULTI.joinLab.question.maxLength;
const questionLengthShow = INPUT_MULTI.joinLab.question.lengthShow;
const knowTitle = TITLE_LARGE_REQUIRED.joinLab.know.title;
const knowRequired = TITLE_LARGE_REQUIRED.joinLab.know.required;
const knowPlaceholder = BUTTON_SELECT.joinLab.know.placeholder;
const floatType = BUTTON_MAIN_FILL.joinLab.float.type;
const floatText = BUTTON_MAIN_FILL.joinLab.float.text;
const commonType = AREA_MESSAGE.joinLab.type;
// State
const intro = ref('');
const answer = ref<{ question: string; answer: string }[] | []>([]);
const profileToggle = ref(false);
// Functions
const onChangeIntro = (e: any) => {
  intro.value = e.target.value;
};
const onClickToggle = () => {
  profileToggle.value = !profileToggle.value;
};
const onChangeAnswer = (e: any, index: number, question: string) => {
  const copiedAnswer = [...answer.value];
  const object = {
    question,
    answer: e.target.value,
  };
  copiedAnswer[index] = object;
  answer.value[index] = copiedAnswer[index];
};
const onChangeKnowEtc = (e: any) => {
  modalStore.setKnowEtc(e.target.value);
};
const onClickOpenModal = (modal: string) => {
  modalStore.setOpenModal(modal);
};
const onClickSubmit = () => {
  if (know.value) {
    labStore.postMemberJoin({
      labId: route.params.id,
      questions: answer.value,
      know: know.value.value,
      intro: intro.value,
    });
  }
};
// Cycle
onMounted(() => {
  labStore.getJoinLabDetail({
    labId: route.params.id,
  });
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
</style>
