<template>
  <div
    class="item-wrapper"
    :class="isMobileOrTablet ? 'mobile-wrapper' : 'desktop-wrapper'"
  >
    <input
      :value="comment"
      :placeholder="placeholder"
      @input="onChangeFunction"
      @keypress.enter="onKeyupFunction"
    >
    <img
      :class="comment && comment.length > 0 ? 'active' : 'inactive'"
      :src="comment && comment.length > 0 ? '/icons/common/arrow-circle-up.svg' : '/icons/common/arrow-up-round.svg' "
      alt="arrow"
      @click="onClickFunction"
    >
  </div>
</template>

<script setup lang="ts">
import { IItemInPostDetailFloatProps } from '@interface/props';
// Hooks
const { isMobileOrTablet } = useDevice();
// Props
const {
  comment,
  placeholder,
  onKeyupFunction,
  onChangeFunction,
  onClickFunction,
} = defineProps<IItemInPostDetailFloatProps>();
</script>

<style lang="scss" scoped>
.item-wrapper {
  position: fixed;
  bottom: 0;
  padding: 20px;
  background-color: white;
  border-top: 1px solid $gray01;
  @include flexSet(space-between, center, row);
  @include boxSet(100%, 60px, 0px);
  & > input {
    @include boxSet(100%, auto, 0px);
    @include fontSet(18px, 500, 20px);
  }
  & > input::placeholder {
    color: $gray04;
  }
  & > img {
    @include boxSet(40px, 40px, 0px);
    cursor: auto;
  }
  & > .active:hover {
    cursor: pointer;
    background-image: url('/icons/common/arrow-circle-hover.svg');
  }
  & > .inactive {
    cursor: not-allowed;
  }
}

</style>
