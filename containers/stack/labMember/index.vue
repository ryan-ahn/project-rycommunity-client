<template>
  <div class="stack-wrapper">
    <ul v-if="memberList">
      <li
        v-for="(item, index) in memberList"
        :key="index"
        class="list-box"
      >
        <div
          class="item-box"
          @click="() => onClickGoToMemberDetail(item.userDetail.userId, item)"
        >
          <div class="profile-box">
            <img
              :src="item.userDetail?.profileImage"
              alt="profile"
            >
            <div class="name-box">
              <p>{{ item.userDetail?.name }}</p>
              <p v-show="item.userGrade === 1">
                {{ USER_GRADE_STATUS[item.userGrade] }} &ndash;
              </p>
              <p
                v-show="item.userGrade === 2"
                class="approved"
              >
                {{ USER_GRADE_STATUS[item.userGrade] }} &#10003;
              </p>
            </div>
          </div>
          <img
            src="/icons/common/arrow-right-gray.svg"
            alt="arrow"
          >
        </div>
      </li>
    </ul>
  </div>
  <OrganismItemInLabDetailApproveCard
    v-if="memberList && memberList.length !== 0"
    v-show="detail?.periodStatus.recruitStatus"
    v-hidden="!detail?.periodStatus.recruitStatus"
    :labId="route.params.id"
    :approvedCount="memberList.filter((item) => item.userGrade === 2).length"
    buttonType="C"
    :buttonText="recruitEndText"
    :onClickFunction="onClickOpenModal"
  />
  <AtomsEmptyImageContent
    v-if="memberList && memberList.length === 0"
    :image="EMPTY_CONTENT.labRecruit.image"
    :type="''"
    :text="EMPTY_CONTENT.labRecruit.text"
    :description="null"
  />
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import {
  useLabStore,
  useModalStore,
} from '@store/index';
import { EMPTY_CONTENT } from '@assets/data/empty';
import { USER_GRADE_STATUS } from '@assets/data/data';
import { BUTTON_MAIN_FILL } from '@assets/data/button';

// Hooks
const route = useRoute();
const router = useRouter();
const labStore = useLabStore();
const modalStore = useModalStore();
// State
const {
  memberList,
  detail,
} = storeToRefs(labStore);
const recruitEndText = BUTTON_MAIN_FILL.labDetail.deactive.text;
// Function
const onClickGoToMemberDetail = async (labId:string, object: any) => {
  // 렌더링용으로 store에 저장하고 싶을때 object로 set함수에 저장해서 사용 - 트리거로 쓸때는 추천하지 않음, 렌더링용으로만 사용하기!
  await router.push(`/memberdetail/?lab=${route.params.id}&target=${object.userDetail.userId}`);
};
const onClickOpenModal = () => {
  modalStore.setOpenModal('endLabRecruit');
};
// Cycle
onMounted(() => {
  labStore.postMemberList({
    labId: route.params.id,
  });
});
</script>

<style lang="scss" scoped>
.stack-wrapper {
  @include boxSet(100%, auto, 0px);
  padding-top: 55px;
}
.list-box {
  padding: 0px 20px;
}
.item-box {
  @include flexSet(space-between, center, row);
  cursor: pointer;
  border-bottom: 1px solid $gray03;
}
.profile-box {
  @include flexSet(flex-start, center, row);
  @include boxSet(100%, auto, 0px);
  gap: 12px;
  padding: 16px 0;
  & > img {
    @include boxSet(52px, 52px, 26px);
    object-fit: cover;
  }
}
.name-box {
  @include fontSet(12px, 500, 16px);
  & > p:nth-child(1) {
    @include fontSet(16px, 600, 24px);
  }
}

.approved {
  color: red;
}

</style>
