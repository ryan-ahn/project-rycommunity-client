<template>
  <div class="item-wrapper">
    <button class="input-box">
      <label for="button-box">
        <img
          src="/icons/lounge/add-image-button.svg"
          alt="image"
        >
        <p class="text-box">
          <span>{{ count }}</span>
          <span>/</span>
          <span>5</span>
        </p>
      </label>
      <input
        id="button-box"
        class="button-box"
        type="file"
        multiple
        @input="onClickAddImage($event)"
      >
    </button>
    <li
      v-for="(item, index) in editImageList"
      :key="index"
      class="list-box"
    >
      <img
        :src="item.origin"
        alt="preview"
        class="image-box"
      >
      <div
        class="float-box"
        @click.stop="onClickRemoveImage(index, 'edit')"
      >
        <img
          src="/icons/common/x-round.svg"
          alt="x"
        >
      </div>
    </li>
    <li
      v-for="(item, index) in imageList"
      :key="index"
      class="list-box"
    >
      <img
        :src="item.url"
        alt="preview"
        class="image-box"
      >
      <div
        class="float-box"
        @click.stop="onClickRemoveImage(index, 'preview')"
      >
        <img
          src="/icons/common/x-round.svg"
          alt="x"
        >
      </div>
    </li>
  </div>
</template>

<script setup lang='ts'>
import { IItenInCreatePostImageCardProps } from '@interface/props';
// Props
const {
  count,
  imageList,
  editImageList,
  onClickAddImage,
  onClickRemoveImage,
} = defineProps<IItenInCreatePostImageCardProps>();
</script>

<style lang='scss' scoped>
.item-wrapper {
  @include boxSet(100%, auto, 0px);
  @include flexSet(flex-start, center, row);
  gap: 10px;
  -webkit-animation: fade-in 0.3s ease-in-out;
  animation: fade-in 0.3s ease-in-out;
}
.input-box label {
  display: inline-block;
  @include flexSet(center, center, column);
  @include boxSet(60px, 60px, 8px);
  gap: 2px;
  border: 1px solid $gray03;
}
.input-box input[type="file"] {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip:rect(0,0,0,0);
  border: 0;
}
.text-box {
  @include flexSet(center, center, row);
  gap: 2px;
  @include fontSet(10px, 500, 16px);
}
.list-box {
  position: relative;
  height: 60px;
}
.image-box {
  @include boxSet(60px, 60px, 8px);
  object-fit: cover;
  border: 1px solid rgba($gray03, 0.3);
}
.float-box {
  position: absolute;
  top: 0;
  right: 0;
  & > img {
    @include boxSet(20px, 20px, 10px);
  }
}
</style>
