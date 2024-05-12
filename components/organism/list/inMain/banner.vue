<template>
  <div class="g-list-wrapper">
    <Swiper
      :modules="[SwiperAutoplay, SwiperPagination]"
      :slides-per-view="1"
      :pagination="{ clickable: true }"
      :loop="true"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: true,
      }"
    >
      <SwiperSlide
        v-for="item in event"
        :key="item._id"
      >
        <OrganismItemInMainBannerCard
          :background="item.image"
          :onClickFunction="() => onClickFunction(item.link)"
        />
      </SwiperSlide>
      <SwiperSlide
        v-for="item in data1"
        :key="item._id"
      >
        <OrganismItemInMainBannerCard
          :background="item.thumbnail"
          :onClickFunction="() => onClickFunction(`event/${item._id}`)"
        />
      </SwiperSlide>
      <SwiperSlide
        v-for="item in data2"
        :key="item._id"
      >
        <OrganismItemInMainBannerCard
          id="edu-banner"
          :background="item.image"
          :onClickFunction="() => onClickFunction(item.link)"
        />
      </SwiperSlide>
      <SwiperSlide
        v-for="item in edu"
        :key="item._id"
      >
        <OrganismItemInMainBannerCard
          id="edu-banner"
          :background="item.image"
          :onClickFunction="() => onClickGoToLink(item.link)"
        />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup lang="ts">
import { IListInMainBannerProps } from '@interface/props';
// Props
const {
  data1,
  data2,
  event,
  edu,
  onClickFunction,
  onClickGoToLink,
} = defineProps<IListInMainBannerProps>();
</script>

<style lang="scss">
.g-list-wrapper {
  @include boxSet(100%, auto, 0px);
}
.swiper-slide {
  & > img {
    @include boxSet(100%, 133vw, 0px);
    object-fit: cover;
  }
}
.swiper-pagination {
  @include flexSet(flex-start, center, row);
  height: 25px;
  padding: 0 20px;
}

.swiper-horizontal > .swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal {
  /* bottom: var(--swiper-pagination-bottom, 80px); */
  width: auto;
}
.swiper-pagination-bullet {
  @include boxSet(12px, 2px, 2.5px);
  margin: 2.5px !important;
  background-color: $gray09 !important;
  opacity: 0.3;
}
.swiper-pagination-bullet-active {
  opacity: 1;
}
</style>
