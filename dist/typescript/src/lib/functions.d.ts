import { Language } from './types';
import { Locale } from 'date-fns';
export declare const createLocalWeek: (lang?: Language | undefined) => Locale;
export declare const createWholeWeek: (date: Date) => Date[];
export declare const createWholeWeeks: (date: Date, wholeWeek: Date[]) => Date[];
export declare const createWeekList: (locale: Locale) => string[];
export declare const formatDate: (d: Date) => string;
export declare const createNextTwoWeeks: (d: Date, arr: Date[]) => Date[];
export declare const createPreviousTwoWeeks: (d: Date, arr: Date[]) => Date[];
