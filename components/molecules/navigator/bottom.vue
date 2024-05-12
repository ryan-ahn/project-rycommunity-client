<template>
  <nav
    class="g-nav-wrapper sticky"
    :class="isMobileOrTablet ? 'mobile-vw-wrapper' : 'desktop-wrapper'"
  >
    <ul class="g-content-box">
      <li
        v-for="item in MENU_NAVIGATOR"
        :key="item.id"
        class="g-menu-box"
        @click="onClickFunction(item.path)"
      >
        <AtomsButtonNavBottom
          :icon="item.path === validatePathOnlyDir(path)
            ? item.activeIcon
            : item.deActiveIcon"
          :label="item.label"
          :active="item.path === path"
        />
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts" scoped>
import { INavBottomProps } from '@interface/props';
import { MENU_NAVIGATOR } from '@assets/data/menu';
// Hooks
const { isMobileOrTablet } = useDevice();
// Props
const {
  path,
  onClickFunction,
} = defineProps<INavBottomProps>();
</script>

<style lang="scss">
.g-nav-wrapper {
  position: fixed;
  bottom: 0;
  @include boxSet(100%, auto, 0px);
  z-index: 97;
}
.g-content-box {
  @include boxSet(100%, 60px, 0px);
  @include flexSet(space-around, center, row);
  background-color: $white;
  border-top: 0.5px solid $gray03;
  @include shadowSet(0, -10, 30, $shadow, 0.05);
}
.g-menu-box {
  @include flexSet(center, center, column);
  @include boxSet(25%, 100%, 0px);
  cursor: pointer;
}
</style>
