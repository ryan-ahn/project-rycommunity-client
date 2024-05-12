<template>
  <ul class="list-wrapper">
    <li
      v-for="item in data"
      :key="item.popInfo._id"
      class="list-box"
    >
      <OrganismItemInMypageThumbnailLabelCard
        :thumbnail="item.popInfo.thumbnail"
        :title="item.popInfo.title"
        :category="validateDate(item.popInfo.date, '월일') + ' 일정'"
        :status="item.applicantInfo.onoff === '온라인 참여' ? '[온라인]' : '[오프라인]'"
        :invisible="invisible"
        :type="type"
        :onClickFunction="() => onClickFunction(item.popInfo._id)"
      />
    </li>
  </ul>
</template>

<script setup lang="ts">
import { IListInMypagePopProps } from '@interface/props';

// Props
const {
  data,
  invisible,
  type,
  onClickFunction,
} = defineProps<IListInMypagePopProps>();

</script>

<style lang="scss" scoped>
.list-wrapper {
  @include flexSet(flex-start, center, column);
  @include boxSet(100%, auto, 0px);
  margin-bottom: 40px;
}

.list-box {
  @include boxSet(100%, auto, 0px);
}

.list-box:last-of-type {
  & > .item-wrapper {
    border-bottom: none;
  }
}

.title-box {
  padding: 16px 0;
}

</style>
