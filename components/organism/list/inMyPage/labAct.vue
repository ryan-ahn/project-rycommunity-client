<template>
  <ul class="list-wrapper">
    <li
      v-for="item in data"
      :key="item.labInfo._id"
      class="list-box"
    >
      <OrganismItemInMypageThumbnailLabelCard
        :thumbnail="item.labInfo.thumbnail"
        :title="item.labInfo.name"
        :category="MYPAGE_USER_TYPE[item.userGrade]"
        :status="MYPAGE_LAB_JOIN_STATUS[item.userGrade] || (item.labInfo.status === 2 && (new Date(item.labInfo.startDate) < new Date()) ? '[활동중]' : MYPAGE_LAB_MY_STATUS[item.labInfo.status])"
        :invisible="invisible"
        :type="userGrade(item.userGrade) || status(item.labInfo.status, item.labInfo.startDate)"
        :onClickFunction="() => (item.labInfo.status === 0) ? onClickToastHandler(item.labInfo._id) : onClickFunction(item.labInfo._id)"
      />
    </li>
  </ul>
</template>

<script setup lang="ts">
import { IListInMypageLabProps } from '@interface/props';
import {
  MYPAGE_USER_TYPE,
  MYPAGE_LAB_MY_STATUS,
  MYPAGE_LAB_JOIN_STATUS,
} from '@assets/data/data';

// Props
const {
  data,
  invisible,
  onClickToastHandler,
  onClickFunction,
} = defineProps<IListInMypageLabProps>();

// Functions
const userGrade = (userGrade: number) => {
  if (userGrade === 1) return 'A';
  if (userGrade === 2) return 'B';
  if (userGrade === 3) return 'C';
  return '';
};

const status = (status: number, startDate: Date) => {
  if (status === 0 || (status === 2 && new Date(startDate) > new Date())) return 'A';
  if (status === 2 && new Date(startDate) < new Date()) return 'B';
  if (status === 3) return 'C';
  return '';
};

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
