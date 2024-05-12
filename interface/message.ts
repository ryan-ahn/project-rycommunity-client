export type TGetKakaoCallbackReq = {
  code: string,
};

export type TGetLabListReq = {
  offset: number,
  limit: number,
  tab: string,
  init: boolean,
  event?: any,
}

export type TGetLabDetailReq = {
  labId: string,
};

export type TPostLabLikeReq = {
  labId: string,
};

export type TGetPopDetailReq = {
  popId: string,
};

export type TGetFinishedPopListReq = {
  offset: number,
};

export type TGetCheckPopMemberReq = {
  popId: string,
}

export type TGetEventDetailReq = {
  eventId: string,
};

export type TGetJoinPopDetailReq = {
  popId: string,
}

export type TPostJoinPopMemberReq = {
  popId: string,
  onoff: string,
  know: string[],
  use: string[],
  job: string
}

export type TPostLabCreateReq = {
  name: string,
  summary: string,
  introduce: string,
  thumbnail: string | null,
  category: any,
  objective: Array<string>,
  startDate: string,
  endDate: string,
  members: number,
  question: Array<string>,
  price: 0,
  period: string,
  week: string,
  startTime: string,
  endTime: string,
  firstMeet: string,
  place: string,
  private: false,
};

export type TPostLoungePostLikeReq = {
  postId: string,
};

export type TDeleteLoungePostReq = {
  postId: string,
};

export type TGetLoungePostDetailReq = {
  postId: string,
};

export type TPostLoungePostCreateCommentReq = {
  postId: string,
  comment: string,
};

export type TPostLoungePostEditCommentReq = {
  commentId: string,
  comment: string,
};

export type TPostLoungePostDeleteCommentReq = {
  commentId: string,
};
export type TPostLoungePostCrawlingReq = {
  url: string,
};

export type TGetJoinLabDetailReq = {
  labId: string,
};

export type TPostMemberJoinReq = {
  labId: string,
  questions: Array<{ question: string; answer: string }>,
  know: string,
  intro: string,
};

export type TPostMemberListReq = {
  labId: string,
};

export type TPostMemberDetailReq = {
  labId: string,
  userId: string,
};

export type TPatchApproveStatusReq = {
  labId: string,
  userId: string,
  userGrade: number,
}

export type TPatchRecruitStatus = {
  labId: string,
}

export type TPostCheckQrDetailReq = {
  popId: string,
}
