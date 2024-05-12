<template>
  <button
    class="link-wrapper"
    :disabled="type === 'post'"
    @click="() => onClickGoToLink(url)"
  >
    <div class="thumbnail-box">
      <img
        :src="crawlingImage ? crawlingImage : '/images/empty-link.png'"
        alt="thumbnail"
      >
    </div>
    <div
      class="content-box"
      :style="{ width: type === 'post' ? 'calc(100% - 90px)' : '100%' }"
    >
      <h2>{{ crawlingTitle ? crawlingTitle : '' }}</h2>
      <p>
        {{ crawlingDescription ? crawlingDescription : '' }}
      </p>
      <p>{{ url }}</p>
    </div>
    <button
      v-if="type === 'post'"
      class="button-box"
      @click.stop="onClickFunction"
    >
      <img
        src="/icons/common/x-round.svg"
        alt="close"
      >
    </button>
  </button>
</template>

<script setup lang="ts">
import { ILinkEnteredProps } from '@interface/props';
// Props
const {
  type,
  url,
  crawlingTitle,
  crawlingDescription,
  crawlingImage,
  onClickFunction,
  onClickGoToLink,
} = defineProps<ILinkEnteredProps>();
</script>

<style lang="scss" scoped>
.link-wrapper {
  position: relative;
  @include flexSet(flex-start, center, row);
  @include boxSet(100%, 62px, 8px);
  gap: 8px;
  padding: 4px;
  background-color: $gray01;
}
.thumbnail-box {
  @include boxSet(54px, 54px, 4px);
  overflow: hidden;
  & > img {
    @include boxSet(100%, 100%, 0px);
    object-fit: cover;
  }
}
.content-box {
  & > h2 {
    color: $gray09;
    @include fontSet(12px, 500, 16px);
    @include ellipsisSet(1, 16px);
  }
  & > p:nth-child(2) {
    color: $gray07;
    @include fontSet(12px, 500, 16px);
    @include ellipsisSet(1, 16px);
  }
  & > p:nth-child(3) {
    color: $gray05;
    @include fontSet(12px, 500, 16px);
    @include ellipsisSet(1, 16px);
  }
}
.button-box {
  position: absolute;
  top: 4px;
  right: 4px;
  @include boxSet(20px, 20px, 0px);
  cursor: pointer;
  & > img {
    @include boxSet(100%, 100%, 0px);
    object-fit: contain;
  }
}
</style>
