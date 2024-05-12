<template>
  <div class="input-wrapper">
    <textarea
      ref="textArea"
      :value="post"
      class="text-box"
      :style="{ minHeight: height }"
      :placeholder="placeholder"
      :maxlength="maxLength"
      :minlength="minLength"
      @input="onChangeTextAreaHeight"
    />
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useLoungeStore } from '@store/index';
import { IInputAutoSizeProps } from '@interface/props';
// Hooks
const loungeStore = useLoungeStore();
// State
const textArea = ref<Ref<HTMLElement> | null>(null);
const { post } = storeToRefs(loungeStore);
// Function
const onChangeTextAreaHeight = (e: any) => {
  onInputFunction(e);
  if (e.target.value.length > 0 && textArea.value !== null) {
    textArea.value.style.height = 'auto';
    textArea.value.style.height = `${textArea.value.scrollHeight}px`;
  }
};

// Props
const {
  height,
  placeholder,
  minLength,
  maxLength,
  onInputFunction,
} = defineProps<IInputAutoSizeProps>();
</script>

<style lang="scss" scoped>
.input-wrapper {
  position: relative;
  @include boxSet(100%, auto, 0px);
}
.text-box {
  @include boxSet(100%, auto, 0px);
  @include fontSet(16px, 400, 24px);
  min-height: 200px;
  padding: 20px;
  white-space: pre-wrap;
  background-color: $gray01;
  border-radius: 10px;
}
textarea::placeholder {
  color: $gray04;
}
</style>
