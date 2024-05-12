<template>
  <WrapperWithPopup>
    <CompleteJoinPopContainer/>
  </WrapperWithPopup>
</template>

<script setup lang="ts">
import CompleteJoinPopContainer from '@containers/stack/complete/joinPop.vue';
// Layout
definePageMeta({
  layout: 'default',
});
</script>
