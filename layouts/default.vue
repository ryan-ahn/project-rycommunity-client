<template>
  <div class="mobile-layout-wrapper">
    <slot/>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>
.mobile-layout-wrapper {
  background-color: white;
}
/* UpperStack */
.page-left-leave-active,
.page-right-enter-active {
  position: fixed;
  top: 0;
  left: 0;
  transition: all 0.2s linear;
  .sticky {
    position: sticky;
  }
  .display-none {
    display: none;
  }
}
/* BottomStack */
.page-left-enter-active,
.page-right-leave-active {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  transition: all 0.2s linear;
}
/* StackUp */
.page-left-enter-from {
  transform: translateX(100%);
}
.page-left-leave-to {
  transform: translateX(-15%);
}
/* StackDown */
.page-right-leave-to {
  transform: translateX(100%);
}
.page-right-enter-from {
  transform: translateX(-15%);
}
</style>
