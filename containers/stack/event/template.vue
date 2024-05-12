<template>
  <div
    v-if="eventDetail"
    class="stack-wrapper"
  >
    <button
      v-for="item in eventDetail.template"
      :key="item._id"
      class="list-box"
      :disabled="!item.link"
      @click="() => onClickGoToStack(item.link)"
    >
      <img
        :src="item.image"
        alt="event"
      >
    </button>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useMainStore } from '@store/index';
// Hooks
const route = useRoute();
const router = useRouter();
const mainStore = useMainStore();
// State
const { eventDetail } = storeToRefs(mainStore);
// Function
const onClickGoToStack = (link: string) => {
  router.push(link);
};
// Cycle
onBeforeMount(() => {
  // useScrollTop();
});
onMounted(() => {
  mainStore.getEventDetail({
    eventId: route.params.id,
  });
});
</script>

<style lang="scss" scoped>
.stack-wrapper {
  @include flexSet(flex-start, flex-start, column);
  @include boxSet(100%, auto, 0px);
  gap: 40px;
  padding-bottom: 50px;
}
.list-box {
  @include boxSet(100%, auto, 0px);
  & > img {
    @include boxSet(100%, auto, 0px);
  }
}
</style>
