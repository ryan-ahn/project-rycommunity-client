<template>
  <div class="profile-wrapper">
    <div class="profile-bar">
      <div class="profile-box">
        <img
          :src="thumbnailData"
          alt="thumbnail"
        >
        <p>{{ nameData }}</p>
      </div>
      <img
        :src="`/icons/common/arrow-${open ? 'up' : 'down'}-black.svg`"
        alt="arrow"
        @click="onClickFunction"
      >
    </div>
    <TransitionGroup name="display">
      <div
        v-if="open"
        class="item-box"
      >
        <div class="label-box">
          <p>{{ phoneLabel }}</p>
          <p>*</p>
        </div>
        <p>{{ phoneData }}</p>
      </div>
      <div
        v-if="open"
        class="item-box"
      >
        <div class="label-box">
          <p>{{ emailLabel }}</p>
          <p>*</p>
        </div>
        <p>{{ emailData }}</p>
      </div>
    </TransitionGroup>
  </div>
</template>

<script setup lang="ts">
import { IProfileToggleProps } from '@interface/props';
// Props
const {
  thumbnailData,
  nameData,
  phoneLabel,
  phoneData,
  emailLabel,
  emailData,
  open,
  onClickFunction,
} = defineProps<IProfileToggleProps>();
</script>

<style lang="scss" scoped>
.profile-wrapper {
  @include flexSet(flex-start, flex-start, column);
  @include boxSet(100%, auto, 8px);
  gap: 20px;
  padding: 10px;
  border: 1px solid $black;
}
.profile-bar {
  @include flexSet(space-between, center, row);
  @include boxSet(100%, auto, 8px);
  & > img {
    @include boxSet(24px, 24px, 0px);
    cursor: pointer;
  }
}
.profile-box {
  @include flexSet(flex-start, center, row);
  gap: 12px;
  & > img {
    @include boxSet(40px, 40px, 20px);
    object-fit: cover;
  }
  & > p {
    @include fontSet(16px, 500, 24px);
  }
}
.item-box {
  @include flexSet(flex-start, flex-start, column);
  gap: 4px;
  & > p {
    @include fontSet(16px, 500, 24px);
  }
}
.label-box {
  @include flexSet(flex-start, center, row);
  gap: 4px;
  & > p:nth-child(1) {
    color: $gray07;
    @include fontSet(15px, 400, 20px);
  }
  & > p:nth-child(2) {
    color: red;
    @include fontSet(16px, 500, 24px);
  }
}
</style>
