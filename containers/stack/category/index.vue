<template>
  <section class="stack-wrapper">
    <div class="message-box">
      <AtomsAreaMessage
        :message="stackMessage"
        :type="commonType"
      />
    </div>
    <OrganismListInCategoryTitle
      v-if="MOCK_THIRD_ARTICLE_LIST"
      :data="MOCK_THIRD_ARTICLE_LIST.list"
      :onClickFunction="onClickGoToStack"
    />
  </section>
</template>

<script setup lang="ts">
import { useScrollTo } from '@utils/useScroll';
import { MOCK_THIRD_ARTICLE_LIST } from '@assets/data/data';
import { AREA_MESSAGE } from '@assets/data/area';
// Hooks
const route = useRoute();
const router = useRouter();
// State
const stackMessage = AREA_MESSAGE.category.message;
const commonType = AREA_MESSAGE.category.type;
// Functions
const onClickGoToStack = (link: string) => {
  router.push(`/labdetail/${link}`);
};
// Cycle
onMounted(() => {
  if (route.query.scroll) {
    useScrollTo(route.query.scroll, 'stack', 'smooth');
  }
});
</script>

<style lang="scss" scoped>
.stack-wrapper {
  @include flexSet(flex-start, flex-start, column);
  @include boxSet(100%, auto, 0px);
  padding: 55px 20px;
}
.message-box {
  @include boxSet(100%, auto, 0px);
  padding: 20px 0;
}
</style>
