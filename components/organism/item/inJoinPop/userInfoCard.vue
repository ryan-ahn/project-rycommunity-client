<template>
  <div class="item-wrapper">
    <AtomsNumberingLargeRound :number="1"/>
    <AtomsTitleLargeRequired
      :title="title"
      :required="required"
    />
    <div class="profile-box">
      <img
        :src="data.profileImage"
        alt="thumbnail"
      >
      <div>
        <p>{{ data.name }}</p>
        <p>{{ data.phone }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { IItemInJoinPopUserInfoProps } from '@interface/props';
// Props
const {
  data,
  title,
  required,
} = defineProps<IItemInJoinPopUserInfoProps>();
</script>

<style lang='scss' scoped>
.item-wrapper {
  @include flexSet(flex-start, flex-start, column);
  gap: 20px;
}
.profile-box {
  @include flexSet(flex-start, flex-start, row);
  gap: 12px;
  & > img {
    @include boxSet(62px, 62px, 31px);
    object-fit: cover;
  }
  & > div {
    @include flexSet(flex-start, flex-start, column);
    gap: 8px;
    & > p:nth-child(1) {
      color: $gray07;
      @include fontSet(18px, 500, 26px);
    }
    & > p:nth-child(2) {
      color: $gray07;
      @include fontSet(14px, 500, 20px);
    }
  }
}
</style>
