<template>
  <div class="profile-wrapper">
    <img
      :src="thumbnail"
      class="thumbnail-box"
      alt="thumbnail"
    >
    <div class="name-box">
      <div class="label-box">
        <p>{{ grade }}</p>
      </div>
      <p v-if="name">
        {{ name }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { I52ProfileProps } from '@interface/props';
// Props
const {
  thumbnail,
  grade,
  name,
} = defineProps<I52ProfileProps>();
</script>

<style lang="scss" scoped>
.profile-wrapper {
  @include flexSet(center, center, row);
  gap: 12px;
}
.thumbnail-box {
  @include boxSet(52px, 52px, 26px);
  object-fit: cover;
}
.name-box {
  @include flexSet(center, flex-start, column);
  gap: 4px;
  & > p:nth-child(2) {
    @include fontSet(14px, 400, 20px);
    @include ellipsisSet(1, 20px);
  }
}
.label-box {
  @include boxSet(auto, auto, 9px);
  padding: 0px 6px;
  background-color: $black;
  & > p {
    color: white;
    @include fontSet(12px, 600, 18px);
  }
}
</style>
