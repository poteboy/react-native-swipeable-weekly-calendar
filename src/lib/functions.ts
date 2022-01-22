import { Language } from './types';
import { ja, enUS } from 'date-fns/locale';
import { Locale } from 'date-fns';

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

export const createWholeWeek = (date: Date): [] => {
  return [];
};

export const createWeekList = (locale: Locale) => {
  const list: string[] = [];
  for (let i = 0; i < 7; i++) {
    list.push(locale.localize?.day(i, { width: 'short' }));
  }
  return list;
};
