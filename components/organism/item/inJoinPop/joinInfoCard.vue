<template>
  <div class="item-wrapper">
    <AtomsNumberingLargeRound :number="2"/>
    <div class="title-box">
      <AtomsTitleLargeRequired
        :title="title"
        :required="required"
      />
      <p class="description-box">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { IItemInJoinPopJoinInfoProps } from '@interface/props';
// Props
const {
  title,
  required,
  description,
} = defineProps<IItemInJoinPopJoinInfoProps>();
</script>

<style lang='scss' scoped>
.item-wrapper {
  @include flexSet(flex-start, flex-start, column);
  gap: 20px;

}
.title-box {
  @include flexSet(flex-start, flex-start, column);
  gap: 8px;
  & > p {
    color: $gray07;
    @include fontSet(14px, 400, 22px);
  }
}
</style>
