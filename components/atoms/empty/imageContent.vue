<template>
  <div
    class="empty-wrapper"
    :class="type"
  >
    <img
      :src="image ? image : ''"
      alt="empty"
    >
    <div class="word-wrapper">
      <p>{{ text }}</p>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IEmptyImageContentProps } from '@interface/props';

// Props
const {
  image,
  text,
  type,
  description,
} = defineProps<IEmptyImageContentProps>();
</script>

<style lang="scss" scoped>
.empty-wrapper {
  @include flexSet(center, center, column);
  @include boxSet(100%, auto, 0px);
  padding: 100px 0;
  & > img {
    @include flexSet(center, center, column);
    @include boxSet(48px, 64px, 0px);
    margin-bottom: 22px;
  }
}

.word-wrapper {
  gap: 4px;
  @include flexSet(center, center, column);
  & > p:nth-child(1) {
    color: $empty;
    @include fontSet(18px, 400, 26px);
  }
  & > p:nth-child(2) {
    color: $empty;
    @include fontSet(15px, 400, 20px);
  }
}

.empty-wrapper-pop {
  & > img {
    @include boxSet(100px, 100px, 0px);
  }
  .word-wrapper {
    & > p {
      color: $gray05;
    }
  }
}
</style>
