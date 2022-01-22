import { Language } from './types';
import { ja, enUS, ko, es } from 'date-fns/locale';
import {
  Locale,
  getDay,
  addDays,
  subDays,
  format,
  addWeeks,
  subWeeks,
} from 'date-fns';

export const createLocalWeek = (lang: Language): Locale => {
  switch (lang) {
    case 'ja':
      return ja;
    case 'en':
      return enUS;
    case 'ko':
      return ko;
    case 'es':
      return es;
    default:
      return enUS;
  }
};

export const createWholeWeek = (date: Date): Date[] => {
  const weekOfTheDay = getDay(date);
  const arr: Date[] = [];
  for (let i = 0; i < 7; i++) {
    const diff = i - weekOfTheDay;
    const abs = Math.abs(diff);
    if (diff === 0) arr.push(date);
    else if (diff < 0) arr.push(subDays(date, abs));
    else arr.push(addDays(date, abs));
  }
  return arr;
};

export const createWholeWeeks = (date: Date, wholeWeek: Date[]) => {
  const lastWeek = createWholeWeek(subWeeks(date, 1));
  const weekBeforeLastWeek = createWholeWeek(subWeeks(date, 2));
  const nextWeek = createWholeWeek(addWeeks(date, 1));
  const weekAfterNextWeek = createWholeWeek(addWeeks(date, 2));
  return [
    ...weekBeforeLastWeek,
    ...lastWeek,
    ...wholeWeek,
    ...nextWeek,
    ...weekAfterNextWeek,
  ];
};

export const createWeekList = (locale: Locale) => {
  const list: string[] = [];
  for (let i = 0; i < 7; i++) {
    list.push(locale.localize?.day(i, { width: 'short' }));
  }
  return list;
};

export const formatDate = (d: Date) => {
  return format(d, 'yyyy年MM月dd日');
};

export const createNextTwoWeeks = (d: Date, arr: Date[]): Date[] => {
  if (arr.length === 14) return arr;
  for (let i = 0; i < 7; i++) {
    arr.push(addDays(d, i + 1));
  }
  return createNextTwoWeeks(arr.slice(-1)[0], arr);
};

export const createPreviousTwoWeeks = (d: Date, arr: Date[]): Date[] => {
  if (arr.length === 14) return arr;
  for (let i = 0; i < 7; i++) {
    arr.unshift(subDays(d, i + 1));
  }
  return createPreviousTwoWeeks(arr[0], arr);
};
