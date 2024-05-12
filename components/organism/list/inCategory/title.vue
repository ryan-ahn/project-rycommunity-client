<template>
  <ul class="list-wrapper">
    <li
      v-for="item in data"
      :key="item.id"
      class="list-box"
    >
      <div class="title-box">
        <AtomsTitleLargeNumber
          :number="item.order"
          :title="item.name"
        />
      </div>
      <OrganismListInCategoryPop
        :data="item.popList"
        :onClickFunction="onClickFunction"
      />
      <OrganismListInCategoryLab
        :data="item.labList"
        :onClickFunction="onClickFunction"
      />
    </li>
  </ul>
</template>

<script setup lang="ts">
import { IListInCategoryTitleProps } from '@interface/props';
// Props
const {
  data,
  onClickFunction,
} = defineProps<IListInCategoryTitleProps>();
</script>

<style lang="scss" scoped>
.list-wrapper {
  @include flexSet(flex-start, flex-start, column);
  gap: 40px;
}
.list-box {
  @include boxSet(100%, auto, 0px);
}
.title-box {
  padding: 16px 0;
}
</style>
