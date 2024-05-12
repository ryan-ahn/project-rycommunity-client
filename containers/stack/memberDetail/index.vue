<template>
  <section class="stack-wrapper">
    <article class="article-box">
      <div class="subtitle-box">
        <p>{{ applicantTitle }}</p>
        <p
          v-show="memberDetail?.userGrade === 2"
          class="approved"
        >
          {{ approvedStatus }} &#10003;
        </p>
        <p
          v-show="memberDetail?.userGrade === 1"
          class="pending"
        >
          {{ pendingStatus }}
        </p>
      </div>
      <AtomsProfileToggle
        v-if="memberDetail"
        :open="profileToggle"
        :thumbnailData="memberDetail.userDetail.profileImage"
        :nameData="memberDetail.userDetail.name + profileExplanation"
        :phoneLabel="phoneLabel ? phoneLabel : ''"
        :emailLabel="emailLabel"
        :emailData="memberDetail.userDetail.email"
        :phoneData="
          memberDetail?.userDetail.phone ? memberDetail.userDetail.phone : '입력된 연락처가 없습니다.'
        "
        :onClickFunction="onClickToggle"
      />
    </article>
    <article class="article-box">
      <div class="subtitle-box">
        <p>{{ introTitle }}</p>
      </div>
      <AtomsAreaBox
        v-if="memberDetail"
        :text="memberDetail.userDetail.introduce ? memberDetail.userDetail.introduce : '입력된 자기 소개가 없습니다.'"
      />
    </article>
    <AtomsAreaLine/>
    <article class="article-box">
      <div class="subtitle-box">
        <p>{{ replyTitle }}</p>
      </div>
      <OrganismListInJoinLabReply
        v-if="memberDetail"
        :data="memberDetail.questions"
        :label="QUESTION_LABEL"
      />
    </article>
    <article
      v-show="detail?.periodStatus.recruitStatus === true"
      v-hidden="detail?.periodStatus.recruitStatus === false"
      class="article-box sticky-position"
    >
      <AtomsButtonMainFill
        v-if="memberDetail"
        :type="submitType"
        :class="memberDetail.userGrade === 2 ? 'cancel-approve' : 'button-wrapper'"
        :text="memberDetail.userGrade === 2 ? submitDisabledText : submitActiveText"
        :disabled="false"
        :onClickFunction="memberDetail.userGrade === 2 ? onClickCancel : onClickApprove"
      />
    </article>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import {
  useLabStore,
  useScrollStore,
} from '@store/index';
import { TITLE_SMALL_LABEL } from '@assets/data/title';
import { QUESTION_LABEL } from '@assets/data/data';
import { CONTENT_STACK } from '@assets/data/content';
import { BUTTON_MAIN_FILL } from '@assets/data/button';
// Hooks
const route = useRoute();
const labStore = useLabStore();
const scrollStore = useScrollStore();
// Variable
const {
  memberDetail,
  detail,
} = storeToRefs(labStore);
const { currentScrollTop } = storeToRefs(scrollStore);
const sectionRef = ref<HTMLElement | null>(null);
const applicantTitle = TITLE_SMALL_LABEL.approveLab.title;
const approvedStatus = TITLE_SMALL_LABEL.approveLab.approved;
const pendingStatus = TITLE_SMALL_LABEL.approveLab.pending;
const introTitle = TITLE_SMALL_LABEL.approveLab.selfIntro;
const replyTitle = TITLE_SMALL_LABEL.approveLab.reply;
const profileExplanation = CONTENT_STACK.joinLab.profile;
const phoneLabel = CONTENT_STACK.joinLab.phoneLabel;
const emailLabel = CONTENT_STACK.joinLab.emailLabel;
const submitType = BUTTON_MAIN_FILL.approveLab.submit.type;
const submitActiveText = BUTTON_MAIN_FILL.approveLab.submit.activeText;
const submitDisabledText = BUTTON_MAIN_FILL.approveLab.submit.disabledText;
// State
const profileToggle = ref(false);
// Functions
const onClickToggle = () => {
  profileToggle.value = !profileToggle.value;
};
const onClickApprove = async () => {
  await labStore.patchMemberStatus({
    labId: route.query.lab,
    userId: route.query.target,
    userGrade: 2,

  });
  await labStore.postMemberDetail({
    labId: route.query.lab,
    userId: route.query.target,
  });
};

const onClickCancel = async () => {
  await labStore.patchMemberStatus({
    labId: route.query.lab,
    userId: route.query.target,
    userGrade: 1,
  });
  await labStore.postMemberDetail({
    labId: route.query.lab,
    userId: route.query.target,
  });
};

// Cycle
onMounted(() => {
  labStore.postMemberDetail({
    labId: route.query.lab,
    userId: route.query.target,
  });
});
onMounted(() => {
  // useScrollTop();
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
.article-box:nth-child(2) {
  padding-top: 0;
}
.subtitle-box {
  @include flexSet(flex-start, flex-start, row);
  gap: 8px;
  & > p {
    @include fontSet(16px, 500, 24px);
  }
}
.approved {
  @include fontSet(14px, 500, 20px);
  color: $theme01;
}

.pending {
  @include fontSet(14px, 500, 18px);
  color: $gray07;
}

.button-wrapper {
  @include colorSet($white, $theme01);
}
.cancel-approve {
  @include colorSet($white, $gray07);
}

.sticky-position {
  position: sticky;
  bottom: 0;
  z-index: 100;
  background-color: $white;
}
</style>
