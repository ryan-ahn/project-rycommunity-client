<template>
  <div class="item-wrapper">
    <button
      class="button-box"
      @click="onClickFunction('joinLabKnow')"
    >
      <p>{{ know ? know.value : knowPlaceholder }}</p>
      <img
        src="/icons/common/arrow-down-gray.svg"
        alt="arrow"
      >
    </button>
    <AtomsInputSingleLine
      v-if="know && know.value === '기타(직접입력)'"
      type="inline"
      placeholder="내용을 입력해 주세요"
      :maxLength="100"
      :lengthShow="false"
      :onChangeValue="onChangeFunction"
    />
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useModalStore } from '@store/index';
import { IItemInJoinLabKnowProps } from '@interface/props';
// Hooks
const modalStore = useModalStore();
// Props
const {
  knowPlaceholder,
  onClickFunction,
  onChangeFunction,
} = defineProps<IItemInJoinLabKnowProps>();
// State
const { know } = storeToRefs(modalStore);
</script>

<style lang="scss" scoped>
.item-wrapper {
  @include flexSet(flex-start, flex-start, column);
  @include boxSet(100%, auto, 0px);
  gap: 8px;
}
.button-box {
  @include flexSet(space-between, center, row);
  @include boxSet(100%, auto, 8px);
  padding: 16px;
  cursor: pointer;
  border: 1px solid $gray03;
  & > p {
    color: $gray05;
    @include fontSet(16px, 400, 22px);
  }
  & > img {
    @include boxSet(24px, 24px, 0px);
    object-fit: cover;
  }
}
</style>
