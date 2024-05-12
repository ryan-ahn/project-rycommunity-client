<template>
  <div
    class="header-wrapper"
    :class="isMobileOrTablet ? 'mobile-wrapper' : 'desktop-wrapper'"
    :style="{
      backgroundColor: backColor,
    }"
  >
    <div
      v-if="checkGradientHeader(path) && backColor === 'transparent'"
      class="gradient-box"
    />
    <div class="left-box">
      <AtomsButtonFunctionIcon
        :icon="`/icons/common/arrow-back-${icon}.svg`"
        :width="24"
        :touch="48"
        :onClickFunction="onClickFunction"
      />
    </div>
    <h1
      v-if="title !== null"
      class="title-box"
    >
      {{ title }}
    </h1>
    <div
      v-if="right === 'share'"
      class="right-box"
    >
      <AtomsButtonFunctionIcon
        :icon="`/icons/common/share-${icon}.svg`"
        :width="24"
        :touch="48"
        :onClickFunction="onClickOpenShareModal"
      />
    </div>
    <div
      v-if="right === 'write'"
      class="right-box"
      @click="onClickWritePost"
    >
      <button
        class="text-box"
        :disabled="!post.length && !link.length"
      >
        <p>등록</p>
      </button>
    </div>
    <div
      v-if="right === 'edit'"
      class="right-box"
      @click="onClickEditPost"
    >
      <button
        class="text-box"
        :disabled="!post.length && !link.length"
      >
        <p>수정</p>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useLoungeStore } from '@store/index';
import { IHeaderInStackProps } from '@interface/props';
// Hooks
const { isMobileOrTablet } = useDevice();
const loungeStore = useLoungeStore();
// State
const {
  post,
  link,
} = storeToRefs(loungeStore);
// Props
const {
  path,
  title,
  right,
  backColor,
  icon,
  onClickFunction,
  onClickOpenShareModal,
  onClickWritePost,
  onClickEditPost,
} = defineProps<IHeaderInStackProps>();
</script>

<style lang="scss" scoped>
.header-wrapper {
  position: fixed;
  top: 0;
  @include boxSet(100%, 55px, 0px);
  @include flexSet(center, center, row);
  z-index: 98;
  transition: background-color 0.3s ease-out;
}
.gradient-box {
  position: absolute;
  top: 0;
  width: 100%;
  height: 200px;
  background-image: linear-gradient(
    to top,
    rgba($black, 0),
    rgba($black, 0.2)
  );
}
.left-box {
  position: absolute;
  left: 5px;
}
.right-box {
  position: absolute;
  right: 5px;
}
.title-box {
  @include fontSet(16px, 500, 24px);
}
.text-box {
  @include flexSet(center, center, row);
  @include boxSet(48px, 48px, 0px);
  & > p {
    padding: 12px;
    @include fontSet(14px, 700, 24px);
  }
}
button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
</style>
