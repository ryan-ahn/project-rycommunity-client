<template>
  <div class="modal-wrapper">
    <div class="content-box">
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
    </div>
    <div class="button-box">
      <AtomsButtonModalSystem
        type="cancel"
        :text="cancelText"
        :onClickFunction="cancelFunction"
      />
      <AtomsButtonModalSystem
        type="confirm"
        :text="confirmText"
        :onClickFunction="confirmFunction"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { IModalSystemProps } from '@interface/props';
// Props
const {
  title,
  description,
  confirmText,
  cancelText,
  confirmFunction,
  cancelFunction,
} = defineProps<IModalSystemProps>();
</script>

<style lang="scss" scoped>
.modal-wrapper {
  position: relative;
  @include flexSet(center, center, column);
  @include boxSet(320px, auto, 16px);
  padding: 24px;
  background-color: white;
  @media (max-width: 320px) {
    width: auto;
  }
}
.content-box {
  @include flexSet(center, flex-start, column);
  @include boxSet(100%, auto, 0px);
  & > h2 {
    margin: 0 20px 16px 0;
    @include fontSet(24px, 500, 32px);
  }
  & > p {
    color: $gray07;
    @include fontSet(16px, 400, 24px);
  }
}
.button-box {
  @include flexSet(flex-end, center, row);
  @include boxSet(100%, auto, 0px);
  gap: 16px;
  padding-top: 24px;
}
</style>
