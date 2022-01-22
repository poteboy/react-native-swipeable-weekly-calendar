import { Language } from './types';
import { ja, enUS } from 'date-fns/locale';
import { Locale, getDay, addDays, subDays, format } from 'date-fns';

export const createLocalWeek = (lang: Language): Locale => {
  switch (lang) {
    case 'ja':
      return ja;
    case 'en':
      return enUS;
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
