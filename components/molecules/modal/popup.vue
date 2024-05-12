<template>
  <div class="modal-wrapper">
    <MoleculesHeaderPopup :onClickFunction="onClickGoToHome"/>
    <div class="content-box">
      <component :is="children"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useModalStore } from '@store/index';
import { IModalProps } from '@interface/props';
// Props
const { children } = defineProps<IModalProps>();
// Hooks
const router = useRouter();
const route = useRoute();
const modalStore = useModalStore();
// Functions
const onClickGoToHome = () => {
  modalStore.setCloseModal();
  if (modalStore.modalType === 'joinPop') {
    router.push(`/popdetail/${route.params.id}`);
  }
};
</script>

<style lang="scss" scoped>
.modal-wrapper {
  @include boxSet(auto, 100vh, 0px);
  @include flexSet(flex-start, center, column);
  width: 100%;
}
.content-box {
  position: relative;
  @include flexSet(flex-start, center, column);
  width: auto;
  height: 100%;
  padding-top: 55px;
  background-color: $white;
}
</style>
