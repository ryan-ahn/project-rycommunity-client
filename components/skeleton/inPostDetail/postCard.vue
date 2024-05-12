<template>
  <ul class="skeleton-wrapper">
    <div class="list-box">
      <div class="padding-box">
        <div class="profile-box">
          <div/>
          <div>
            <div/>
            <div/>
          </div>
        </div>
      </div>
      <div class="body-box">
        <div/>
        <div/>
      </div>
      <div class="icon-box">
        <div/>
        <div/>
      </div>
    </div>
  </ul>
</template>

<style lang="scss" scoped>
.skeleton-wrapper {
  @include flexSet(center, flex-start, column);
  @include boxSet(100%, auto, 0px);
}
.list-box {
  @include flexSet(center, center, column);
  @include boxSet(100%, auto, 0px);
  gap: 20px;
  padding: 28px 20px;
}
.padding-box {
  @include boxSet(100%, auto, 0px);
}
.profile-box {
  @include flexSet(flex-start, center, row);
  gap: 12px;
  & > div:nth-child(1) {
    @include boxSet(36px, 36px, 18px);
    -webkit-animation: skeleton-ui 1.8s infinite ease-in-out;
    animation: skeleton-ui 1.8s infinite ease-in-out;
  }
  & > div:nth-child(2) {
    @include flexSet(center, flex-start, column);
    gap: 4px;
    & > div:nth-child(1) {
      @include boxSet(60px, 16px, 10px);
      -webkit-animation: skeleton-ui 1.8s infinite ease-in-out;
      animation: skeleton-ui 1.8s infinite ease-in-out;
    }
    & > div:nth-child(2) {
      @include boxSet(50px, 16px, 10px);
      -webkit-animation: skeleton-ui 1.8s infinite ease-in-out;
      animation: skeleton-ui 1.8s infinite ease-in-out;
    }
  }
}
.body-box {
  @include flexSet(center, center, column);
  @include boxSet(100%, 48px, 0px);
  gap: 4px;
  & > div {
    @include boxSet(100%, 22px, 11px);
    -webkit-animation: skeleton-ui 1.8s infinite ease-in-out;
    animation: skeleton-ui 1.8s infinite ease-in-out;
  }
}
.icon-box {
  @include flexSet(flex-start, center, row);
  @include boxSet(100%, auto, 0px);
  gap: 10px;
  & > div {
    @include boxSet(42px, 24px, 12px);
    -webkit-animation: skeleton-ui 1.8s infinite ease-in-out;
    animation: skeleton-ui 1.8s infinite ease-in-out;
  }
}
</style>
