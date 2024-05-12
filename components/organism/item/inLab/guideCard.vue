<template>
  <section class="card-wrapper">
    <AtomsTitleMediumNumber
      :header="header"
      :number="number"
    />
    <div class="content-wrapper">
      <div class="center-wrapper">
        {{ content }}
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { IWrapperLabGuideStackProps } from '@interface/props';
// Props
const {
  header,
  number,
  content,
} = defineProps<IWrapperLabGuideStackProps>();
</script>

<style lang="scss" scoped>
.card-wrapper{
  @include flexSet(center, center, column);
  @include boxSet(100%, auto, 0px);
}

.content-wrapper {
  @include flexSet(center, center, column);
  @include boxSet(100%, auto, 0px);
  @include fontSet(16px, 400, 24px);
  color: $black;
  .center-wrapper {
    display: inline-block;
    text-align: center;
    white-space: pre-line;
  }
}
</style>
