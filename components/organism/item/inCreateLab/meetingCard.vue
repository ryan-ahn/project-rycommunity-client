<template>
  <div class="item-wrapper">
    <div class="item-box">
      <p class="label-box">
        {{ meetingDateLabel }}
      </p>
      <VueDatePicker
        v-model="firstMeet"
        :enable-time-picker="false"
        :placeholder="meetingDatePlaceholder"
        auto-apply
      />
    </div>
    <div class="gap-box">
      <div class="item-box">
        <p class="label-box">
          {{ meetingPeriodLabel }}
        </p>
        <button
          class="button-box"
          @click="onClickOpenModal('createLabPeriod')"
        >
          <p :class="period ? 'button-text-active' : 'button-text-deactive'">
            {{ period ? period.value : meetingPeriodPlaceholder }}
          </p>
          <img
            src="/icons/common/arrow-down-gray.svg"
            alt="arrow"
          >
        </button>
      </div>
      <div class="item-box">
        <p class="label-box">
          {{ meetingWeekLabel }}
        </p>
        <button
          class="button-box"
          @click="onClickOpenModal('createLabWeek')"
        >
          <p :class="week ? 'button-text-active' : 'button-text-deactive'">
            {{ week ? week.value : meetingWeekPlaceholder }}
          </p>
          <img
            src="/icons/common/arrow-down-gray.svg"
            alt="arrow"
          >
        </button>
      </div>
    </div>
    <div class="item-box">
      <p class="label-box">
        {{ meetingTimeLabel }}
      </p>
      <button
        class="button-box"
        @click="onClickOpenModal('createLabTime')"
      >
        <p :class="startTime && endTime ? 'button-text-active' : 'button-text-deactive'">
          {{
            startTime && endTime
              ? `${startTime.value} - ${endTime}`
              : meetingTimePlaceholder
          }}
        </p>
        <img
          src="/icons/common/arrow-down-gray.svg"
          alt="arrow"
        >
      </button>
    </div>
    <div class="item-box">
      <p class="label-box">
        {{ meetingPlaceLabel }}
      </p>
      <button
        class="button-box"
        @click="onClickOpenModal('createLabPlace')"
      >
        <p :class="place ? 'button-text-active' : 'button-text-deactive'">
          {{ place ? place.value : meetingPlacePlaceholder }}
        </p>
        <img
          src="/icons/common/arrow-down-gray.svg"
          alt="arrow"
        >
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useToast } from 'vue-toastification';
import { storeToRefs } from 'pinia';
import VueDatePicker from '@vuepic/vue-datepicker';
import {
  useModalStore,
  useLabStore,
} from '@store/index';
import { IItemInCreateLabMeetingProps } from '@interface/props';
// Hooks
const modalStore = useModalStore();
const labStore = useLabStore();
const toast = useToast();
// Props
const {
  meetingDateLabel,
  meetingDatePlaceholder,
  meetingPeriodLabel,
  meetingPeriodPlaceholder,
  meetingWeekLabel,
  meetingWeekPlaceholder,
  meetingTimeLabel,
  meetingTimePlaceholder,
  meetingPlaceLabel,
  meetingPlacePlaceholder,
  onClickOpenModal,
} = defineProps<IItemInCreateLabMeetingProps>();
// State
const { firstMeet } = storeToRefs(labStore);
const {
  period,
  week,
  startTime,
  endTime,
  place,
} = storeToRefs(modalStore);
// Watch
watch(firstMeet, (value) => {
  if (value && new Date(value) <= new Date()) {
    toast('첫 모임일을 확인해 주세요.');
    firstMeet.value = null;
  }
});
</script>

<style lang="scss" scoped>
.item-wrapper {
  @include flexSet(center, center, column);
  @include boxSet(100%, auto, 0px);
  gap: 20px;
}
.item-box {
  @include flexSet(flex-start, flex-start, column);
  @include boxSet(100%, auto, 0px);
  gap: 8px;
}
.gap-box {
  @include flexSet(space-between, center, row);
  @include boxSet(100%, auto, 0px);
  gap: 8px;
}
.label-box {
  @include boxSet(100%, auto, 0px);
  @include fontSet(14px, 400, 24px);
}
.button-box {
  @include flexSet(space-between, center, row);
  @include boxSet(100%, auto, 8px);
  padding: 16px;
  cursor: pointer;
  border: 1px solid $gray03;
  & > img {
    @include boxSet(24px, 24px, 0px);
    object-fit: cover;
  }
}
.button-text-deactive {
  color: $gray05;
  @include fontSet(16px, 400, 22px);
}
.button-text-active {
  color: $gray09;
  @include fontSet(16px, 400, 22px);
}
</style>
