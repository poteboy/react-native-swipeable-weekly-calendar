import { ja, enUS, ko, es } from 'date-fns/locale';
import { getDay, addDays, subDays, format, addWeeks, subWeeks } from 'date-fns';
export const createLocalWeek = lang => {
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
export const createWholeWeek = date => {
  const weekOfTheDay = getDay(date);
  const arr = [];

  for (let i = 0; i < 7; i++) {
    const diff = i - weekOfTheDay;
    const abs = Math.abs(diff);
    if (diff === 0) arr.push(date);else if (diff < 0) arr.push(subDays(date, abs));else arr.push(addDays(date, abs));
  }

  return arr;
};
export const createWholeWeeks = (date, wholeWeek) => {
  const lastWeek = createWholeWeek(subWeeks(date, 1));
  const weekBeforeLastWeek = createWholeWeek(subWeeks(date, 2));
  const nextWeek = createWholeWeek(addWeeks(date, 1));
  const weekAfterNextWeek = createWholeWeek(addWeeks(date, 2));
  return [...weekBeforeLastWeek, ...lastWeek, ...wholeWeek, ...nextWeek, ...weekAfterNextWeek];
};
export const createWeekList = locale => {
  const list = [];

  for (let i = 0; i < 7; i++) {
    var _locale$localize;

    list.push((_locale$localize = locale.localize) === null || _locale$localize === void 0 ? void 0 : _locale$localize.day(i, {
      width: 'short'
    }));
  }

  return list;
};
export const formatDate = d => {
  return format(d, 'yyyy年MM月dd日');
};
export const createNextTwoWeeks = (d, arr) => {
  if (arr.length === 14) return arr;

  for (let i = 0; i < 7; i++) {
    arr.push(addDays(d, i + 1));
  }

  return createNextTwoWeeks(arr.slice(-1)[0], arr);
};
export const createPreviousTwoWeeks = (d, arr) => {
  if (arr.length === 14) return arr;

  for (let i = 0; i < 7; i++) {
    arr.unshift(subDays(d, i + 1));
  }

  return createPreviousTwoWeeks(arr[0], arr);
};
//# sourceMappingURL=functions.js.map