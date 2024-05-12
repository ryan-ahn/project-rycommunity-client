<template>
  <ul class="list-wrapper">
    <Swiper :slides-per-view="1">
      <SwiperSlide
        v-for="item in data"
        :key="item.popInfo._id"
        :v-if="data !== null"
      >
        <div class="slide-box">
          <OrganismItemCommonPopCard
            :thumbnail="item.popInfo.thumbnail"
            :offline="item.popInfo.offline"
            :offChipType="offChipType"
            :offChipText="offChipText"
            :live="item.popInfo.live"
            :liveChipType="liveChipType"
            :liveChipText="liveChipText"
            :onClickFunction="() => onClickFunction(item.popInfo._id)"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  </ul>
</template>

<script setup lang="ts">
import { IListInMainPopProps } from '@interface/props';
import { BUTTON_FUNCTION_CHIP } from '@assets/data/button';
// Props
const {
  data,
  onClickFunction,
} = defineProps<IListInMainPopProps>();
// State
const offChipType = BUTTON_FUNCTION_CHIP.pop.off.type;
const offChipText = BUTTON_FUNCTION_CHIP.pop.off.text;
const liveChipType = BUTTON_FUNCTION_CHIP.pop.live.type;
const liveChipText = BUTTON_FUNCTION_CHIP.pop.live.text;
</script>

<style lang="scss" scoped>
.list-wrapper {
  @include boxSet(100%, auto, 0px);
}
.slide-box {
  padding: 0 20px;
}
</style>
