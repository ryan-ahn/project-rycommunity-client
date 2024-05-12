export const CONTENT_PAGE = {
  login: {
    description: {
      content: '더 큰 성장을 원하세요\n지금 함께 하세요!',
    },
  },
  main: {
    makeLab: {
      content: '더 큰 성장을 원하세요?\n지금 LAB을 만들어보세요!',
    },
  },
};

export const CONTENT_STACK = {
  login: {
    description: '간편하게 로그인하고\n다양한 서비스를 이용해보세요.',
  },
  popDetail: {
    title: '세미나 안내',
    body: [
      {
        id: 0,
        label: '장소',
      },
      {
        id: 1,
        label: '시간',
      },
      {
        id: 2,
        label: '날짜',
      },
      {
        id: 3,
        label: '신청 마감',
      },
      {
        id: 4,
        label: '신청 방법',
      },
      {
        id: 5,
        label: '세부 프로그램',
      },
    ],
    floatText: '신청마감',
  },
  category: {
    pop: 'RYANPOP',
    lab: 'LAB',
  },
  lab: {
    recruitText: '모집중',
  },
  labDetail: {
    info: {
      recruitTrue: '연구원 모집중',
      recruitFalse: '활동중',
      recruitMember: '모집 인원',
      member: '활동 인원',
      memberIcon: '/icons/lab/detail-member.svg',
      method: '모집 방식',
      methodIcon: '/icons/lab/detail-method.svg',
      methodMock: '선발제',
      price: '모집 비용',
      priceIcon: '/icons/lab/detail-price.svg',
      infoText: '모임 정보',
      firstMeet: '첫 모임️ 🎉',
      week: '모임 일자',
      weekIcon: '/icons/lab/detail-week.svg',
      time: '모임 시간',
      timeIcon: '/icons/lab/detail-time.svg',
      place: '모임 장소',
      placeIcon: '/icons/lab/detail-place.svg',
    },
  },
  joinLab: {
    profile: '님의 프로필',
    phoneLabel: '연락처',
    emailLabel: '이메일',
  },
  createPost: {
    link: {
      placeholder: '링크 입력',
      buttonText: '완료',
    },
  },
  postDetail: {
    float: {
      placeholder: '댓글을 남겨주세요.',
    },
  },
  joinPop: {
    userInfo: {
      numbering: 1,
    },
    joinInfo: {
      numbering: 2,
      description: '세미나 신청에 필요한 필수 정보입니다.',
    },
  },
};

export const CONTENT_POPUP = {
  complete: {
    createLab: {
      title: 'LAB 개설 신청 완료',
      description:
        '신청서를 확인중이에요.\n승인이 완료되면 알려드릴게요.',
    },
    joinLab: {
      title: '참여 신청 완료',
      description:
        '랩짱님이 신청서를 확인중이에요.\n선발이 완료되면 알려드릴게요.',
    },
    recruitLab: {
      title: '연구원 모집 완료!',
      description: '연구원님들께 연락을 보냈어요.\n함께 재미있는 연구 시작해요!',
    },
    joinPop: {
      title: '신청 완료',
      description: '세미나 신청이 완료 되었어요.',
      question: '연사님에게 궁금한 점을 물어보세요!',
    },
    redirectQr: {
      title: '입장 완료',
      greeting: '님 안녕하세요.',
      description: '즐거운 세미나 되세요!',
      event: '후기와 기대평을 남겨 주세요!',
      service: '서비스 둘러보기',
    },
  },
};

export const CONTENT_MODAL = {
  createLab: {
    title: 'LAB 개설을 위해\n약관에 먼저 동의해주세요.',
    description: '필수 동의 항목',
    modalText: '개인정보 수집 이용 동의',
    guide: 'LAB 개설 신청 가이드',
  },
  category: {
    title: '연구 분야를 선택해주세요.',
  },
  createPop: {
    title: '개인정보 수집 이용, 마케팅 수신',
    subTitle: '에 동의하고',
  },
};

export const POP_EMPTY_CONTENT = {
  image: '/images/empty-ongoing-pop.png',
};

export const CONTENT_MYPAGE = {
  pop: {
    joined: '신청한 세미나',
    finished: '종료된 세미나',
  },
  lab: {
    created: '개설한 LAB',
    joined: '참여한 LAB',
  },
};
