<template>
  <ul class="skeleton-wrapper">
    <li
      v-for="item in 2"
      :key="item"
      class="list-box"
    >
      <div class="profile-box">
        <div/>
        <div>
          <div/>
          <div/>
          <div/>
        </div>
      </div>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.skeleton-wrapper {
  @include flexSet(center, flex-start, column);
  @include boxSet(100%, auto, 0px);
  padding: 0 20px;
}
.list-box {
  @include flexSet(center, flex-start, column);
  @include boxSet(100%, auto, 0px);
  gap: 20px;
  padding: 20px 0;
  &:not(last-child) {
    border-bottom: 1px solid $gray01;
  }
}
.profile-box {
  @include flexSet(flex-start, flex-start, row);
  gap: 12px;
  & > div:nth-child(1) {
    @include boxSet(26px, 26px, 18px);
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
    & > div:nth-child(3) {
      margin-top: 10px;
      @include boxSet(200px, 22px, 11px);
      -webkit-animation: skeleton-ui 1.8s infinite ease-in-out;
      animation: skeleton-ui 1.8s infinite ease-in-out;
    }
  }

}

</style>
