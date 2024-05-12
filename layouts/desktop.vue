<template>
  <div class="desktop-layout-wrapper">
    <div
      id="scroll"
      class="simulator-box"
    >
      <slot/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.desktop-layout-wrapper {
  @include flexSet(center, center, row);
  background-color: #ebebeb;
}
.simulator-box {
  position: relative;
  min-height: 100vh;
  @include boxSet(450px, 100vh, 0px);
  overflow-x: hidden;
  overflow-y: auto;
  background-color: white;
  @supports (-webkit-touch-callout: none) {
    min-height: -webkit-fill-available;
  }
}
</style>
