import { TFloatButtonObject } from '@interface/object';

export const BUTTON_COMMON = {
  confirm: {
    text: '확인',
  },
  cancel: {
    text: '취소',
  },
  showMore: {
    text: '더보기',
  },
};

export const BUTTON_SOCIAL = {
  login: {
    kakao: {
      text: '카카오 로그인',
    },
  },
};

export const BUTTON_MAIN_FAB: TFloatButtonObject = {
  lab: {
    text: 'LAB 만들기',
    width: 145,
  },
  lounge: {
    text: '글쓰기',
    width: 107,
  },
};

export const BUTTON_MAIN_FILL = {
  main: {
    makeLab: {
      type: 'A',
      text: '하고 싶은 연구 시작하기',
    },
  },
  popDetail: {
    floatCard: {
      type: 'B',
      activeText: '참여 신청하기',
      disabledText: '참여 신청 완료',
      deadlineText: '신청 마감',
      qrText: 'QR 입장권',
    },
  },
  labDetail: {
    deactive: {
      type: 'B',
      text: '모집 마감',
    },
    standBy: {
      type: 'B',
      text: '지원 완료',
    },
    myLab: {
      type: 'B',
      text: '연구원 리스트',
    },
    user: {
      type: 'B',
      text: '연구원 지원하기',
    },
  },
  createLab: {
    question: {
      type: 'B',
      text: '+ 항목추가',
    },
    submit: {
      type: 'B',
      text: '랩 신청하기',
    },
  },
  joinLab: {
    float: {
      type: 'B',
      text: '제출하기',
    },
  },
  approveLab: {
    submit: {
      type: 'B',
      activeText: '승인하기',
      disabledText: '승인 취소',
    },
  },
  joinPop: {
    submit: {
      type: 'B',
      text: '신청하기',
    },
  },
  modal: {
    createLab: {
      type: 'B',
      text: '동의 후 계속',
    },
  },
  complete: {
    createLab: {
      type: 'A',
      text: '신청내역 확인하기',
    },
    joinLab: {
      type: 'A',
      text: '신청내역 확인하기',
    },
    joinPop: {
      type: 'A',
      text: '사전 질문 남기기',
    },
    recruitLab: {
      type: 'A',
      text: '나의 LAB으로 이동',
    },
    redirectQr: {
      type: 'A',
      text: '세미나 정보 보러가기',
    },
    event: {
      type: 'A',
      text: '한 줄 기대평 남기기',
    },
  },
};

export const BUTTON_FUNCTION_CHIP = {
  main: {
    post: {
      type: 'A',
      text: 'COMMUNITY',
    },
  },
  pop: {
    off: {
      type: 'B',
      text: '오프라인',
    },
    live: {
      type: 'B',
      text: 'LIVE',
    },
  },
  popDetail: {
    pop: {
      type: 'B',
      text: 'RYANPOP',
    },
    live: {
      type: 'B',
      text: 'LIVE',
    },
  },
  lab: {
    vertical: {
      type: 'C',
      text: null,
    },
  },
};

export const BUTTON_FUNCTION_TAG = {
  labDetail: {
    category: {
      type: 'A',
    },
    objective: {
      type: 'B',
    },
  },
};

export const BUTTON_MODAL_SYSTEM = {
  postDelete: {
    delete: {
      text: '삭제',
    },
    cancel: {
      text: '취소',
    },
    confirm: {
      text: '확인',
    },
  },

};

export const BUTTON_SELECT = {
  createLab: {
    date: {
      label: '첫 모임일',
      placeholder: 'LAB 첫 모임 날짜를 알려주세요.',
    },
    period: {
      label: '모임 주기',
      placeholder: '선택',
    },
    week: {
      label: '모임 요일',
      placeholder: '선택',
    },
    time: {
      label: '시간',
      placeholder: '모임 시간을 알려주세요.',
    },
    place: {
      label: '장소',
      placeholder: '모임 장소를 알려주세요.',
    },
    startDate: {
      label: '모집 기간',
      placeholder: '모집 기간을 알려주세요.',
    },
  },
  joinLab: {
    know: {
      placeholder: '알게 된 경로를 알려주세요.',
    },
  },
  mypage: {
    pop: '세미나 활동',
    lab: 'LAB 활동',
  },
};
