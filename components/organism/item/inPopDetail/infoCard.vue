<template>
  <div class="item-wrapper">
    <div class="seminar-box">
      <p>{{ title }}</p>
      <div class="column-box">
        <label>{{ body[0].label }}</label>
        <p>{{ place }}</p>
      </div>
      <div class="column-box">
        <label>{{ body[1].label }}</label>
        <p>{{ validateCombineTime(startTime, endTime, '오시분') }}</p>
      </div>
      <div class="column-box">
        <label>{{ body[2].label }}</label>
        <p>{{ validateDate(date, '년월일') }}</p>
      </div>
      <div class="column-box">
        <label>{{ body[3].label }}</label>
        <div class="inner-box">
          <p>{{ validateDate(endDate, '년월일') }}</p>
          <p v-if="endDateTime">
            {{ `${validateTime(endDateTime, '오시')}까지` }}
          </p>
        </div>
      </div>
      <div class="row-box">
        <label>{{ body[5].label }}</label>
        <ul
          v-for="(item, index) in program"
          :key="index"
        >
          <li>∙</li>
          <li>{{ item }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IItemInPopDetailInfoCardProps } from '@interface/props';
// Props
const {
  title,
  body,
  place,
  startTime,
  endTime,
  date,
  endDate,
  endDateTime,
  program,
} = defineProps<IItemInPopDetailInfoCardProps>();
</script>

<style lang="scss" scoped>
.item-wrapper {
  @include boxSet(calc(100% - 40px), auto, 0px);
  margin: 60px 20px 120px 20px;
}
.seminar-box {
  @include boxSet(100%, auto, 8px);
  @include flexSet(center, flex-start, column);
  padding: 16px 16px;
  background-color: $gray01;
  & > p {
    @include boxSet(100%, auto, 0px);
    padding-bottom: 16px;
    border-bottom: 1px solid $gray03;
    @include fontSet(22px, 700, 28px);
  }
}
.column-box {
  width: 100%;
  @include flexSet(flex-start, flex-start, row);
  margin-top: 16px;
  & > label {
    min-width: 80px;
    @include fontSet(16px, 600, 22px);
  }
  & > p {
    width: 100%;
    @include fontSet(16px, 300, 22px);
    @include ellipsisSet(1, 22px);
  }
}
.inner-box {
  @include flexSet(flex-start, flex-start, column);
  gap: 4px;
  & > p {
    width: 100%;
    @include fontSet(16px, 300, 22px);
    @include ellipsisSet(1, 22px);
  }
}
.row-box {
  margin-top: 16px;
  & > label {
    min-width: 80px;
    @include fontSet(16px, 600, 22px);
  }
  & > ul {
    margin-top: 8px;
    @include flexSet(flex-start, flex-start, row);
    & > li:nth-child(1) {
      padding: 3px 4px;
    }
    & > li:nth-child(2) {
      @include fontSet(16px, 300, 22px);
      white-space: pre-wrap;
    }
  }
}
</style>
