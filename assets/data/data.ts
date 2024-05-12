import {
  TLabStatusObject,
  TUserGradeObject,
  TDateWeekObject,
  TQuestionObject,
  TPopLabelObject,
} from '@interface/object';

export const MYPAGE_LAB_MY_STATUS: TLabStatusObject = {
  0: '[개설 신청]',
  1: '[승인 대기]',
  2: '[승인 완료]',
  3: '[활동 종료]',
};

export const MYPAGE_LAB_JOIN_STATUS: TLabStatusObject = {
  0: '',
  1: '[참여 신청 완료]',
  2: '[활동중]',
  3: '[활동 종료]',
};

export const MYPAGE_USER_TYPE: TLabStatusObject = {
  0: '랩짱',
  1: '연구원',
  2: '연구원',
  3: '연구원',
};

export const QUESTION_LABEL: TQuestionObject = {
  0: '첫번째,',
  1: '두번째,',
  2: '세번째,',
  3: '네번째,',
  4: '다섯번째,',
  5: '여섯번째,',
  6: '일곱번째,',
  7: '여덟번째,',
  8: '아홉번째.',
};

export const POP_LABEL: TPopLabelObject = {
  0: '컨퍼런스',
};

export const LAB_ACTIVE_STATUS: TLabStatusObject = {
  0: '신청중',
  1: '검토중',
  2: '활동중',
  3: '활동마감',
};

export const USER_GRADE_STATUS: TUserGradeObject = {
  0: '랩짱',
  1: '승인 대기',
  2: '승인 완료',
};

export const USER_GRADE_MEMBER: TUserGradeObject = {
  0: '랩짱',
  1: '대기',
  2: '멤버',
};

export const DATE_WEEK: TDateWeekObject = {
  0: '일',
  1: '월',
  2: '화',
  3: '수',
  4: '목',
  5: '금',
  6: '토',
};