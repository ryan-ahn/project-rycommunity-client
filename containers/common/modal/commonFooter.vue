<template>
  <section class="stack-wrapper">
    <div class="content-box">
      <h1>{{ title }}</h1>
      <div>
        {{ content }}
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { MODAL_POPUP } from '@assets/data/modal';
// State
const title = MODAL_POPUP.policy.title;
const content = MODAL_POPUP.policy.content;
</script>

<style lang="scss" scoped>
.stack-wrapper {
  @include flexSet(flex-start, center, column);
  @include boxSet(100%, 100vh, 0px);
  gap: 20px;
  min-height: 100vh;
  padding: 24px;
}
.content-box {
  gap: 20px;
  max-height: calc(100vh - 150px);
  @include flexSet(center, flex-start, column);
  @include boxSet(100%, auto, 0px);
  & > h1 {
    @include fontSet(20px, 700, 24px);
  }
  & > div {
    max-height: calc(100vh - 230px);
    overflow-y: scroll;
    color: $gray07;
    word-break: break-all;
    white-space: pre-line;
    @include fontSet(14px, 400, 22px);
    @include flexSet(flex-start, center, column);
  }
}
</style>
