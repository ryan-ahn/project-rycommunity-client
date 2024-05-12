<template>
  <div class="qr-box">
    <slot/>
  </div>
</template>

<style lang="scss" scoped>
.qr-box {
  @include boxSet(192px, 192px, 0px);
  @include flexSet(center, center, column);
  border: 0.5px solid $gray03;
}
</style>
