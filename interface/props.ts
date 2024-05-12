// import { IButtonShowMoreProps } from '@interface/props';
import { TQuestionObject } from '@interface/object';
import {
  ILabModel,
  ICategoryModel,
  ICommentModel,
  ILinkModel,
  IMockBanner,
  ICombineBannerModel,
  IUserModel,
  IAnswerModel,
} from '@interface/model';
import {
  ILabElementData,
  IPopItemData,
  ILoungePostItemData,
  IPostRecommendItemData,
  IModalListData,
  IMyPopItemData,
  IMyLabItemData,
} from '@interface/data';
import { TLinkEnterAlias } from '@interface/alias';

// Wrapper Component
export interface IWrapperWithPageProps {
  path: string,
  title: string | null,
  metaTitle: string,
  show: boolean,
}

export interface IWrapperWithStackProps {
  path: string,
  title: string | null,
  metaTitle: string,
  right: string | null,
}
export interface IWrapperFooterStackProps {
  title: string,
  content: string,
}
export interface IWrapperPopAgreeStackProps {
  firstTitle: string,
  firstContent: string,
  secondTitle: string,
  secondContent: string,
}
export interface IWrapperLabAgreeStackProps {
  header: string,
  content: string,
  agreeTitle: string,
  agreeContent: string,
  infoTitle: string,
  infoContent: string,
  warningContent: string,
}
export interface IWrapperLabGuideStackProps {
  header: string,
  number: string,
  content: string,
}
/* Atoms */
// Area Component
export interface IAreaSlotProps {
  radius: string,
  backColor: string,
}

export interface IAreaMessageProps {
  message: string,
  type: string,
}

export interface IAreaBoxProps {
  text: string,
}

// Button Component
export interface IButtonMainFabProps {
  text: string,
  width: number,
  expand: boolean,
  onClickFunction: () => void,
}

export interface IButtonMainFillTypeProps {
  type: string,
  text: string,
  onClickFunction: () => void,
}

export interface IButtonMainLineTypeProps {
  type: string,
  text: string,
  onClickFunction: () => void,
}

export interface IButtonFunctionChipProps {
  type: string,
  text: string,
}

export interface IButtonFunctionIconProps {
  icon: string,
  width: number,
  touch: number,
  onClickFunction: () => void,
}

export interface IButtonFunctionSocialProps {
  text: string,
  href: string,
}

export interface IButtonFunctionTabProps {
  text: string,
  active: boolean,
  onClickFunction: () => void,
}

export interface IButtonFunctionTagProps {
  type: string,
  text: string,
}

export interface IButtonModalBottomProps {
  text: string,
  onClickFunction: () => void,
}

export interface IButtonModalSystemProps {
  type: string,
  text: string,
  onClickFunction: () => void,
}

export interface IButtonNavBottomProps {
  icon: string,
  label: string,
  active: boolean,
}

export interface IButtonSubFillProps {
  type: string,
  text: string,
  onClickFunction: () => void,
}

export interface IButtonSubTextProps {
  text: string,
  onClickFunction: () => void,
}

// Empty Component
export interface IEmptyContentProps {
  text: string,
  description: string | null,
  type: string,
}

export interface IEmptyImageContentProps {
  image: string | null,
  text: string,
  type: string,
  description: string | null,
}

// Input Component
export interface IInputMultiLineProps {
  rows: number,
  placeholder: string,
  maxLength: number,
  lengthShow: boolean,
  onChangeValue: (e: any) => void,
}

export interface IInputSingleLineProps {
  type: string,
  placeholder: string,
  maxLength: number,
  lengthShow: boolean,
  onChangeValue: (e: any) => void,
}

export interface IInputAutoSizeProps {
  height: string,
  minLength: string,
  maxLength: string,
  placeholder: string,
  onInputFunction: (e: any) => void,
}

// Link Component
export interface ILinkUnenteredProps {
  url: string | null,
  placeholder: string,
  buttonText: string,
  onInputFunction: (e: any) => void,
  onClickFunction: () => void,
}

export interface ILinkEnteredProps {
  type: TLinkEnterAlias,
  url: string,
  crawlingTitle: string | null,
  crawlingDescription: string | null,
  crawlingImage: string | null,
  onClickFunction?: () => void,
  onClickGoToLink: (link: string) => void,
}

// Numbering Component
export interface INumberingLargeRoundProps {
  number: number;
}

// Title Component
export interface ITitleLargeLabelProps {
  label: string,
  title: string,
  onClickFunction?: () => void,
}

export interface ITitleLargeRequiredProps {
  title: string,
  required: boolean,
}

export interface ITitleLargeNumberProps {
  number: number,
  title: string,
}

export interface ITitleMediumCommonProps {
  title: string,
}

export interface ITitleMediumNumberProps {
  number: string,
  header: string,
}

export interface ITitleInPopProps {
  title: string,
}

// Tab Component
export interface ITabLabProps {
  tab: string,
  data: { id: number; name: string; value: string }[],
  onClickFunction: (tab: string) => void,
}

// Profile Component
export interface I52ProfileProps {
  thumbnail: string,
  grade: string,
  name: string,
}

export interface IProfileToggleProps {
  thumbnailData: string,
  nameData: string,
  phoneLabel: string,
  phoneData: string,
  emailLabel: string,
  emailData: string,
  open: boolean,
  onClickFunction: () => void,
}

/* Molecules */
// Header Component
export interface IHeaderInPageProps {
  title: string | null,
}

export interface IHeaderInStackProps {
  path: string,
  title: string | null,
  right: string | null,
  backColor: string,
  icon: string,
  onClickFunction: () => void,
  onClickOpenShareModal: () => void,
  onClickWritePost: () => void,
  onClickEditPost: () => void,
}

export interface IHeaderInPopupProps {
  onClickFunction: () => void,
}

export interface IHeaderInPopDetailProps {
  onClickFunction: (id: string) => void,
}

// Modal Component
export interface IModalProps {
  children: object,
}

export interface IModalBottomProps {
  children: object,
}

export interface IModalSystemProps {
  title: string,
  description: string,
  confirmText: string,
  cancelText: string,
  confirmFunction: () => void,
  cancelFunction: () => void,
}

export interface IModalQrPopupProps {
  info: string;
  subTitle: string;
  title: string;
  qrLabel: string;
}

// Nav Bottom Component
export interface INavBottomProps {
  path: string,
  onClickFunction: (page: string) => void,
}

/* Organism */
// Item Component
export interface IItemCommonCheckProps {
  name: string,
  selectedList: Array<string>,
}

export interface IItemCommonThumbnailLabelProps {
  thumbnail: string,
  category: string,
  title: string,
  onClickFunction: () => void,
}

export interface IItemCommonCardProps {
  thumbnail: string,
  offline: boolean,
  offChipText: string,
  offChipType: string,
  live: boolean,
  liveChipText: string,
  liveChipType: string,
  onClickFunction: () => void,
}

export interface IItemCommonActStatusProps {
  status: string,
  appliedMethod: string,
}

export interface IItemCommonRadioProps {
  id: number,
  name: string,
  selectedItem: number,
}

export interface IItemInMainBannerProps {
  background: string,
  onClickFunction: () => void,
}

export interface IItemInMainCategoryProps {
  name: string,
  number: number,
  newCategory: boolean,
  active: boolean,
}

export interface IItemInMainLabCardProps {
  number: string,
  name: string,
  background: string,
  onClickFunction: () => void,
}

export interface IItemInMainPostCardProps {
  body: string,
  likeCount: number,
  commentCount: number,
  onClickGoToDetail: () => void,
}

export interface IItemInMainFooterProps {
  title: string,
  companyCategory: string,
  companyName: string,
  ownerCategory: string,
  ownerName: string,
  businessCategory: string,
  businessNumber: string,
  contactCategory: string,
  contactNumber: string,
  addressFirst: string,
  addressFirstCategory: string,
  addressSecond: string,
  addressSecondCategory: string,
  addressThird: string,
  addressThirdCategory: string,
  policy: string,
  copyright: string,
}

export interface IItemInPopDetailThumbnailCardProps {
  background: string,
}

export interface IItemInPopDetailLiveCardProps {
  liveStatus: boolean,
  popButtonText: string,
  popButtonType: string,
  liveButtonText: string,
  liveButtonType: string,
}

export interface IItemInPopDetailContentCardProps {
  content: Array<{ _id: string; title: string; body: string }>,
}

export interface IItemInPopDetailFloatCardProps {
  id: string,
  disabled: boolean,
  text: string,
  endDate: Date,
  endDateTime: string,
  buttonType: string,
  buttonText: string,
  onClickFunction: (id: string) => void,
}

export interface IItemInPopDetailInfoCardProps {
  title: string,
  body: Array<{ id: number; label: string }>,
  place: string,
  startTime: string,
  endTime: string,
  date: Date,
  endDate: Date,
  endDateTime: string,
  program: Array<string>,
}

export interface IItemInLoungePostProps {
  myMenu: boolean,
  body: string,
  images: {origin: string}[] | null
  link: ILinkModel | null,
  authorName: string,
  authorImage: string,
  createAt: string,
  likeCount: number,
  likeStatus: boolean,
  commentCount: number,
  onClickPostLike: () => void,
  onClickGoToLink: (link: string) => void,
  onClickGoToDetail: () => void,
  onClickOpenModal: () => void,
}

export interface IItemInLabListProps {
  recruitLabelStatus: boolean,
  recruitLabelText: string,
  chipType: string,
  category: ICategoryModel[],
  name: string,
  summary: string,
  background: string,
}

export interface IItemInLabDetailThumbnailCardProps {
  background: string,
}

export interface IItemInLabDetailInfoCardProps {
  recruitStatus: boolean,
  labName: string,
  cardTitle: string,
  cardDescription: string,
  firstBoxIcon: string,
  firstBoxData: string,
  firstBoxLabel: string,
  secondBoxIcon: string,
  secondBoxData: string,
  secondBoxLabel: string,
  thirdBoxIcon: string,
  thirdBoxData: string,
  thirdBoxLabel: string,
  infoText: string,
  infoToggle: boolean,
  firstMeetLabel: string,
  firstMeetData: string,
  weekIcon: string,
  weekData: string,
  weekLabel: string,
  timeIcon: string,
  timeData: string,
  timeLabel: string,
  placeIcon: string,
  placeData: string,
  placeLabel: string,
  onClickToggle: () => void,
}

export interface IItemInLabDetailSummaryCardProps {
  summaryData: string,
  masterThumbnail: string,
  masterName: string,
  masterGrade: string,
}

export interface IItemInLabDetailCategoryCardProps {
  categoryData: string,
  categoryTagType: string,
  objectiveDataList: Array<string>,
  objectiveTagType: string,
}

export interface IItemInLabDetailIntroCardProps {
  introData: string,
}

export interface IItemInLabDetailFloatCardProps {
  labId: string,
  myStatus: number,
  likeStatus: boolean,
  likeCount: number,
  recruitStatus: boolean,
  buttonType: string,
  buttonText: string,
  onClickLabLike: (id: string) => void,
  onClickGoToStack: (status: number, labId: string) => void,
}

export interface IItemInLabDetailApproveCardProps {
  labId: string,
  approvedCount: number,
  // recruitStatus: boolean,
  buttonType: string,
  buttonText: string,
  onClickFunction: (labId: string) => void,
}

export interface IItemInCreateLabIntroProps {
  introNameType: string,
  introNamePlaceholder: string,
  introNameMaxLength: number,
  introSummaryRows: number,
  introSummaryPlaceholder: string,
  introSummaryMaxLength: number,
  onChangeLabTitle: (e: { target: { value: string } }) => void,
  onChangeLabSummary: (e: { target: { value: string } }) => void,
}

export interface IItemInCreateLabDetailProps {
  detailRows: number,
  detailPlaceholder: string,
  detailMaxLength: number,
  onChangeLabDetail: (e: { target: { value: string } }) => void,
}

export interface IItemInCreateLabCategoryProps {
  categoryButtonText: string,
  onClickFunction: (modal: string) => void,
}

export interface IItemInCreateLabMeetingProps {
  meetingDateLabel: string,
  meetingDatePlaceholder: string,
  meetingPeriodLabel: string,
  meetingPeriodPlaceholder: string,
  meetingWeekLabel: string,
  meetingWeekPlaceholder: string,
  meetingTimeLabel: string,
  meetingTimePlaceholder: string,
  meetingPlaceLabel: string,
  meetingPlacePlaceholder: string,
  onClickOpenModal: (modal: string) => void,
}
export interface IItemInCreateLabRecruitProps {
  enteredQuestion: Array<string>,
  recruitMembersLabel: string,
  recruitMembersPlaceholder: string,
  recruitMembersType: string,
  recruitMembersMaxLength: number,
  recruitMembersLengthShow: boolean,
  recruitStartDateLabel: string,
  recruitStartDatePlaceholder: string,
  recruitQuestionsLabel: string,
  recruitQuestionsPlaceholder: string,
  recruitQuestionsType: string,
  recruitQuestionsMaxLength: number,
  recruitQuestionsLengthShow: boolean,
  recruitQuestionButtonType: string,
  recruitQuestionButtonText: string,
  onChangeLabMembers: (number: number) => void,
  onChangeQuestion: (string: string, index: number) => void,
  onClickAddQuestion: () => void,
}

export interface IItemInPostDetailPostProps {
  postId: string,
  myMenu: boolean,
  body: string,
  link: ILinkModel | null,
  images: {origin: string}[] | null,
  authorName: string,
  authorImage: string,
  createAt: string,
  likeCount: number,
  likeStatus: boolean,
  commentCount: number,
  onClickPostLike: () => void,
  onClickOpenModal: (id: string) => void,
  onClickGoToLink: (link: string) => void,
}

export interface IItemInPostDetailCommentProps {
  index: number,
  commentId: string,
  myComment: boolean,
  authorName: string,
  authorImage: string,
  createAt: string,
  updateAt: string | null,
  body: string,
  onClickOpenModal: (id: string) => void,
}

export interface IItemInPostDetailFloatProps {
  comment: string,
  placeholder: string,
  onKeyupFunction: () => void,
  onChangeFunction: (e: any) => void,
  onClickFunction: () => void,
}

export interface IItemInCreatePostLinkCardProps {
  url: string,
  crawlingUrl: ILinkModel | null,
  isLoading: boolean,
  placeholder: string,
  buttonText: string,
  onInputFunction: (e: any) => void,
  onClickFunction: () => void,
  onClickGoToLink: (link: string) => void,
  onClickInitPostLink: () => void,
}

export interface IItenInCreatePostImageCardProps {
  count: number,
  imageList: { url: string }[];
  editImageList: { origin: string }[];
  onClickAddImage: (e: any) => void;
  onClickRemoveImage: (index: number, type: string) => void;
}

export interface IItemInCreatePostButtonCardProps {
  isOpenImageBox: boolean,
  isOpenLinkBox: boolean,
  onClickImageToggle: () => void,
  onClickLinkToggle: () => void,
}

export interface IItemInJoinLabQuestionProps {
  label: string,
  question: string,
  questionRows: number,
  questionPlaceholder: string,
  questionMaxLength: number,
  questionLengthShow: boolean,
  onChangeFunction: (e: any) => void,
}

export interface IItemInJoinLabKnowProps {
  knowPlaceholder: string,
  onClickFunction: (mode: string) => void,
  onChangeFunction: (e: any) => void,
}

export interface IItemInJoinLabReplyProps {
  label: string,
  question: string,
  reply: string;
}

export interface IItemInJoinPopUserInfoProps {
  data: IUserModel;
  title: string;
  required: boolean;
}

export interface IItemInJoinPopJoinInfoProps {
  title: string;
  required: boolean;
  description: string;
}

export interface IItemInJoinPopFirstQuestionProps {
  label: string;
  title: string;
  menu: Array<{ id: number; name: string; value: string }>,
  selectedItem: number;
  onClickFunction: (id: number) => void;
}

export interface IItemInJoinPopSecondQuestionProps {
  label: string;
  title: string;
  description: string;
  menu: Array<{ id: number; name: string; value: string }>,
  selectedList: string[];
  onClickFunction: (value: string) => void;
}

export interface IItemInJoinPopThirdQuestionProps {
  label: string;
  title: string;
  description: string;
  menu: Array<{ id: number; name: string; value: string }>,
  selectedList: string[];
  onClickFunction: (value: string) => void;
}

export interface IItemInJoinPopFifthQuestionProps {
  label: string;
  title: string;
  menu: Array<{ id: number; name: string; value: string }>,
  selectedItem: number;
  onClickFunction: (id: number) => void;
}

export interface IItemInMyPageThumbnailLabelProps {
  thumbnail: string,
  title: string,
  status: string,
  category: string,
  invisible: boolean,
  type: string,
  onClickFunction: () => void,
}

export interface IItemInMyPageRecommendCardProps {
  header: string,
  thumbnail: string,
  title: string,
  category: string,
  onClickFunction: () => void,
}

// List Component
export interface IListCommonCheckListProps {
  menu: Array<{
    id: number,
    name: string,
    value: string,
  }>,
  selectedList: string[],
  onClickFunction: (name: string) => void,
}

export interface IListCommonModalFillProps {
  data: IModalListData[] | ICategoryModel[] | [],
  onClickFunction: (object: any) => void,
}

export interface IListCommonRadioListProps {
  menu: Array<{
    id: number,
    name: string,
    value: string,
  }>,
  selectedItem: number,
  onClickFunction: (id: number) => void,
}

export interface IListInLabVerticalProps {
  data: ILabElementData[] | [] | null,
  onClickGoToDetail: (id: string) => void,
}

export interface IListInMainBannerProps {
  data1: ICombineBannerModel[],
  data2: IMockBanner[],
  event: IMockBanner[],
  edu: IMockBanner[],
  onClickFunction: (link: string) => void,
  onClickGoToLink: (link: string) => void,
}

export interface IListInMainCategoryProps {
  data: any[] | [] | null,
  active: number,
  onClickGoToDetail: (id: string) => void,
}

export interface IListInMainPopProps {
  data: IPopItemData[] | [] | null,
  onClickFunction: (id: string) => void,
}

export interface IListInMainLabProps {
  data: ILabModel[] | [] | null,
  onClickFunction: (id: string) => void,
}

export interface IListInMainPostProps {
  data: IPostRecommendItemData[] | [] | null,
  chipType: string,
  chipText: string,
  onClickFunction: (id: string) => void,
}

export interface IListInPopProps {
  data: IPopItemData[],
  popChipText: string,
  popChipType: string,
  liveChipText: string,
  liveChipType: string,
}

export interface IListInPopPastProps {
  data: IPopItemData[]
  category: string,
  onClickFunction: (id: string) => void,
}

export interface IListInMypagePopProps {
  data: IMyPopItemData[],
  invisible: boolean,
  type: string,
  onClickFunction: (id: string) => void,
}

export interface IListInMypageLabProps {
  data: IMyLabItemData[],
  invisible: boolean,
  onClickToastHandler: () => void,
  onClickFunction: (id: string) => void,
}

export interface IButtonShowMoreProps {
  text: string,
  onClickFunction: () => void,
}
export interface IListInCategoryTitleProps {
  data: Array<{
    id: number,
    name: string,
    order: number,
    popList: Array<any>,
    labList: Array<any>,
  }>,
  onClickFunction: (id: string) => void,
}

export interface IListInCategoryPopProps {
  data: Array<{ id: number; thumbnail: string; title: string; link: string }>,
  onClickFunction: (link: string) => void,
}

export interface IListInLoungePostProps {
  data: ILoungePostItemData[],
  onClickGoToLink: (link: string) => void,
  onClickGoToDetail: (id: string) => void,
  onClickPostLike: (id: string) => void,
  onClickOpenModal: (id: string) => void,
}

export interface IListInPostDetailCommentProps {
  data: ICommentModel[] | null,
  commentCount: number,
}

export interface IListInModalCreateLabCategoryProps {
  data: ICategoryModel[] | [],
  onClickFunction: (category: ICategoryModel) => void,
}

export interface IListInModalLoungePostMyListProps {
  data: Array<{ id: number; name: string }> | [],
  onClickFunction: (id: number) => void,
}

export interface IListInModalJoinLabKnowProps {
  data: Array<{ id: number; name: string }> | [],
  onClickFunction: (name: string) => void,
}

export interface IListInJoinLabQuestionProps {
  data: string[] | [] | null,
  label: TQuestionObject,
  questionRows: number,
  questionPlaceholder: string,
  questionMaxLength: number,
  questionLengthShow: boolean,
  onChangeFunction: (e: any, index: number, answer: string) => void,
}
export interface IListInJoinLabReplyProps {
  data: IAnswerModel[],
  label: TQuestionObject,
}
// Hooks
export interface IUseObserverProps {
  root?: null,
  rootMargin?: string,
  threshold?: number,
  onIntersect: IntersectionObserverCallback,
}
