<template>
  <section class="stack-wrapper">
    <AtomsTitleMediumCommon
      v-if="ongoingPopList && ongoingPopList.length > 0"
      :title="stackTitle"
    />
    <OrganismListInPopVertical
      v-if="ongoingPopList"
      :data="ongoingPopList"
      :popChipText="popChipText"
      :popChipType="popChipType"
      :liveChipText="liveChipText"
      :liveChipType="liveChipType"
    />
    <SkeletonInPopVertical v-if="!ongoingPopList"/>
  </section>
  <section class="area-wrapper">
    <div
      v-if="finishedPopList"
      class="title-wrapper"
    >
      <AtomsTitleMediumCommon :title="pastStackTitle"/>
    </div>
    <OrganismListInPopPastVertical
      v-if="finishedPopList"
      :data="finishedPopList"
      :category="popLabel"
      :onClickFunction="onClickGoToStack"
    />
    <div v-if="finishedPopList && finishedPopList.length === 0">
      <AtomsEmptyImageContent
        :image="imageContent"
        :text="emptyContent"
        :type="''"
        :description="null"
      />
    </div>
    <AtomsButtonShowMore
      v-if="finishedPopList && finishedPopCount > 5"
      :text="buttonText"
      :onClickFunction="onClickShowMore"
      :disabled="finishedPopList.length === finishedPopCount"
    />
  </section>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useMainStore } from '@store/index';
import { TITLE_COMMON } from '@assets/data/title';
import { EMPTY_CONTENT } from '@assets/data/empty';
import { POP_LABEL } from '@assets/data/data';
import {
  BUTTON_FUNCTION_CHIP,
  BUTTON_COMMON,
} from '@assets/data/button';
// Hooks
const mainStore = useMainStore();
const router = useRouter();
const offset = ref(0);
// State
const {
  ongoingPopList,
  finishedPopList,
  finishedPopCount,
} = storeToRefs(mainStore);
const stackTitle = TITLE_COMMON.pop.ing.title;
const pastStackTitle = TITLE_COMMON.pop.past.title;
const popChipText = BUTTON_FUNCTION_CHIP.pop.off.text;
const popChipType = BUTTON_FUNCTION_CHIP.pop.off.type;
const liveChipText = BUTTON_FUNCTION_CHIP.pop.live.text;
const liveChipType = BUTTON_FUNCTION_CHIP.pop.live.type;
const popLabel = POP_LABEL[0];
const imageContent = EMPTY_CONTENT.pastPop.image;
const emptyContent = EMPTY_CONTENT.pastPop.text;
const buttonText = BUTTON_COMMON.showMore.text;

// Functions
const onClickGoToStack = (id: string) => {
  router.push(`/popdetail/${id}`);
};

const onClickShowMore = () => {
  if (finishedPopList.value && finishedPopList.value.length !== finishedPopCount.value) {
    offset.value += 5;
    mainStore.getFinishedPopList({
      offset: offset.value,
    });
  }
};

// Cycle
onMounted(() => {
  if (ongoingPopList.value === null) {
    mainStore.getOngoingPopList();
  }
  if (finishedPopList.value === null) {
    mainStore.getFinishedPopList({
      offset: offset.value,
    });
  }
});
</script>

<style lang="scss" scoped>
.stack-wrapper {
  @include flexSet(flex-start, flex-start, column);
  @include boxSet(100%, auto, 0px);
  gap: 20px;
  padding: 85px 20px 50px 20px;
}
.area-wrapper {
  @include boxSet(100%, auto, 0px);
  padding: 24px 20px 32px 20px;
  background-color: $gray01;
  & > p {
    @include fontSet(12px, 400, 20px);
    text-align: left;
  }
}
.title-wrapper {
  margin-bottom: 16px;
}
</style>
