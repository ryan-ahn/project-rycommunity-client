<template>
  <div
    class="item-wrapper"
    :class="isMobileOrTablet ? 'mobile-wrapper' : 'desktop-wrapper'"
  >
    <div class="flex-row-space-box">
      <div class="text-box">
        <label>{{ text }}</label>
        <p>
          {{
            `${validateDate(endDate, '월일요')} ${validateTime(
              endTime,
              '오시',
            )}까지`
          }}
        </p>
      </div>
      <AtomsButtonMainFill
        :type="buttonType"
        :text="buttonText"
        :onClickFunction="() => onClickFunction(link)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { IItemInPopDetailFloatCardProps } from '@interface/props';
// Hooks
const { isMobileOrTablet } = useDevice();
// Props
const {
  text,
  endDate,
  endTime,
  link,
  buttonType,
  buttonText,
  onClickFunction,
} = defineProps<IItemInPopDetailFloatCardProps>();
</script>

<style lang="scss" scoped>
.item-wrapper {
  position: fixed;
  bottom: 0;
  @include flexSet(center, center, row);
  padding: 0 20px;
  @include boxSet(100%, 84px, 0px);
  background-color: $gray01;
}
.text-box {
  & > label {
    color: $gray07;
    @include fontSet(14px, 400, 20px);
  }
  & > p {
    @include fontSet(14px, 600, 24px);
    @include ellipsisSet(1, 24px);
  }
}
</style>
