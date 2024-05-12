import { ICategoryModel } from '@interface/model';
import {
  TValidateDateAlias,
  TValidateCombineTimeAlias,
  TValidateTimeAlias,
} from '@interface/alias';
import { DATE_WEEK } from '@assets/data/data';

export const validatePathOnlyDir = (path: string) => {
  const splitPath = path.split('/');
  const directory = splitPath[1];
  return `/${directory}`;
};

export const validateDate = (date: Date | string, type: TValidateDateAlias) => {
  const splitDate = String(date).split('T')[0];
  const year = splitDate.split('-')[0];
  // const yearNumber = year.split('20')[1];
  const month = Number(splitDate.split('-')[1]);
  const monthSub = String(splitDate.split('-')[1]);
  const day = Number(splitDate.split('-')[2]);
  const daySub = String(splitDate.split('-')[2]);
  const week = new Date(date).getDay();
  let result = '';
  if (type === '년') {
    result = year;
  }
  if (type === '월일') {
    result = `${month}월 ${day}일`;
  }
  if (type === '년월일') {
    result = `${year}년 ${month}월 ${day}일`;
  }
  if (type === '년.월.일') {
    result = `${year}.${monthSub}.${daySub}`;
  }
  if (type === '월일요') {
    result = `${month}월 ${day}일(${DATE_WEEK[week]})`;
  }
  if (type === '년월일요') {
    result = `${year}년 ${month}월 ${day}일(${DATE_WEEK[week]})`;
  }
  return result;
};

export const validateCount = (approvedCount: number) => `총 ${approvedCount === 0 ? 0 : approvedCount} 인`;

export const validateDateAndTime = (date: Date, time: string) => {
  const newDate = new Date(date).getTime();
  const splitTime = Number(time.split(':')[0]);
  return new Date(newDate + splitTime * 3600000);
};

export function validateElapsedTime(date: string) {
  const nineHours = 32400000; // milliseconds
  const start: any = new Date(date).getTime() - nineHours;
  const end: any = new Date();
  const diff = (end - start) / 1000;
  const times = [
    {
      name: '시간',
      milliSeconds: 3600,
    },
    {
      name: '분',
      milliSeconds: 60,
    },
  ];
  const dates = {
    name: '일',
    milliSeconds: 86400,
  };

  // 년, 월 안써서 임시로 주석처리
  // {
  //   name: '년',
  //   milliSeconds: 31536000,
  // },
  // {
  //   name: '개월',
  //   milliSeconds: 2592000,
  // },

  const betweenDate = Math.floor(diff / dates.milliSeconds);
  if (betweenDate > 0 && betweenDate < 11) {
    return `${betweenDate}${dates.name} 전`;
  }
  if (betweenDate > 10) {
    return validateDate(date, '년.월.일');
  }
  for (const value of times) {
    const betweenTime = Math.floor(diff / value.milliSeconds);
    if (betweenTime > 0) {
      return `${betweenTime}${value.name} 전`;
    }
  }
  return '방금 전';
}

export const validateTime = (time: string, type: TValidateTimeAlias) => {
  const splitTime = Number(time.split(':')[0]);
  const splitMin = time.split(':')[1];
  let result = '';
  if (time === null) {
    return '';
  }
  if (type === '시') {
    result = `${splitTime}시`;
  }
  if (type === '시분') {
    result = `${splitTime}시${splitMin}분`;
  }
  if (type === '오시') {
    result = `${splitTime > 12 ? '오후 ' : '오전 '}${
      splitTime > 12 ? splitTime - 12 : splitTime
    }시`;
  }
  if (type === '오시분') {
    result = `${splitTime > 12 ? '오후 ' : '오전 '}${
      splitTime > 12 ? splitTime - 12 : splitTime
    }시 ${splitMin}분`;
  }
  return result;
};

export const validateCombineTime = (
  startTime: string,
  endTime: string,
  type: TValidateCombineTimeAlias,
) => {
  const startTimeTime = Number(startTime.split(':')[0]);
  const startTimeMin = startTime.split(':')[1];
  const endTimeTime = Number(endTime.split(':')[0]);
  const endTimeMin = endTime.split(':')[1];
  let result = '';
  if (type === '시') {
    result = `${startTimeTime}시 - ${endTimeTime}시`;
  }
  if (type === '시분') {
    result = `${startTimeTime}시 ${startTimeMin}분 - ${endTimeTime}시 ${endTimeMin}분`;
  }
  if (type === '오시') {
    result = `${startTimeTime > 12 ? '오후 ' : '오전 '}${
      startTimeTime > 12 ? startTimeTime - 12 : startTimeTime
    }시 - ${endTimeTime > 12 ? endTimeTime - 12 : endTimeTime}시`;
  }
  if (type === '오시분') {
    result = `${startTimeTime > 12 ? '오후 ' : '오전 '}${
      startTimeTime > 12 ? startTimeTime - 12 : startTimeTime
    }시 ${startTimeMin}분 - ${
      endTimeTime > 12 ? endTimeTime - 12 : endTimeTime
    }시 ${endTimeMin}분`;
  }
  return result;
};

export const validateEndTime = (startTime: string) => {
  const splitTime = startTime.split(':');
  const plusTime = Number(splitTime[0]) + 2;
  return plusTime;
};

export const validateKoreaPrice = (price: number) => `${price === 0 ? '무료' : `${price}원`}`;

export const validateInputMaxLength = (input: string, number: number) => `${input.length}/${number}`;

export const validateKoreaDate = (date: any) => {
  const offset = 1000 * 60 * 60 * 9;
  const koreaDate = new Date(date.getTime() + offset);
  return koreaDate;
};

export const validateSplitPath = (path: string) => path.split('/')[1];

export const validateMember = (number: number) => `${number}명`;

export const validateCategory = (categoryList: ICategoryModel[]) => {
  const labCategory = categoryList.filter((item) => item.type === 1)[0];
  return labCategory.name;
};

export const validateTenDigit = (number: number) => {
  if (number < 10) {
    return `0${number}`;
  }
  return number;
};
