export const INPUT_MULTI = {
  createLab: {
    summary: {
      rows: 2,
      placeholder:
        '연구원님들이 관심을 가질 수 있도록 LAB에 대해 간략하게 설명해 주세요.',
      maxLength: 50,
      lengthShow: true,
    },
    detail: {
      rows: 10,
      placeholder:
        '연구 목적과 방향을 뚜렷하게 작성하면 더 많은 연구원님들과 함께할 수 있어요!',
      maxLength: 500,
      lengthShow: true,
    },
  },
  joinLab: {
    intro: {
      rows: 3,
      placeholder: '자유롭게 연구원님에 대해 소개해 주세요.',
      maxLength: 100,
      lengthShow: true,
    },
    question: {
      rows: 2,
      placeholder: '답변을 입력해 주세요.',
      maxLength: 100,
      lengthShow: false,
    },
  },
};

export const INPUT_SINGLE = {
  createLab: {
    title: {
      type: 'text',
      placeholder: 'LAB 제목을 입력해 주세요.',
      maxLength: 30,
      lengthShow: true,
    },
    members: {
      type: 'number',
      label: '희망 모집 인원',
      placeholder: '1 ~ 100까지 자유롭게 입력하세요.',
      maxLength: 3,
      lengthShow: false,
    },
    questions: {
      type: 'text',
      label: '연구원들에게 물어볼 질문을 작성해 주세요.',
      placeholder: '예시 : LAB을 지원하게 된 동기는?',
      maxLength: 50,
      lengthShow: false,
    },
  },
};

export const INPUT_AUTO = {
  createPost: {
    post: {
      height: '200px',
      placeholder: '오늘 어떤 이야기를 하고 싶으신가요? \n자유롭게 공유해 주세요.',
      minLength: '5',
      maxLength: '500',
    },
  },
};
