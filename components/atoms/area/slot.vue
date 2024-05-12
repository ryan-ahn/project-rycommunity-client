<template>
  <div class="area-wrapper">
    <slot/>
  </div>
</template>

<style lang="scss" scoped>
.area-wrapper {
  @include flexSet(flex-start, flex-start, column);
  @include boxSet(100%, auto, 20px);
  gap: 20px;
  padding: 16px;
  @include colorSet($black, $gray01);
}
</style>
