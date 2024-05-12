<template>
  <div class="item-wrapper">
    <div class="content-wrapper">
      <h1>
        {{ title }}
      </h1>
      <div class="info-box">
        <div>
          <span class="category">{{ companyCategory }}</span><span>{{ companyName }}</span>
          <span class="category">{{ ownerCategory }}</span><span>{{ ownerName }}</span>
        </div>
        <div>
          <span class="category">{{ businessCategory }}</span><span>{{ businessNumber }}</span>
          <span class="category">{{ contactCategory }}</span><span><a href="tel:+070-7743-5882">{{ contactNumber }}</a></span>
        </div>
      </div>
      <div class="info-box">
        <div>
          <span class="location">{{ addressFirstCategory }}</span><span>{{ addressFirst }}</span>
        </div>
        <div>
          <span class="location">{{ addressSecondCategory }}</span><span>{{ addressSecond }}</span>
        </div>
        <div>
          <span class="location">{{ addressThirdCategory }}</span><span>{{ addressThird }}</span>
        </div>
      </div>
      <div
        class="info-box"
        @click="onClickPolicyModal"
      >
        <button>{{ policy }}</button>
      </div>
      <div class="info-box">
        <button>{{ copyright }}</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useModalStore } from '@store/index';
import { IItemInMainFooterProps } from '@interface/props';
// Hooks
const modalStore = useModalStore();
// Props
const {
  title,
  companyCategory,
  companyName,
  ownerCategory,
  ownerName,
  businessCategory,
  businessNumber,
  contactCategory,
  contactNumber,
  addressFirstCategory,
  addressFirst,
  addressSecondCategory,
  addressSecond,
  addressThirdCategory,
  addressThird,
  policy,
  copyright,
} = defineProps<IItemInMainFooterProps>();
// Function
const onClickPolicyModal = () => {
  modalStore.setOpenModal('commonFooter');
};

</script>

<style lang="scss" scoped>
.item-wrapper {
  width: 100%;
  min-height: 260px;
  padding: 24px 20px;
  background-color: $gray01;
  @include flexSet(left, flex-start, row);
  @include boxSet(100%, auto, 0px);
}
.content-wrapper {
  @include flexSet(left, flex-start, column);
  gap: 16px;
  h1 {
    @include fontSet(12px, 900, 24px);
  }
}
.info-box {
  @include flexSet(left, flex-start, column);
  @include fontSet(10px, 400, 16px);
  gap: 4px;
  color: #49494B;
  button {
    cursor: pointer;
  }
  span {
    display: inline-block;
    margin-right: 4px;
    &:nth-child(2) {
      margin-right: 8px;
    }
    &:last-child {
      margin-right: 0;
    }
  }
}
.category {
  color: $gray05;
}
.location::after {
  display: inline-block;
  width: 3px;
  margin-left: 4px;
  font-size: 9px;
  color: $gray05;
  content: '|';
}
</style>
