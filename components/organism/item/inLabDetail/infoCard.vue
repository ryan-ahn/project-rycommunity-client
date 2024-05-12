<template>
  <div class="item-wrapper">
    <div class="name-box">
      <h1>{{ labName }}</h1>
    </div>
    <div class="content-box">
      <div class="status-box">
        <p>{{ cardTitle }}</p>
        <p>{{ cardDescription }}</p>
      </div>
      <div class="info-container">
        <div class="info-box">
          <img
            :src="firstBoxIcon"
            alt="icon"
          >
          <p>{{ firstBoxData }}</p>
          <p>{{ firstBoxLabel }}</p>
        </div>
        <div class="info-box">
          <img
            :src="secondBoxIcon"
            alt="icon"
          >
          <p>{{ secondBoxData }}</p>
          <p>{{ secondBoxLabel }}</p>
        </div>
        <div class="info-box">
          <img
            :src="thirdBoxIcon"
            alt="icon"
          >
          <p>{{ thirdBoxData }}</p>
          <p>{{ thirdBoxLabel }}</p>
        </div>
      </div>
    </div>
    <div
      v-if="recruitStatus"
      class="toggle-box"
      @click="onClickToggle"
    >
      <p>{{ infoText }}</p>
      <img
        :src="`/icons/common/arrow-${infoToggle ? 'up' : 'down'}-gray.svg`"
        alt="arrow"
      >
    </div>
    <Transition name="display">
      <div
        v-if="infoToggle"
        class="meet-box"
      >
        <div class="text-box">
          <p>{{ firstMeetLabel }}</p>
          <p>{{ firstMeetData }}</p>
        </div>
        <div class="info-container">
          <div class="info-box">
            <img
              :src="weekIcon"
              alt="icon"
            >
            <p>{{ weekData }}</p>
            <p>{{ weekLabel }}</p>
          </div>
          <div class="info-box">
            <img
              :src="timeIcon"
              alt="icon"
            >
            <p>{{ timeData }}</p>
            <p>{{ timeLabel }}</p>
          </div>
          <div class="info-box">
            <img
              :src="placeIcon"
              alt="icon"
            >
            <p>{{ placeData }}</p>
            <p>{{ placeLabel }}</p>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { IItemInLabDetailInfoCardProps } from '@interface/props';
// Props
const {
  labName,
  cardTitle,
  cardDescription,
  firstBoxIcon,
  firstBoxData,
  firstBoxLabel,
  secondBoxIcon,
  secondBoxData,
  secondBoxLabel,
  thirdBoxIcon,
  thirdBoxData,
  thirdBoxLabel,
  infoText,
  infoToggle,
  firstMeetLabel,
  firstMeetData,
  weekIcon,
  weekData,
  weekLabel,
  timeIcon,
  timeData,
  timeLabel,
  placeIcon,
  placeData,
  placeLabel,
  onClickToggle,
} = defineProps<IItemInLabDetailInfoCardProps>();
</script>

<style lang="scss" scoped>
.item-wrapper {
  @include flexSet(center, center, column);
  @include boxSet(100%, auto, 20px);
  gap: 16px;
  padding: 24px 16px 16px 16px;
  background-color: rgba($white, 0.6);
  @include shadowSet(0, 2, 20, $shadow, 0.1);
  backdrop-filter: blur(10px);
}
.name-box {
  @include flexSet(center, center, row);
  @include boxSet(100%, auto, 0px);
  & > h1 {
    @include fontSet(32px, 800, 40px);
    @include ellipsisSet(3, 40px);
  }
}
.content-box {
  @include flexSet(center, center, column);
  @include boxSet(100%, auto, 8px);
  gap: 20px;
  padding: 16px;
  background-color: $gray01;
}
.status-box {
  & > p:nth-child(1) {
    margin-bottom: 4px;
    text-align: center;
    @include fontSet(16px, 700, 20px);
  }
  & > p:nth-child(2) {
    color: $gray05;
    @include fontSet(14px, 400, 22px);
    text-align: center;
  }
}
.info-container {
  @include flexSet(space-around, center, row);
  @include boxSet(100%, auto, 0px);
}
.info-box {
  @include flexSet(center, center, column);
  gap: 4px;
  & > img {
    @include boxSet(20px, 20px, 0px);
    object-fit: contain;
  }
  & > p:nth-child(2) {
    @include fontSet(14px, 700, 18px);
  }
  & > p:nth-child(3) {
    color: $gray05;
    @include fontSet(14px, 400, 18px);
  }
}
.toggle-box {
  @include flexSet(center, center, row);
  @include boxSet(100%, auto, 0px);
  gap: 4px;
  cursor: pointer;
  & > p {
    @include fontSet(14px, 400, 22px);
  }
  & > img {
    @include boxSet(20px, 20px, 0px);
  }
}
.text-box {
  @include flexSet(center, center, column);
  @include boxSet(100%, auto, 0px);
  gap: 4px;
  & > p:nth-child(1) {
    @include fontSet(16px, 700, 20px);
  }
  & > p:nth-child(2) {
    color: $gray05;
    @include fontSet(14px, 500, 22px);
  }
}
.meet-box {
  @include flexSet(center, center, column);
  @include boxSet(100%, auto, 0px);
  gap: 20px;
  padding: 16px 0;
}
</style>
