<template>
  <section class="stack-wrapper">
    <OrganismItemInPopDetailThumbnailCard
      v-if="popDetail"
      :background="popDetail.popInfo.thumbnail"
    />
    <SkeletonInPopDetailThumbnail v-if="!popDetail"/>
    <OrganismItemInPopDetailLiveCard
      v-if="popDetail"
      :liveStatus="popDetail.popInfo.live"
      :popButtonText="popButtonText"
      :popButtonType="popButtonType"
      :liveButtonText="liveButtonText"
      :liveButtonType="liveButtonType"
    />
    <SkeletonInPopDetailLiveCard v-if="!popDetail"/>
    <OrganismItemInPopDetailContentCard
      v-if="popDetail"
      :content="popDetail.popInfo.body"
    />
    <SkeletonInPopDetailContentCard v-if="!popDetail"/>
    <OrganismItemInPopDetailInfoCard
      v-if="popDetail"
      :title="contentTitle"
      :body="contentBody"
      :place="popDetail.popInfo.place"
      :startTime="popDetail.popInfo.startTime"
      :endTime="popDetail.popInfo.endTime"
      :date="popDetail.popInfo.date"
      :endDate="popDetail.popInfo.endDate"
      :endDateTime="popDetail.popInfo.endDateTime"
      :link="popDetail.popInfo.link"
      :program="popDetail.popInfo.program"
    />
    <OrganismItemInPopDetailFloatCard
      v-if="popDetail && validateDateAndTime(popDetail.popInfo.date, popDetail.popInfo.endTime) > today"
      :id="popDetail.popInfo._id"
      :disabled="isCheckPopMember || validateDateAndTime(popDetail.popInfo.endDate, popDetail.popInfo.endDateTime) <= today"
      :text="floatText"
      :endDate="popDetail.popInfo.endDate"
      :endDateTime="popDetail.popInfo.endDateTime"
      :link="popDetail.popInfo.link"
      :buttonType="joinButtonType"
      :buttonText="joinButtonText"
      :onClickFunction="onClickGoToJoinPop"
    />
  </section>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useToDay } from '@utils/useDate';
import {
  useMainStore,
  useModalStore,
} from '@store/index';
import { CONTENT_STACK } from '@assets/data/content';
import {
  BUTTON_MAIN_FILL,
  BUTTON_FUNCTION_CHIP,
} from '@assets/data/button';
// Hooks
const access = useCookie('access');
const route = useRoute();
const router = useRouter();
const mainStore = useMainStore();
const modalStore = useModalStore();
const today = useToDay();
// State
const {
  popDetail,
  isCheckPopMember,
} = storeToRefs(mainStore);
const popButtonText = BUTTON_FUNCTION_CHIP.popDetail.pop.text;
const popButtonType = BUTTON_FUNCTION_CHIP.popDetail.pop.type;
const liveButtonText = BUTTON_FUNCTION_CHIP.popDetail.live.text;
const liveButtonType = BUTTON_FUNCTION_CHIP.popDetail.live.type;
const contentTitle = CONTENT_STACK.popDetail.title;
const contentBody = CONTENT_STACK.popDetail.body;
const floatText = CONTENT_STACK.popDetail.floatText;
const joinButtonType = BUTTON_MAIN_FILL.popDetail.floatCard.type;
const joinButtonText = computed(() => {
  if (isCheckPopMember.value) {
    return BUTTON_MAIN_FILL.popDetail.floatCard.disabledText;
  }
  if (!isCheckPopMember.value && popDetail.value && validateDateAndTime(popDetail.value.popInfo.endDate, popDetail.value.popInfo.endDateTime) <= today) {
    return BUTTON_MAIN_FILL.popDetail.floatCard.deadlineText;
  }
  if (!isCheckPopMember.value && popDetail.value && validateDateAndTime(popDetail.value.popInfo.endDate, popDetail.value.popInfo.endDateTime) > today) {
    return BUTTON_MAIN_FILL.popDetail.floatCard.activeText;
  }
  return '';
});
// Functions
const onClickGoToJoinPop = (id: string) => {
  if (!access.value) {
    router.push('/login');
  }
  if (!isCheckPopMember.value && access.value) {
    // 버튼 실행 조건 처리
    router.push(`/joinpop/${id}`);
  }
  if (isCheckPopMember.value && access.value) {
    onClickOpenQrModal();
  }
};
const onClickOpenQrModal = () => {
  modalStore.setOpenModal('popQrPopup');
};
// Cycle
onMounted(() => {
  mainStore.getPopDetail({
    popId: route.params.id,
  });
  if (access.value) {
    mainStore.getCheckPopMember({
      popId: route.params.id,
    });
  }
});
</script>

<style lang="scss" scoped>
.stack-wrapper {
  @include boxSet(100%, auto, 0px);
}
</style>
