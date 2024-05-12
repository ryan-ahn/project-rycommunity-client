<template>
  <section
    class="page-wrapper"
    :class="isMobileOrTablet ? 'mobile-wrapper' : 'desktop-wrapper'"
  >
    <article class="article-box">
      <OrganismListInMainBanner
        v-if="bannerList"
        :data1="bannerList"
        :data2="MOCK_MAIN_BANNER_LIST.list"
        :event="EVENT_MAIN_BANNER_LIST.list"
        :edu="EDU_MAIN_BANNER_LIST.list"
        :onClickFunction="onClickGoToStack"
        :onClickGoToLink="onClickGoToLink"
      />
      <SkeletonInMainBanner v-if="!bannerList"/>
    </article>
    <!-- Pop -->
    <article class="article-box">
      <AtomsTitleLargeLabel
        v-if="ongoingPopList"
        :label="popLabel"
        :title="popTitle"
        :onClickFunction="() => onClickGoToStack(popStack)"
      />
      <OrganismListInMainPop
        v-if="ongoingPopList && ongoingPopList.length > 0"
        :data="ongoingPopList"
        :onClickFunction="onClickGoToPopDetail"
      />
      <div class="empty-ongoing-pop">
        <div
          v-if="ongoingPopList && ongoingPopList.length === 0"
          class="item-wrapper"
          @click="onClickGoToPop"
        >
          <img
            :src="POP_EMPTY_CONTENT.image"
            alt="pop-empty"
          >
        </div>
      </div>

      <SkeletonInMainPop v-if="!ongoingPopList"/>
    </article>
    <!-- Recommend Post -->
    <article class="article-box">
      <AtomsTitleLargeLabel
        :label="loungeLabel"
        :title="loungeTitle"
        :onClickFunction="() => onClickGoToStack(loungeStack)"
      />
      <OrganismListInMainPost
        v-if="postRecommendList"
        :chipText="postChipText"
        :chipType="postChipType"
        :data="postRecommendList"
        :onClickFunction="onClickGoToPostDetail"
      />
    </article>
    <!-- Category -->
    <article class="article-box">
      <AtomsTitleLargeLabel
        :label="categoryLabel"
        :title="categoryTitle"
        :onClickFunction="() => onClickGoToStack(categoryStack)"
      />
      <OrganismListInMainCategory
        :data="MOCK_THIRD_ARTICLE_LIST.list"
        :active="Math.floor(count % 5)"
        :onClickGoToDetail="onClickGoToCategoryDetail"
      />
    </article>
    <!-- Recommend Lab -->
    <article class="article-box">
      <AtomsTitleLargeLabel
        :label="labLabel"
        :title="labTitle"
        :onClickFunction="() => onClickGoToStack(labStack)"
      />
      <OrganismListInMainLab
        v-if="labRecommendList"
        :data="labRecommendList"
        :onClickFunction="onClickGoToLabDetail"
      />
    </article>
    <article class="article-box">
      <OrganismItemInMainMakeLabCard/>
    </article>
    <OrganismItemCommonFooterCard
      :title="title"
      :companyCategory="companyCategory"
      :companyName="companyName"
      :ownerCategory="ownerCategory"
      :ownerName="ownerName"
      :businessCategory="businessCategory"
      :businessNumber="businessNumber"
      :contactCategory="contactCategory"
      :contactNumber="contactNumber"
      :addressFirstCategory="addressFirstCategory"
      :addressFirst="addressFirst"
      :addressSecondCategory="addressSecondCategory"
      :addressSecond="addressSecond"
      :addressThirdCategory="addressThirdCategory"
      :addressThird="addressThird"
      :policy="policy"
      :copyright="copyright"
    />
  </section>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
// import { useCurrentScroll } from '@utils/useScroll';
import { useScrollTop } from '@utils/useScroll';
import { useMainStore } from '@store/index';
import { useGtm } from '@gtm-support/vue-gtm';
import { TITLE_LARGE_LABEL } from '@assets/data/title';
import { FOOTER_CONTENT } from '@assets/data/footer';
import {
  MOCK_MAIN_BANNER_LIST,
  MOCK_THIRD_ARTICLE_LIST,
  EVENT_MAIN_BANNER_LIST,
  EDU_MAIN_BANNER_LIST,
} from '@assets/data/data';
import { POP_EMPTY_CONTENT } from '@assets/data/content';
import { BUTTON_FUNCTION_CHIP } from '@assets/data/button';
// Hooks
const { isMobileOrTablet } = useDevice();
const router = useRouter();
const mainStore = useMainStore();
const $gtm = useGtm();
const config = useRuntimeConfig().public;
// State
const {
  bannerList,
  ongoingPopList,
  labRecommendList,
  postRecommendList,
} = storeToRefs(mainStore);
const postChipText = BUTTON_FUNCTION_CHIP.main.post.text;
const postChipType = BUTTON_FUNCTION_CHIP.main.post.type;
const categoryLabel = TITLE_LARGE_LABEL.main.category.label;
const categoryTitle = TITLE_LARGE_LABEL.main.category.title;
const categoryStack = TITLE_LARGE_LABEL.main.category.stack;
const popLabel = TITLE_LARGE_LABEL.main.pop.label;
const popTitle = TITLE_LARGE_LABEL.main.pop.title;
const popStack = TITLE_LARGE_LABEL.main.pop.stack;
const labLabel = TITLE_LARGE_LABEL.main.lab.label;
const labTitle = TITLE_LARGE_LABEL.main.lab.title;
const labStack = TITLE_LARGE_LABEL.main.lab.stack;
const loungeLabel = TITLE_LARGE_LABEL.main.lounge.label;
const loungeTitle = TITLE_LARGE_LABEL.main.lounge.title;
const loungeStack = TITLE_LARGE_LABEL.main.lounge.stack;
const title = FOOTER_CONTENT.title;
const companyCategory = FOOTER_CONTENT.companyInfo.category;
const companyName = FOOTER_CONTENT.companyInfo.name;
const ownerCategory = FOOTER_CONTENT.ownerInfo.category;
const ownerName = FOOTER_CONTENT.ownerInfo.name;
const businessCategory = FOOTER_CONTENT.businessInfo.category;
const businessNumber = FOOTER_CONTENT.businessInfo.number;
const contactCategory = FOOTER_CONTENT.contactInfo.category;
const contactNumber = FOOTER_CONTENT.contactInfo.number;
const addressFirstCategory = FOOTER_CONTENT.addressInfo.first.category;
const addressFirst = FOOTER_CONTENT.addressInfo.first.address;
const addressSecondCategory = FOOTER_CONTENT.addressInfo.second.category;
const addressSecond = FOOTER_CONTENT.addressInfo.second.address;
const addressThirdCategory = FOOTER_CONTENT.addressInfo.third.category;
const addressThird = FOOTER_CONTENT.addressInfo.third.address;
const policy = FOOTER_CONTENT.policyInfo;
const copyright = FOOTER_CONTENT.copyrightInfo;
const count = ref(1);
// Functions
const onClickGoToLink = (link: string) => {
  if (link.includes('orm')) {
    $gtm?.trackEvent({
      event: 'sw',
      category: 'banner',
      action: 'click',
      target: link,
      label: 'banner',
      value: 'edu_link',
    });
  }
  if (link.includes('aiffel')) {
    $gtm?.trackEvent({
      event: 'aiffel',
      category: 'banner',
      action: 'click',
      target: link,
      label: 'banner',
      value: 'edu_link',
    });
  }
  window.open(link, '_blank');
};
const onClickGoToStack = (stack: string) => {
  if (stack.includes('lounge')) {
    $gtm?.trackEvent({
      event: 'review',
      category: 'banner',
      action: 'click',
      target: stack,
      label: 'banner',
      value: 'stack',
    });
  }
  if (stack.includes('event/64c38813ab8e0fcb10d1aa50')) {
    $gtm?.trackEvent({
      event: 'lab',
      category: 'banner',
      action: 'click',
      target: stack,
      label: 'banner',
      value: 'stack',
    });
  }
  if (stack.includes('papershop')) {
    $gtm?.trackEvent({
      event: 'papershop',
      category: 'banner',
      action: 'click',
      target: stack,
      label: 'banner',
      value: 'stack',
    });
  }
  router.push(stack);
};
const onClickGoToPopDetail = (id: string) => {
  router.push(`/popdetail/${id}`);
};
const onClickGoToCategoryDetail = (id: string) => {
  router.push(`/category/?scroll=${id}`);
};
const onClickGoToLabDetail = (id: string) => {
  router.push(`/labdetail/${id}/?tab=1`);
};
const onClickGoToPostDetail = (id: string) => {
  router.push(`/postdetail/${id}/?tab=1`);
};
const onClickGoToPop = () => {
  router.push('/pop');
};
const countUp = () => {
  for (let i = 0; i < 1; i++) {
    setInterval(() => {
      count.value += 1;
    }, 1000);
  }
};
onBeforeMount(() => {
  trackCurrentScroll();
});
// Cycle
onMounted(() => {
  useScrollTop();
  mainStore.getBannerList();
  mainStore.getOngoingPopList();
  mainStore.getLabRecommendList();
  mainStore.getPostRecommendList();
  countUp();
});
</script>

<style lang="scss" scoped>
.page-wrapper {
  @include flexSet(flex-start, flex-start, column);
  @include boxSet(100%, auto, 0px);
  /* article:not(:first-child, :last-child) {
    margin-bottom: 50px;
  } */
  article:not(:last-child) {
    margin-bottom: 50px;
  }
}
.article-box {
  @include flexSet(flex-start, flex-start, column);
  @include boxSet(100%, auto, 0px);
  gap: 20px;
}
.empty-ongoing-pop {
  @include boxSet(100%, auto, 0px);
  padding: 0 20px;
  .item-wrapper {
    @include flexSet(center, center, row);
    @include boxSet(100%, auto, 20px);
    cursor: pointer;
    img {
      @include flexSet(center, center, row);
      @include boxSet(100%, auto, 0px);
      border-radius: 20px;
      object-fit: cover;
    }
  }
}

</style>
