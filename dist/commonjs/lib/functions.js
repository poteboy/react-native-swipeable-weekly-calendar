"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatDate = exports.createWholeWeeks = exports.createWholeWeek = exports.createWeekList = exports.createPreviousTwoWeeks = exports.createNextTwoWeeks = exports.createLocalWeek = void 0;

var _locale = require("date-fns/locale");

var _dateFns = require("date-fns");

const createLocalWeek = lang => {
  switch (lang) {
    case 'ja':
      return _locale.ja;

    case 'en':
      return _locale.enUS;

    case 'ko':
      return _locale.ko;

    case 'es':
      return _locale.es;

    default:
      return _locale.enUS;
  }
};

exports.createLocalWeek = createLocalWeek;

const createWholeWeek = date => {
  const weekOfTheDay = (0, _dateFns.getDay)(date);
  const arr = [];

  for (let i = 0; i < 7; i++) {
    const diff = i - weekOfTheDay;
    const abs = Math.abs(diff);
    if (diff === 0) arr.push(date);else if (diff < 0) arr.push((0, _dateFns.subDays)(date, abs));else arr.push((0, _dateFns.addDays)(date, abs));
  }

  return arr;
};

exports.createWholeWeek = createWholeWeek;

const createWholeWeeks = (date, wholeWeek) => {
  const lastWeek = createWholeWeek((0, _dateFns.subWeeks)(date, 1));
  const weekBeforeLastWeek = createWholeWeek((0, _dateFns.subWeeks)(date, 2));
  const nextWeek = createWholeWeek((0, _dateFns.addWeeks)(date, 1));
  const weekAfterNextWeek = createWholeWeek((0, _dateFns.addWeeks)(date, 2));
  return [...weekBeforeLastWeek, ...lastWeek, ...wholeWeek, ...nextWeek, ...weekAfterNextWeek];
};

exports.createWholeWeeks = createWholeWeeks;

const createWeekList = locale => {
  const list = [];

  for (let i = 0; i < 7; i++) {
    var _locale$localize;

    list.push((_locale$localize = locale.localize) === null || _locale$localize === void 0 ? void 0 : _locale$localize.day(i, {
      width: 'short'
    }));
  }

  return list;
};

exports.createWeekList = createWeekList;

const formatDate = d => {
  return (0, _dateFns.format)(d, 'yyyy年MM月dd日');
};

exports.formatDate = formatDate;

const createNextTwoWeeks = (d, arr) => {
  if (arr.length === 14) return arr;

  for (let i = 0; i < 7; i++) {
    arr.push((0, _dateFns.addDays)(d, i + 1));
  }

  return createNextTwoWeeks(arr.slice(-1)[0], arr);
};

exports.createNextTwoWeeks = createNextTwoWeeks;

const createPreviousTwoWeeks = (d, arr) => {
  if (arr.length === 14) return arr;

  for (let i = 0; i < 7; i++) {
    arr.unshift((0, _dateFns.subDays)(d, i + 1));
  }

  return createPreviousTwoWeeks(arr[0], arr);
};

exports.createPreviousTwoWeeks = createPreviousTwoWeeks;
//# sourceMappingURL=functions.js.map