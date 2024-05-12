import {
  IMyLabItemData,
  IMyPopItemData,
} from '@interface/data';

// data model
export interface IUserModel {
  _id: string,
  userId: string,
  signUpType?: string,
  name: string,
  email: string,
  phone?: null,
  birth?: null,
  profileImage: string,
  company: string | null,
  introduce: string | null,
  createAt?: Date,
  updateAt?: Date,
  deleteAts?: Date | null,
  signinAt?: Date,
}

export interface ILabModel {
  _id: string,
  name: string,
  summary: string,
  thumbnail: string,
  introduce: string,
  objective: Array<string>,
  startDate: Date,
  endDate: Date,
  members: number,
  question: string[],
  price: number,
  period: string,
  week: string,
  startTime: string,
  endTime: string,
  firstMeet: Date,
  place: string,
  private: boolean,
  recruit: boolean
  status: number,
  notice: string | null,
  reference: string | null,
  createAt: Date,
  updateAt: Date,
  deleteAt: Date | null,
}

export interface ILinkModel {
  _id: string,
  link: string,
  title: string | null,
  description: string | null,
  image: string | null,
}

export interface IPostModel {
  _id: string,
  postType: string,
  userId: string,
  body: string,
  link: ILinkModel | null,
  images: any | null,
  createAt: string,
  updateAt: string | null,
  deleteAt: Date | null,
}

export interface ICategoryModel {
  _id: string,
  number: number,
  name: string,
  type: number,
  createAt: Date,
  updateAt: Date,
}

export interface ICommentModel {
  _id: string,
  comment: string,
  createAt: string,
  updateAt: string | null,
  userDetail: IUserModel,
}

export interface ITemplateModel {
  _id: string,
  image: string,
  link: string,
}

export interface IPopBodyModel {
  _id: string,
  title: string,
  body: string,
}

export interface IPopPresenterModel {
  _id: string,
  name: string,
  career: string,
  intro: string | null,
}

export interface IPopModel {
  _id: string,
  title: string,
  description: string,
  numberOfPeople: number,
  offline: boolean,
  live: boolean,
  status: number,
  thumbnail: string,
  presenter: Array<IPopPresenterModel>,
  place: string,
  startTime: string,
  endTime: string,
  date: Date,
  endDate: Date,
  endDateTime: string,
  link: string,
  program: Array<string>,
  body: Array<IPopBodyModel>,
  createAt: Date,
  updateAt: Date,
  deleteAt: Date | null,
}

export interface IMockBanner {
  _id: string,
  image: string,
  link: string,
}

export interface ICrawlingModel {
  _id: string,
  title: string,
  description: string,
  image: string,
}

export interface IQuestionModel {
  question: string[],
}

export interface IAnswerModel {
  question: string,
  answer: string,
}

export interface ILabStatusModel {
  recruitStatus: boolean,
  newStatus: boolean,
}

export interface IMyPopApplicantModel {
  onoff: string,
}

// combine data model
export interface ICombineLabMemberModel {
  count: number,
  myStatus: number,
  userList: { _id: string; userGrade: number; userDetail: IUserModel }[],
}

export interface ICombineLabCategoryModel {
  count: number,
  categoryList: ICategoryModel[],
}

export interface ICombineLabLikeModel {
  count: number,
  myStatus: boolean,
  userList: {
    _id: string,
    userDetail: IUserModel,
  } | null,
}

export interface ICombineMyPopModel {
  count: number,
  popList: IMyPopItemData[] | null,
}

export interface ICombineMyLabModel {
  count: number,
  labList: IMyLabItemData[] | null,
}

export interface ICombineCommentModel {
  count: number,
  commentList: ICommentModel[] | null,
}

export interface ICombinePopCategoryModel {
  count: number,
  categoryList: ICategoryModel[],
}

export interface ICombineBannerModel {
  _id: string,
  thumbnail: string,
  template: ITemplateModel[],
}
