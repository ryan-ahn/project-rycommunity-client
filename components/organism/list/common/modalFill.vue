<template>
  <ul class="list-wrapper">
    <li
      v-for="(item, index) in data"
      :key="index"
      class="list-box"
      @click="onClickFunction(item)"
    >
      <div class="item-box">
        <p>{{ item.name }}</p>
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { IListCommonModalFillProps } from '@interface/props';
// Props
const {
  data,
  onClickFunction,
} = defineProps<IListCommonModalFillProps>();
</script>

<style lang="scss" scoped>
.list-wrapper {
  @include boxSet(100%, auto, 0px);
  max-height: 340px;
  overflow-y: scroll;
}
.list-box {
  @include boxSet(100%, 100%, 0px);
  padding: 0px 20px 0px 20px;
}
.item-box {
  @include flexSet(flex-start, center, row);
  @include boxSet(100%, 52px, 0px);
  cursor: pointer;
}
</style>
