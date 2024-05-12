<template>
  <div
    class="header-wrapper"
    :class="isMobileOrTablet ? 'mobile-wrapper' : 'desktop-wrapper'"
  >
    <h1>{{ title }}</h1>
  </div>
</template>

<script setup lang="ts">
import { IHeaderInPageProps } from '@interface/props';
// Hooks
const { isMobileOrTablet } = useDevice();
// Props
const { title } = defineProps<IHeaderInPageProps>();
</script>

<style lang="scss" scoped>
.header-wrapper {
  @include flexSet(flex-start, center, row);
  @include boxSet(100%, 72px, 0px);
  padding: 0 20px;
  background-color: white;
  & > h1 {
    @include fontSet(34px, 700, 41px);
  }
}
</style>
