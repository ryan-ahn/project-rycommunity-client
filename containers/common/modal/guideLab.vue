<template>
  <section class="stack-wrapper">
    <div class="content-box">
      <OrganismItemInLabGuideCard
        :header="firstHeader"
        :number="firstNumber"
        :content="firstContent"
      />
      <OrganismItemInLabGuideCard
        :header="secondHeader"
        :number="secondNumber"
        :content="secondContent"
      />
      <OrganismItemInLabGuideCard
        :header="thirdHeader"
        :number="thirdNumber"
        :content="thirdContent"
      />
      <OrganismItemInLabGuideCard
        :header="fourthHeader"
        :number="fourthNumber"
        :content="fourthContent"
      />
    </div>
    <div class="warning-wrapper">
      <div>{{ warningTitle }}</div>
      <p>{{ warningContent }}</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { MODAL_POPUP } from '@assets/data/modal';

// State
const firstHeader = MODAL_POPUP.lab.guide.first.header;
const firstNumber = MODAL_POPUP.lab.guide.first.number;
const firstContent = MODAL_POPUP.lab.guide.first.content;
const secondHeader = MODAL_POPUP.lab.guide.second.header;
const secondNumber = MODAL_POPUP.lab.guide.second.number;
const secondContent = MODAL_POPUP.lab.guide.second.content;
const thirdHeader = MODAL_POPUP.lab.guide.third.header;
const thirdNumber = MODAL_POPUP.lab.guide.third.number;
const thirdContent = MODAL_POPUP.lab.guide.third.content;
const fourthHeader = MODAL_POPUP.lab.guide.fourth.header;
const fourthNumber = MODAL_POPUP.lab.guide.fourth.number;
const fourthContent = MODAL_POPUP.lab.guide.fourth.content;
const warningTitle = MODAL_POPUP.lab.guide.warning.title;
const warningContent = MODAL_POPUP.lab.guide.warning.content;
</script>

<style lang="scss" scoped>
.stack-wrapper {
  @include flexSet(flex-start, center, column);
  @include boxSet(100%, 100vh, 0px);
  gap: 40px;
  min-height: 100vh;
  padding: 24px;
  padding-bottom: 200px;
  overflow-y: scroll;
}
.content-box {
  @include flexSet(center, center, column);
  @include boxSet(100%, auto, 0px);
  gap: 40px;
}
.warning-wrapper {
  @include flexSet(center, flex-start, column);
  @include boxSet(100%, auto, 0px);
  gap: 8px;
  padding: 8px;
  color: $empty;
  background-color: #F7F7F7;
  border-radius: 8px;
  & > div {
    color: $required;
    @include fontSet(12px, 600, 20px);
  }
  & > p {
    @include fontSet(12px, 400, 20px);
    white-space: pre-line;
  }
}
</style>
