<template>
  <section class="stack-wrapper">
    <div class="content-box">
      <h1>{{ firstTitle }}</h1>
      <div>
        {{ firstContent }}
      </div>
    </div>
    <div class="content-box">
      <h1>{{ secondTitle }}</h1>
      <div>
        {{ secondContent }}
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { MODAL_POPUP } from '@assets/data/modal';

// State
const firstTitle = MODAL_POPUP.pop.marketing.title;
const firstContent = MODAL_POPUP.pop.marketing.content;
const secondTitle = MODAL_POPUP.pop.personal.title;
const secondContent = MODAL_POPUP.pop.personal.content;
</script>

<style lang="scss" scoped>
.stack-wrapper {
  @include flexSet(flex-start, center, column);
  @include boxSet(100%, 100vh, 0px);
  gap: 48px;
  min-height: 100vh;
  padding: 24px;
}

.content-box {
  gap: 20px;
  @include flexSet(center, flex-start, column);
  @include boxSet(100%, auto, 0px);
  max-height: calc(100vh - 150px);

  &>h1 {
    @include fontSet(20px, 700, 24px);
  }

  &>div {
    @include fontSet(14px, 400, 22px);
    @include flexSet(flex-start, center, column);
    max-height: calc(100vh - 230px);
    overflow-y: scroll;
    color: $gray07;
    white-space: pre-line;
  }
}</style>
