<template>
  <div class="input-wrapper">
    <div class="textarea-box">
      <input
        class="input-box"
        :type="type"
        :placeholder="placeholder"
        :maxlength="maxLength"
        @input="getEventTargetValue($event)"
      >
    </div>
  </div>
  <div
    v-if="lengthShow"
    class="length-box"
  >
    {{ validateInputMaxLength(value, maxLength) }}
  </div>
</template>

<script setup lang="ts">
import { IInputSingleLineProps } from '@interface/props';
// Props
const {
  placeholder,
  type,
  maxLength,
  lengthShow,
  onChangeValue,
} = defineProps<IInputSingleLineProps>();
// States
const value = ref('');
// Functions
const getEventTargetValue = (e: any) => {
  onChangeValue(e);
  value.value = e.target.value;
};
</script>

<style lang="scss" scoped>
.input-wrapper {
  @include flexSet(flex-start, flex-end, column);
  @include boxSet(100%, auto, 0px);
}
.textarea-box {
  @include boxSet(100%, auto, 8px);
  padding: 17px 16px;
  border: 1px solid $gray03;
  & > input {
    @include fontSet(16px, 400, 22px);
    width: 100%;
  }
}
.length-box {
  color: $gray05;
  text-align: end;
  @include fontSet(12px, 400, 22px);
}
</style>
