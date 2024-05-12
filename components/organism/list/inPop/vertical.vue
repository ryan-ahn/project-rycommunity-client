<template>
  <ul class="list-wrapper">
    <li
      v-for="item in data"
      :key="item.popInfo._id"
      class="list-box"
    >
      <OrganismItemCommonPopCard
        :thumbnail="item.popInfo.thumbnail"
        :offline="item.popInfo.offline"
        :offChipText="popChipText"
        :offChipType="popChipType"
        :live="item.popInfo.live"
        :liveChipText="liveChipText"
        :liveChipType="liveChipType"
        :onClickFunction="() => onClickGoToPopDetail(item.popInfo._id)"
      />
    </li>
    <li
      v-if="data && data.length === 0"
      class="empty-box"
    >
      <AtomsEmptyImageContent
        :image="emptyImage"
        :type="'empty-wrapper-pop'"
        :text="emptyText"
        :description="emptyDescription"
      />
    </li>
  </ul>
</template>

<script setup lang="ts">
import { IListInPopProps } from '@interface/props';
import { EMPTY_CONTENT } from '@assets/data/empty';
// Hooks
const router = useRouter();
// Props
const {
  data,
  popChipText,
  popChipType,
  liveChipText,
  liveChipType,
} = defineProps<IListInPopProps>();
// State
const emptyImage = EMPTY_CONTENT.pop.image;
const emptyText = EMPTY_CONTENT.pop.text;
const emptyDescription = EMPTY_CONTENT.pop.description;
// FUnctions
const onClickGoToPopDetail = (id: string) => {
  router.push(`/popdetail/${id}`);
};
</script>

<style lang="scss" scoped>
.list-wrapper {
  @include flexSet(flex-start, flex-start, column);
  @include boxSet(100%, auto, 0px);
  gap: 20px;
}
.list-box {
  @include boxSet(100%, auto, 0px);
}
.empty-box {
  @include boxSet(100%, auto, 0px);
}

</style>
