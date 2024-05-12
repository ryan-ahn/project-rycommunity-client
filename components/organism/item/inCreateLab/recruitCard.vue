<template>
  <div class="item-wrapper">
    <div class="item-box">
      <p class="label-box">
        {{ recruitMembersLabel }}
      </p>
      <AtomsInputSingleLine
        :placeholder="recruitMembersPlaceholder"
        :type="recruitMembersType"
        :maxLength="recruitMembersMaxLength"
        :lengthShow="recruitMembersLengthShow"
        :onChangeValue="onChangeLabMembers"
      />
    </div>
    <div class="gap-box">
      <div class="item-box">
        <p class="label-box">
          {{ recruitStartDateLabel }}
        </p>
        <VueDatePicker
          v-model="startDate"
          range
          multi-calendars
          :auto-position="true"
          :enable-time-picker="false"
          :placeholder="recruitStartDatePlaceholder"
        />
      </div>
    </div>
    <div class="last-box">
      <p class="label-box">
        {{ recruitQuestionsLabel }}
      </p>
      <div
        v-for="(_, index) in enteredQuestion.length"
        :key="index"
        class="question-box"
      >
        <AtomsInputSingleLine
          :placeholder="recruitQuestionsPlaceholder"
          :type="recruitQuestionsType"
          :maxLength="recruitQuestionsMaxLength"
          :lengthShow="recruitQuestionsLengthShow"
          :onChangeValue="e => onChangeQuestion(e.target.value, index)"
        />
      </div>
      <div class="button-box">
        <AtomsButtonMainFill
          :type="recruitQuestionButtonType"
          :text="recruitQuestionButtonText"
          :onClickFunction="onClickAddQuestion"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useToast } from 'vue-toastification';
import { watch } from 'vue';
import { storeToRefs } from 'pinia';
import VueDatePicker from '@vuepic/vue-datepicker';
import { useLabStore } from '@store/index';
import { IItemInCreateLabRecruitProps } from '@interface/props';
// Hooks
const labStore = useLabStore();
const toast = useToast();
// Props
const {
  enteredQuestion,
  recruitMembersLabel,
  recruitMembersPlaceholder,
  recruitMembersType,
  recruitMembersMaxLength,
  recruitMembersLengthShow,
  recruitStartDateLabel,
  recruitStartDatePlaceholder,
  recruitQuestionsLabel,
  recruitQuestionsPlaceholder,
  recruitQuestionsType,
  recruitQuestionsMaxLength,
  recruitQuestionsLengthShow,
  recruitQuestionButtonType,
  recruitQuestionButtonText,
  onChangeQuestion,
  onClickAddQuestion,
  onChangeLabMembers,
} = defineProps<IItemInCreateLabRecruitProps>();
// State
const { startDate } = storeToRefs(labStore);
// Watch
watch(startDate, (value) => {
  if (value && new Date(value[0]) <= new Date()) {
    toast('모집 기간을 확인해 주세요.');
    startDate.value = null;
  }
});
</script>

<style lang="scss" scoped>
.item-wrapper {
  @include boxSet(100%, auto, 0px);
}
.label-box {
  @include boxSet(100%, auto, 0px);
  @include fontSet(14px, 400, 24px);
}
.gap-box {
  @include flexSet(space-between, flex-end, row);
  gap: 8px;
}
.item-box {
  @include flexSet(flex-start, flex-start, column);
  @include boxSet(100%, auto, 0px);
  gap: 8px;
  margin-bottom: 20px;
}
.last-box {
  @include flexSet(center, center, column);
  @include boxSet(100%, auto, 0px);
  gap: 8px;
}
.question-box {
  @include boxSet(100%, auto, 0px);
}
.button-box {
  @include boxSet(100%, auto, 0px);
}
</style>
