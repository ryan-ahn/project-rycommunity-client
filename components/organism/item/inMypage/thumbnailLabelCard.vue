<template>
  <div
    class="item-wrapper"
    @click="onClickFunction"
  >
    <img
      :src="thumbnail"
      alt="thumbnail"
    >
    <div>
      <h2>{{ title }}</h2>
      <div
        class="line-wrapper"
        :class="statusClass(type)"
      >
        <span :class="finishedClass(invisible)">{{ status }}</span>
        <span :class="visibilityClass(invisible)">{{ category }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IItemInMyPageThumbnailLabelProps } from '@interface/props';

// Props
const {
  thumbnail,
  title,
  status,
  category,
  invisible,
  type,
  onClickFunction,
} = defineProps<IItemInMyPageThumbnailLabelProps>();

// Functions
const visibilityClass = (invisible: boolean) => (invisible ? 'invisible' : '');
const finishedClass = (invisible: boolean) => (invisible ? 'finished' : '');
const statusClass = (type: string) => {
  switch (type) {
    case 'A':
      return 'red-text';
    case 'B':
      return 'black-text';
    case 'C':
      return 'gray-text';
    default:
      return '';
  }
};

</script>

<style lang="scss" scoped>
.item-wrapper {
  @include flexSet(flex-start, center, row);
  @include boxSet(100%, 100px, 0px);
  gap: 12px;
  cursor: pointer;
  border-bottom: 0.5px solid $gray03;

  &>img {
    @include boxSet(104px, 80px, 8px);
    object-fit: cover;
    object-position: 0 20%;
  }

  &>div {
    @include flexSet(flex-start, flex-start, column);
    @include boxSet(calc(100% - 116px), 80px, 0px);
    gap: 4px;
    &>p {
      color: $gray05;
      @include fontSet(12px, 400, 16px);
      @include ellipsisSet(1, 16px);
    }

    &>h2 {
      @include fontSet(16px, 500, 24px);
      @include ellipsisSet(2, 24px);
    }
  }
}
.line-wrapper {
  @include flexSet(space-between, center, row);
  @include boxSet(100%, auto, 0px);
  @include fontSet(14px, 500, 20px);
  padding: 6px 0;
  & > .finished {
    color: $gray05;
  }
}

.red-text {
  color: $theme01;
}
.black-text {
  color: $black;
}
.gray-text {
  color: $gray05;
}

.invisible {
  visibility: hidden;
}

</style>
