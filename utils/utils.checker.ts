export const checkPathIsPage = (path: string) => {
  const pageList = [
    '/',
    '/lounge',
    '/lab/',
    '/mypage',
  ];
  const isPage = pageList.includes(path);
  if (isPage) {
    return true;
  }
  return false;
};

export const checkHasButtonPage = (path: string) => {
  const pageList = [
    '/lounge',
    '/lab/',
  ];
  const isButtonPage = pageList.includes(path);
  if (isButtonPage) {
    return true;
  }
  return false;
};

export const checkTransparentHeader = (path: string): boolean => {
  const splitPage = path.split('/')[1];
  const transparentList = [
    'labdetail',
    'event',
    'popdetail',
  ];
  const isTransparent = transparentList.includes(splitPage);
  if (isTransparent) {
    return true;
  }
  return false;
};

export const checkGradientHeader = (path: string): boolean => {
  const splitPage = path.split('/')[1];
  const gradientList = [
    'labdetail',
    'popdetail',
  ];
  const isGradient = gradientList.includes(splitPage);
  if (isGradient) {
    return true;
  }
  return false;
};

export const checkSystemModal = (modalType: string): boolean => {
  const systemModalList = [
    'loungePostDelete',
    'loungePostCommentDelete',
    'endLabRecruit',
  ];
  if (systemModalList.includes(modalType)) {
    return true;
  }
  return false;
};

export const checkPopUpModal = (modalType: string): boolean => {
  const popUpModalList = [
    'popQrPopup',
    'commonFooter',
    'noticeEndRecruit',
    'joinPopAgree',
    'createLab',
    'joinLab',
    'joinPop',
    'guideLab',
    'agreeLab',
  ];
  if (popUpModalList.includes(modalType)) {
    return true;
  }
  return false;
};

export const checkBottomModal = (modalType: string): boolean => {
  const bottomModalList = [
    'commonLinkShare',
    'createLabAgree',
    'createLabCategory',
    'createLabPeriod',
    'createLabWeek',
    'createLabTime',
    'createLabPlace',
    'loungePost',
    'loungePostComment',
    'joinLabKnow',
  ];
  if (bottomModalList.includes(modalType)) {
    return true;
  }
  return false;
};

export const checkWeekend = (week: string): boolean => {
  const weekend = [
    '토',
    '일',
  ];
  const result = weekend.includes(week);
  if (result) {
    return true;
  }
  return false;
};
