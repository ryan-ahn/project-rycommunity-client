<template>
  <div
    v-show="isOpen"
    class="modal-index-wrapper"
    :class="isMobileOrTablet ? 'mobile-wrapper' : 'desktop-wrapper'"
  >
    <div
      class="dimmed-area"
      :style="{
        alignItems: modalAlignType,
      }"
      @click.self="modalStore.setCloseModal()"
    >
      <div
        v-if="checkBottomModal(modalType)"
        class="bottom-box"
      >
        <MoleculesModalBottom :children="children"/>
      </div>
      <div
        v-if="checkSystemModal(modalType)"
        class="system-box"
      >
        <component :is="children"/>
      </div>
      <div
        v-if="checkPopUpModal(modalType)"
        class="popup-box"
      >
        <MoleculesModalPopup :children="children"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { watch } from 'vue';
import { storeToRefs } from 'pinia';
import { useModalStore } from '@store/index';
import { IModalProps } from '@interface/props';
// Hooks
const modalStore = useModalStore();
const { isMobileOrTablet } = useDevice();
const {
  isOpen,
  modalType,
} = storeToRefs(modalStore);
// Props
const { children } = defineProps<IModalProps>();
const scrollPosition = ref(0);
// Functions
const modalAlignType = computed(() => {
  switch
  (modalType.value) {
    case 'bottom':
      return 'flex-end';
    case 'popup':
      return 'center';
    case 'system':
      return 'flex-start';
    default:
      return '';
  }
});

watch(isOpen, (value) => {
  if (value) {
    scrollPosition.value = window.scrollY;
    document.body.style.top = `-${scrollPosition.value}px`;
    document.body.classList.add('no-scroll');
  } else {
    document.body.style.top = '';
    document.body.classList.remove('no-scroll');
    window.scrollTo(0, scrollPosition.value);
  }
});
</script>

<div lang="scss" scoped>
.no-scroll {
  position: fixed;
  overflow-y: scroll;
  width: 100%;
}
.modal-index-wrapper {
  position: fixed;
  top: 0px;
  @include boxSet(100%, auto, 0px);
  z-index: 1000;
}
.dimmed-area {
  display: flex;
  min-height: 100vh;
  background-color: rgba($black, 0.8);
  -webkit-animation: fade-in 0.3s ease-in-out;
  animation: fade-in 0.3s ease-in-out;
  @supports (-webkit-touch-callout: none) {
    min-height: -webkit-fill-available;
  }
}
.bottom-box {
  position: absolute;
  bottom: 0px;
  @include flexSet(center, center, column);
  @include boxSet(100%, auto, 0px);
  -webkit-animation: slide-up 0.4s ease-in-out;
  animation: slide-up 0.4s ease-in-out;
}
.system-box {
  @include flexSet(center, center, column);
  @include boxSet(100%, auto, 0px);
  padding: 20px;
}
.popup-box {
  @include flexSet(center, flex-start, column);
  @include boxSet(100%, 100%, 0px);
}
</div>
