<template>
  <section class="stack-wrapper">
    <div class="content-box">
      <h1>{{ header }}</h1>
      <div>{{ content }}</div>
      <div class="content">
        <h2>{{ agreeTitle }}</h2>
        <div>{{ agreeContent }}</div>
      </div>
      <div class="content">
        <h2>{{ infoTitle }}</h2>
        <div>{{ infoContent }}</div>
      </div>
      <div class="warning">
        {{ warningContent }}
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { MODAL_POPUP } from '@assets/data/modal';

// State
const header = MODAL_POPUP.lab.policy.header;
const content = MODAL_POPUP.lab.policy.content;
const agreeTitle = MODAL_POPUP.lab.policy.agreeTitle;
const agreeContent = MODAL_POPUP.lab.policy.agreeContent;
const infoTitle = MODAL_POPUP.lab.policy.infoTitle;
const infoContent = MODAL_POPUP.lab.policy.infoContent;
const warningContent = MODAL_POPUP.lab.policy.warningContent;

</script>

<style lang="scss" scoped>
.stack-wrapper {
  @include flexSet(flex-start, center, column);
  @include boxSet(100%, auto, 0px);
  gap: 20px;
  max-height: calc(100vh - 150px);
  padding: 24px;
  overflow-y: scroll;
}
.content-box {
  gap: 20px;
  @include flexSet(center, flex-start, column);

  & > h1 {
    @include fontSet(20px, 700, 24px);
    white-space: pre-line;
  }
  & > div {
    @include flexSet(flex-start, flex-start, column);
    @include fontSet(14px, 400, 22px);
    overflow-y: scroll;
    color: $gray07;
    white-space: pre-line;
  }
  .warning {
    @include fontSet(14px, 400, 22px);
    color: $black;
  }
}
.content {
  & > h2 {
    @include fontSet(16px, 500, 24px);
    margin-bottom: 20px;
    color: $black;
  }
}

</style>
