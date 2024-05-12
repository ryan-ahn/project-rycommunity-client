<template>
  <ul class="tab-wrapper">
    <li
      v-for="item in data"
      :key="item.id"
    >
      <AtomsButtonFunctionTab
        :text="item.name"
        :active="tab === item.value"
        :onClickFunction="() => onClickFunction(item.value)"
      />
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ITabLabProps } from '@interface/props';
// Props
const {
  tab,
  data,
  onClickFunction,
} = defineProps<ITabLabProps>();
</script>

<style lang="scss" scoped>
.tab-wrapper {
  @include flexSet(flex-start, center, row);
  @include boxSet(100%, auto, 0px);
  gap: 8px;
  padding: 10px 20px;
}
</style>
