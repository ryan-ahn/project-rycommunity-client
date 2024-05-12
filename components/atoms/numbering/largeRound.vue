<template>
  <div class="numbering-wrapper">
    <p>
      {{ validateTenDigit(number) }}
    </p>
  </div>
</template>

<script setup lang='ts'>
import { INumberingLargeRoundProps } from '@interface/props';
// Props
const { number } = defineProps<INumberingLargeRoundProps>();
</script>

<style lang='scss' scoped>

.numbering-wrapper {
  @include flexSet(center, center, row);
  @include boxSet(36px, 36px, 18px);
  @include colorSet($white, $black);
  & > p {
    @include fontSet(14px, 700, 24px);
  }
}
</style>
