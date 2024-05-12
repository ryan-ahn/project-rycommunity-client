<template>
  <div class="item-wrapper">
    <div
      v-for="body in content"
      :key="body._id"
      class="content-box"
    >
      <h1>{{ body.title }}</h1>
      <p v-html="body.body.replace(linkUseRex, toLink)"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IItemInPopDetailContentCardProps } from '@interface/props';
// Props
const { content } = defineProps<IItemInPopDetailContentCardProps>();
const toLink = '<a href="$1" target="_blank" style="word-break: break-all">$1</a>';

</script>

<style lang="scss" scoped>
.item-wrapper {
  @include flexSet(center, center, column);
  gap: 40px;
  padding: 0px 20px;
}
.content-box {
  @include boxSet(100%, auto, 0px);
  & > h1 {
    margin-bottom: 8px;
    @include fontSet(20px, 600, 24px);
    white-space: pre-wrap;
  }
  & > p {
    color: $gray07;
    @include fontSet(18px, 300, 26px);
    white-space: pre-wrap;
  }
  a {
    color: blue;
    text-decoration: underline;
    /* word-break: break-all; */
    cursor: pointer;
  }
}
</style>
