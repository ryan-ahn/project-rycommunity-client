<template>
  <div class="g-popup-wrapper">
    <MoleculesHeaderPopup :onClickFunction="onClickCloseModal"/>
    <slot/>
  </div>
</template>

<script setup lang="ts">
import { useModalStore } from '@store/index';
// Hooks
const modalStore = useModalStore();
const router = useRouter();
const route = useRoute();
// State
// Functions
const onClickCloseModal = () => {
  modalStore.setCloseModal();
  if (validateSplitPath(route.path) === 'complete') {
    router.push(`/popdetail/${route.params.id}`);
  }
};
// Cycle
onMounted(() => {
  // useScrollTop();
});
</script>

<style lang="scss">
.g-popup-wrapper {
  position: relative;
  padding-top: 55px;
}
</style>
