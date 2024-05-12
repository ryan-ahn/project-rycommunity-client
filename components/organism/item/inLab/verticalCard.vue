<template>
  <div
    class="item-wrapper"
    :style="{ backgroundImage: `url(${background})` }"
  >
    <div class="button-box">
      <AtomsButtonFunctionChip
        v-for="item in category"
        :key="item._id"
        :type="chipType"
        :text="item.name"
      />
      <AtomsButtonFunctionChip
        v-if="recruitLabelStatus"
        :type="chipType"
        :text="recruitLabelText"
      />
    </div>
    <div class="content-box">
      <h1>{{ name }}</h1>
      <p>{{ summary }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IItemInLabListProps } from '@interface/props';
// Props
const {
  recruitLabelStatus,
  recruitLabelText,
  chipType,
  category,
  name,
  summary,
  background,
} = defineProps<IItemInLabListProps>();
</script>

<style lang="scss" scoped>
.item-wrapper {
  position: relative;
  overflow: hidden;
  cursor: pointer;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  @include flexSet(space-between, flex-start, column);
  @include boxSet(100%, 306px, 20px);
}
.button-box {
  @include flexSet(space-between, center, row);
  gap: 8px;
  padding: 16px;
}
.content-box {
  @include flexSet(flex-start, flex-start, column);
  @include boxSet(100%, auto, 0px);
  gap: 16px;
  padding: 16px;
  background-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);
  & > h1 {
    @include boxSet(100%, auto, 0px);
    @include fontSet(32px, 700, 40px);
    @include ellipsisSet(2, 40px);
  }
  & > p {
    @include boxSet(100%, auto, 0px);
    @include fontSet(16px, 400, 26px);
    @include ellipsisSet(3, 26px);
  }
}
</style>
