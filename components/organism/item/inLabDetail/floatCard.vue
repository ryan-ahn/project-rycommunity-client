<template>
  <div
    class="item-wrapper"
    :class="isMobileOrTablet ? 'mobile-vw-wrapper' : 'desktop-wrapper'"
  >
    <div
      class="like-box"
      @click="onClickLabLike(labId)"
    >
      <img
        :src="`/icons/lab/heart-${likeStatus ? 'red' : 'gray'}.svg`"
        alt="heart"
      >
      <p>{{ likeCount }}</p>
    </div>
    <AtomsButtonMainFill
      class="button-wrapper"
      :disabled="detail?.labMembers.myStatus !== 0 && detail?.periodStatus.recruitStatus === false ? true : false"
      :type="buttonType"
      :text="buttonText"
      :onClickFunction="() => onClickGoToStack(myStatus, labId)"
    />
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useLabStore } from '@store/index';
import { IItemInLabDetailFloatCardProps } from '@interface/props';

// Hooks
const { isMobileOrTablet } = useDevice();
const labStore = useLabStore();

// Props
const {
  labId,
  myStatus,
  likeStatus,
  likeCount,
  recruitStatus,
  buttonType,
  buttonText,
  onClickLabLike,
  onClickGoToStack,
} = defineProps<IItemInLabDetailFloatCardProps>();
// State
const { detail } = storeToRefs(labStore);
</script>

<style lang="scss" scoped>
.item-wrapper {
  position: fixed;
  bottom: 0;
  @include flexSet(space-between, center, row);
  @include boxSet(100%, 80px, 0px);
  gap: 20px;
  padding: 16px;
  background-color: white;
  @include shadowSet(0, -10, 30, $shadow, 0.05);
}
.like-box {
  @include flexSet(center, center, column);
  & > img {
    @include boxSet(20px, 20px, 0px);
  }
  & > p {
    @include fontSet(10px, 500, 16px);
  }
}
.button-wrapper {
  button {
    @include colorSet($white, $theme01);
    &:disabled {
      cursor: not-allowed;
      @include colorSet($white, black);
      opacity: 0.3;
    }
  }
}
</style>
