<template>
  <div
    class="event-wrapper"
    :class="isMobileOrTablet ? 'mobile-wrapper' : 'desktop-wrapper'"
  >
    <img
      src="/temp/banner1-1.jpg"
      alt="banner"
    >
    <div
      class="item-box"
      :class="isMobileOrTablet ? 'mobile-wrapper' : 'desktop-wrapper'"
    >
      <div class="flex-row-space-box">
        <div class="text-box">
          <label>{{ label }}</label>
          <p>{{ description }}</p>
        </div>
        <AtomsButtonMainFill
          type="inline"
          text="랩 개설하러 가기"
          :onClickFunction="() => onClickRouteToLab()"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useModalStore } from '@store/index';
// Hooks
const { isMobileOrTablet } = useDevice();
const modalStore = useModalStore();
const onClickRouteToLab = () => {
  modalStore.setOpenModal('createLab');
};
// State
const label = '페이퍼샵';
const description = '도전해보세요';
// Cycle
onBeforeMount(() => {
  // useScrollTop();
});
</script>

<style lang="scss" scoped>
.event-wrapper {
  position: relative;
  & > img {
    width: 100%;
  }
}
.item-box {
  position: fixed;
  bottom: 0;
  @include flexSet(center, center, row);
  padding: 0 20px;
  @include boxSet(100%, 84px, 0px);
  background-color: $gray01;
}
.text-box {
  & > label {
    color: $gray07;
    @include fontSet(16px, 300, 20px);
  }
  & > p {
    @include fontSet(16px, 500, 24px);
  }
}
</style>
