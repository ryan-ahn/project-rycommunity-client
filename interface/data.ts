import {
  IAnswerModel,
  ICombineCommentModel,
  ICombineLabCategoryModel,
  ICombineLabLikeModel,
  ICombineLabMemberModel,
  ICombinePopCategoryModel,
  ILabModel,
  ILabStatusModel,
  IPopModel,
  IPostModel,
  IQuestionModel,
  IUserModel,
  IMyPopApplicantModel,
} from '@interface/model';

export interface ILabElementData {
  labInfo: ILabModel,
  labCategory: ICombineLabCategoryModel,
  masterInfo: IUserModel,
  labLikes: ICombineLabLikeModel,
  periodStatus: ILabStatusModel,
}

export interface ILabDetailData {
  labInfo: ILabModel,
  labCategory: ICombineLabCategoryModel,
  masterInfo: IUserModel,
  labMembers: ICombineLabMemberModel,
  labLikes: ICombineLabLikeModel,
  labComments: ICombineCommentModel,
  periodStatus: ILabStatusModel,
}

export interface IMyPopItemData {
  popInfo: IPopModel,
  applicantInfo: IMyPopApplicantModel,
}

export interface IMyLabItemData {
  labInfo: ILabModel,
  userGrade: number,
}

export interface IPopItemData {
  popInfo: IPopModel,
  popCategory: ICombinePopCategoryModel,
  popStatus: {subscribe: boolean}
}

export interface ILoungePostItemData {
  postInfo: IPostModel,
  authorInfo: IUserModel,
  postLikes: ICombineLabLikeModel,
  postComments: ICombineCommentModel,
}

export interface ILoungePostDetailItemData {
  postInfo: IPostModel,
  authorInfo: IUserModel,
  postLikes: ICombineLabLikeModel,
  postComments: ICombineCommentModel,
}

export interface ILabMemberItemData {
  question: IAnswerModel[] | [] | null,
  userDetail: IUserModel,
  userGrade: number,
}

export interface IPostRecommendItemData {
  postDetail: IPostModel,
  authorDetail: IUserModel,
  postComments: ICombineCommentModel,
  postLikes: ICombineLabLikeModel,
}

export interface ICombineJoinLabDetailData {
  labDetail: IQuestionModel,
  userDetail: IUserModel,
}

export interface IJoinPopData {
  userDetail: IUserModel
  popDetail: IPopModel,
  popStatus: {subscribe: boolean}
}

export interface IModalListData {
  id: number,
  name: string,
  value: string,
}
