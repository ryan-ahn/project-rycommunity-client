<template>
  <div
    class="area-wrapper"
    :class="designSystem(type)"
  >
    <p>{{ message }}</p>
  </div>
</template>

<script setup lang="ts">
import { IAreaMessageProps } from '@interface/props';
// Props
const {
  message,
  type,
} = defineProps<IAreaMessageProps>();
// Functions
const designSystem = (type: string) => {
  switch (type) {
    case 'common':
      return 'common-design';
    case 'A':
      return 'typeA-design';
    default:
      return '';
  }
};
</script>

<style lang="scss" scoped>
.area-wrapper {
  @include boxSet(100%, auto, 8px);
  padding: 8px;
  & > p {
    @include fontSet(12px, 400, 20px);
    text-align: left;
  }
}

.common-design {
  background-color: $gray01;
}
.typeA-design {
  background-color: #FDF0FB;
}
</style>
