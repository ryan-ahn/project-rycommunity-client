<template>
  <div class="item-wrapper">
    <div v-if="!isLoading && !crawlingUrl">
      <AtomsLinkUnentered
        :url="url"
        :placeholder="placeholder"
        :buttonText="buttonText"
        :onInputFunction="onInputFunction"
        :onClickFunction="onClickFunction"
      />
    </div>
    <div
      v-if="isLoading"
      class="loading-box"
    >
      <AtomsLoadingRing/>
    </div>
    <div v-if="!isLoading && crawlingUrl">
      <AtomsLinkEntered
        type="post"
        :url="url"
        :crawlingUrl="crawlingUrl"
        :crawlingTitle="crawlingUrl.title"
        :crawlingDescription="crawlingUrl.description"
        :crawlingImage="crawlingUrl.image"
        :onClickFunction="onClickInitPostLink"
        :onClickGoToLink="onClickGoToLink"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { IItemInCreatePostLinkCardProps } from '@interface/props';
// Props
const {
  url,
  crawlingUrl,
  isLoading,
  placeholder,
  buttonText,
  onInputFunction,
  onClickFunction,
  onClickGoToLink,
  onClickInitPostLink,
} = defineProps<IItemInCreatePostLinkCardProps>();
</script>

<style lang="scss" scoped>
.item-wrapper {
  @include boxSet(100%, auto, 0px);
  -webkit-animation: fade-in 0.3s ease-in-out;
  animation: fade-in 0.3s ease-in-out;
}
.loading-box {
  @include flexSet(center, center, row);
  @include boxSet(100%, 62px, 8px);
  border: 1px solid $gray03;
}
</style>
