<template>
  <div class="stack-wrapper">
    <article class="article-box">
      <OrganismItemInJoinPopUserInfoCard
        v-if="joinPopDetail"
        :data="joinPopDetail.userDetail"
        :title="userInfoTitle"
        :required="userInfoRequired"
      />
    </article>
    <AtomsAreaLine/>
    <article class="article-box">
      <OrganismItemInJoinPopJoinInfoCard
        v-if="joinPopDetail"
        :data="joinPopDetail.popDetail"
        :title="joinInfoTitle"
        :required="joinInfoRequired"
        :description="joinInfoDescription"
      />
    </article>
    <article class="article-box">
      <OrganismItemInJoinPopFirstQuestionCard
        v-if="joinPopDetail && joinPopDetail.popDetail.live"
        :data="joinPopDetail.popDetail"
        :label="firstQuestionLabel"
        :title="firstTitle"
        :menu="joinPopDetail.popStatus.subscribe ? MENU_POP_JOIN_SELECT : MENU_POP_JOIN_ONLINE"
        :selectedItem="firstSelectedItem"
        :onClickFunction="onClickSelectFirstQuestion"
      />
    </article>
    <article class="article-box">
      <OrganismItemInJoinPopSecondQuestionCard
        v-if="joinPopDetail"
        :data="joinPopDetail.popDetail"
        :label="secondQuestionLabel"
        :title="secondTitle"
        :description="subTitle"
        :menu="MENU_POP_KNOW"
        :selectedList="secondSelectedList"
        :onClickFunction="onClickSelectSecondQuestion"
      />
    </article>
    <article class="article-box">
      <OrganismItemInJoinPopThirdQuestionCard
        v-if="joinPopDetail"
        :data="joinPopDetail.popDetail"
        :label="thirdQuestionLabel"
        :title="thirdTitle"
        :description="subTitle"
        :menu="MENU_USE_POP"
        :selectedList="thirdSelectedList"
        :onClickFunction="onClickSelectThirdQuestion"
      />
    </article>
    <article class="article-box">
      <OrganismItemInJoinPopFifthQuestionCard
        v-if="joinPopDetail"
        :data="joinPopDetail.popDetail"
        :label="fifthQuestionLabel"
        :title="fifthTitle"
        :menu="MENU_POP_JOB"
        :selectedItem="fifthSelectedItem"
        :onClickFunction="onClickSelectFifthQuestion"
      />
    </article>
    <article class="article-box">
      <div class="agreement-box">
        <p @click="onClickAgreeModalOpen('joinPopAgree')">
          {{ agreeContext }}
        </p>{{ agreeSubContext }}
      </div>
      <AtomsButtonMainFill
        v-if="joinPopDetail"
        :disabled="!secondSelectedList.length || !thirdSelectedList.length"
        :type="submitButtonType"
        :text="submitButtonText"
        :onClickFunction="onClickSubmit"
      />
    </article>
  </div>
</template>

<script setup lang='ts'>
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import {
  useMainStore,
  useModalStore,
} from '@store/index';
import {
  TITLE_LARGE_REQUIRED,
  TITLE_COMMON,
} from '@assets/data/title';
import {
  MENU_POP_JOIN_SELECT,
  MENU_POP_JOIN_ONLINE,
  MENU_POP_KNOW,
  MENU_USE_POP,
  MENU_POP_JOB,
} from '@assets/data/menu';
import { QUESTION_LABEL } from '@assets/data/data';
import {
  CONTENT_STACK,
  CONTENT_MODAL,
} from '@assets/data/content';
import { BUTTON_MAIN_FILL } from '@assets/data/button';
// Hooks
const route = useRoute();
const mainStore = useMainStore();
const modalStore = useModalStore();

// State
const { joinPopDetail } = storeToRefs(mainStore);
const userInfoTitle = TITLE_LARGE_REQUIRED.joinPop.userInfo.title;
const userInfoRequired = TITLE_LARGE_REQUIRED.joinPop.userInfo.required;
const joinInfoTitle = TITLE_LARGE_REQUIRED.joinPop.joinInfo.title;
const joinInfoRequired = TITLE_LARGE_REQUIRED.joinPop.joinInfo.required;
const joinInfoDescription = CONTENT_STACK.joinPop.joinInfo.description;
const firstQuestionLabel = QUESTION_LABEL[0];
const firstTitle = TITLE_COMMON.joinPop.first.title;
const secondQuestionLabel = QUESTION_LABEL[1];
const secondTitle = TITLE_COMMON.joinPop.second.title;
const thirdQuestionLabel = QUESTION_LABEL[2];
const thirdTitle = TITLE_COMMON.joinPop.third.title;
const fifthQuestionLabel = QUESTION_LABEL[3];
const fifthTitle = TITLE_COMMON.joinPop.fifth.title;
const subTitle = TITLE_COMMON.joinPop.sub.title;
const agreeContext = CONTENT_MODAL.createPop.title;
const agreeSubContext = CONTENT_MODAL.createPop.subTitle;
const submitButtonText = BUTTON_MAIN_FILL.joinPop.submit.text;
const submitButtonType = BUTTON_MAIN_FILL.joinPop.submit.type;
const firstSelectedItem = ref(1);
const secondSelectedList = ref<Array<string>>([]);
const thirdSelectedList = ref<Array<string>>([]);
const fifthSelectedItem = ref(1);
// Functions
const selectSecondQuestion = (value: string) => {
  secondSelectedList.value = [
    ...secondSelectedList.value,
    value,
  ];
};
const selectThirdQuestion = (value: string) => {
  thirdSelectedList.value = [
    ...thirdSelectedList.value,
    value,
  ];
};
const removeSecondQuestion = (value: string) => {
  secondSelectedList.value = secondSelectedList.value.filter((item) => item !== value);
};
const removeThirdQuestion = (value: string) => {
  thirdSelectedList.value = thirdSelectedList.value.filter((item) => item !== value);
};
const onClickSelectFirstQuestion = (id: number) => {
  firstSelectedItem.value = id;
};
const onClickSelectSecondQuestion = (value: string) => {
  if (!secondSelectedList.value.includes(value)) {
    selectSecondQuestion(value);
  } else {
    removeSecondQuestion(value);
  }
};
const onClickSelectThirdQuestion = (value: string) => {
  if (!thirdSelectedList.value.includes(value)) {
    selectThirdQuestion(value);
  } else {
    removeThirdQuestion(value);
  }
};
const onClickSelectFifthQuestion = (id:number) => {
  fifthSelectedItem.value = id;
};
const onClickAgreeModalOpen = (modal: string) => {
  modalStore.setOpenModal(modal);
};
const onClickSubmit = async () => {
  await mainStore.postJoinPopMember({
    popId: route.params.id,
    onoff: MENU_POP_JOIN_SELECT.filter((item) => item.id === firstSelectedItem.value)[0].value,
    know: secondSelectedList.value,
    use: thirdSelectedList.value,
    job: MENU_POP_JOB[fifthSelectedItem.value].value,
  });
};
// Cycle
onMounted(() => {
  mainStore.getJoinPopDetail({
    popId: route.params.id,
  });
});
</script>

<style lang='scss' scoped>
.stack-wrapper {
  @include boxSet(100%, auto, 0px);
  padding-top: 55px;
}
.article-box {
  @include boxSet(100%, auto, 0px);
  padding: 24px 20px;
}
.agreement-box {
  @include flexSet(center, center, row);
  @include fontSet(12px, 500, 22px);
  margin-bottom: 10px;
  color: $black;
  p {
    color: $theme03;
    text-decoration: underline;
    cursor: pointer;
  }
}
</style>
