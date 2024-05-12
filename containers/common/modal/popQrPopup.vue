<template>
  <div class="modal-child-wrapper">
    <OrganismItemInPopQrLabel
      :info="info"
      :subTitle="subTitle"
      :title="title"
      :qrLabel="qrLabel"
    />
  </div>
</template>

<script setup lang="ts">
import { MODAL_POPUP } from '@assets/data/modal';

// State
const info = MODAL_POPUP.qr.pop.info;
const title = MODAL_POPUP.qr.pop.title;
const subTitle = MODAL_POPUP.qr.pop.subTitle;
const qrLabel = MODAL_POPUP.qr.pop.qrLabel;

</script>

<style lang="scss" scoped>
.modal-child-wrapper {
  position: relative;
}
</style>
