import { IItemInPopQrProps } from '@interface/props';
<template>
  <section class="content">
    <div class="qr-info">
      {{ info }}
    </div>
    <p class="subtitle">
      {{ subTitle }}
    </p>
    <h1>{{ title }}</h1>
    <div class="box-wrapper">
      <OrganismItemInPopQrcode/>
    </div>
    <div class="qr-label">
      {{ qrLabel }}
    </div>
  </section>
</template>

<script setup lang="ts">
import { IModalQrPopupProps } from '@interface/props';

const {
  info,
  subTitle,
  title,
  qrLabel,
} = defineProps<IModalQrPopupProps>();
</script>

<style lang="scss" scoped>
.content {
  position: relative;
  top: 74px;
  padding: 0 84px;
  @include boxSet(100%, auto, 0px);

  & > h1 {
    @include fontSet(36px, 600, 40px);
    @include flexSet(center, center, row);
  }
}
.qr-info {
  @include fontSet(16px, 500, 24px);
  @include flexSet(center, center, row);
  padding: 20px 0 40px 0;
}
.subtitle {
  @include fontSet(14px, 500, 22px);
  @include flexSet(center, center, row);
  padding-bottom: 4px;
  letter-spacing: 7px;
}
.box-wrapper {
  @include flexSet(center, center, column);
  position: relative;
  padding: 20px 0;
}
.qr-label {
  @include fontSet(13px, 500, 22px);
  @include flexSet(center, center, row);
  padding-top: 4px;
  color: $gray07;
}

</style>
