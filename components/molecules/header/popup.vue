<template>
  <div
    class="header-wrapper"
    :class="isMobileOrTablet ? 'mobile-wrapper' : 'desktop-wrapper'"
  >
    <AtomsButtonFunctionIcon
      v-show="!labMemberRoute && !createLabRoute && !joinLabRoute"
      v-hidden="labMemberRoute && createLabRoute && joinLabRoute"
      icon="/icons/common/x-gray.svg"
      :width="24"
      :touch="50"
      :onClickFunction="onClickFunction"
    />
  </div>
</template>

<script setup lang="ts">
import { IHeaderInPopupProps } from '@interface/props';

// Hooks
const { isMobileOrTablet } = useDevice();
const route = useRoute();
// State
const labMemberRoute = validateSplitPath(route.path) === 'labmember';
const createLabRoute = validateSplitPath(route.path) === 'createlab';
const joinLabRoute = validateSplitPath(route.path) === 'joinlab';
// Props
const { onClickFunction } = defineProps<IHeaderInPopupProps>();
</script>

<style lang="scss" scoped>
.header-wrapper {
  position: fixed;
  top: 0;
  @include flexSet(flex-end, center, row);
  @include boxSet(100%, 55px, 0px);
  z-index: 98;
  padding: 0 5px;
  transition: background-color 0.3s ease-out;
}
</style>
