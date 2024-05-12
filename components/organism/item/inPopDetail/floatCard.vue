<template>
  <div
    class="item-wrapper"
    :class="isMobileOrTablet ? 'mobile-wrapper' : 'desktop-wrapper'"
  >
    <div class="content-box">
      <div
        v-if="validateDateAndTime(endDate, endDateTime) > today"
        class="text-box"
      >
        <label>{{ text }}</label>
        <p>
          <span>
            {{
              `${validateDate(endDate, '월일요')}`
            }}
          </span>
          <span v-if="endDateTime">
            {{ `${validateTime(
              endDateTime,
              '오시',
            )}` }}
          </span>
          <span>
            {{ '까지' }}
          </span>
        </p>
      </div>
      <AtomsButtonMainFill
        :type="buttonType"
        :text="buttonText"
        :disabled="disabled"
        :onClickFunction="() => onClickFunction(id)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useToDay } from '@utils/useDate';
import { IItemInPopDetailFloatCardProps } from '@interface/props';
// Hooks
const { isMobileOrTablet } = useDevice();
const today = useToDay();
// Props
const {
  id,
  disabled,
  text,
  endDate,
  endDateTime,
  buttonType,
  buttonText,
  onClickFunction,
} = defineProps<IItemInPopDetailFloatCardProps>();

</script>

<style lang="scss" scoped>
.item-wrapper {
  position: fixed;
  bottom: 0;
  gap: 20px;
  padding: 0 20px;
  background-color: white;
  @include flexSet(center, center, row);
  @include boxSet(100%, 84px, 0px);
  @include shadowSet(0, -4, 16, #000, 0.07);
}
.content-box {
  @include flexSet(space-between, center, row);
  @include boxSet(100%, auto, 0px);
  gap: 20px;
}
.text-box {
  & > label {
    color: $gray07;
    @include fontSet(14px, 400, 20px);
  }
  & > p {
    @include ellipsisSet(1, 24px);
    white-space: nowrap;
    & > span {
      @include fontSet(14px, 600, 24px);
    }
  }
}
</style>
