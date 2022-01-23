"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CalendarComponent = void 0;

var _react = _interopRequireWildcard(require("react"));

var _lib = require("../lib");

var _header = require("./header");

var _weekItem = require("./weekItem");

var _reactNative = require("react-native");

var _dateFns = require("date-fns");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const CalendarComponent = /*#__PURE__*/(0, _react.memo)(_ref => {
  let {
    date,
    language,
    onPressDate,
    selectedColor,
    showMonth
  } = _ref;
  const showHeader = showMonth !== null && showMonth !== void 0 ? showMonth : true;
  const [selectedDate, setSelectedDate] = (0, _react.useState)(date); // to get current page's month

  const [appearDate, setAppearDate] = (0, _react.useState)(date);
  const flatListRef = (0, _react.useRef)();
  const getWholeWeek = (0, _react.useCallback)(_lib.createWholeWeek, [_lib.createWholeWeek]);
  const wholeWeek = (0, _react.useMemo)(() => {
    return getWholeWeek(selectedDate);
  }, [selectedDate, getWholeWeek]);
  const getWholeWeeks = (0, _react.useCallback)(_lib.createWholeWeeks, [_lib.createWholeWeeks]);
  const wholeWeeks = (0, _react.useMemo)(() => {
    return getWholeWeeks(selectedDate, wholeWeek);
  }, [selectedDate, wholeWeek]);
  const selectDate = (0, _react.useCallback)(d => {
    onPressDate(d);
  }, [onPressDate]);
  const [weeks, setWeeks] = (0, _react.useState)(wholeWeeks);
  const endReach = (0, _react.useCallback)(() => {
    const n = (0, _lib.createNextTwoWeeks)(weeks.slice(-1)[0], []);
    setWeeks(w => {
      return [...w, ...n];
    });
  }, [weeks, _lib.createNextTwoWeeks, setWeeks]);
  const momentumEnd = (0, _react.useCallback)(event => {
    const widthFromStart = event.nativeEvent.contentOffset.x;

    if (widthFromStart < _lib.screenWidth) {
      const b = (0, _lib.createPreviousTwoWeeks)(weeks[0], []);
      (0, _reactNative.unstable_batchedUpdates)(() => {
        setWeeks(w => {
          return [...b, ...w];
        });
        flatListRef.current.scrollToIndex({
          animated: false,
          index: 14
        });
      });
    }

    const currentPage = widthFromStart / event.nativeEvent.layoutMeasurement.width;
    setAppearDate(weeks[currentPage * 7 + 6]);
  }, [_lib.createPreviousTwoWeeks, weeks, setWeeks, flatListRef, setAppearDate]);
  const localMonth = (0, _react.useMemo)(() => {
    return (0, _dateFns.format)(appearDate, 'LLLL', {
      locale: (0, _lib.createLocalWeek)(language)
    });
  }, [_lib.createLocalWeek, appearDate]);
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      backgroundColor: _lib.colors.white,
      paddingTop: 5,
      paddingBottom: 10,
      ..._lib.styles.shadow
    }
  }, showHeader && /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      alignSelf: 'center',
      paddingVertical: 10
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: {
      fontSize: 18
    }
  }, localMonth)), /*#__PURE__*/_react.default.createElement(_header.Header, {
    language: language
  }), /*#__PURE__*/_react.default.createElement(_reactNative.FlatList, {
    ref: flatListRef,
    data: weeks,
    extraData: selectedDate,
    initialScrollIndex: 14,
    horizontal: true,
    pagingEnabled: true,
    bounces: true,
    showsHorizontalScrollIndicator: false,
    onEndReached: endReach,
    onEndReachedThreshold: 0.01,
    onMomentumScrollEnd: momentumEnd,
    getItemLayout: (_, index) => ({
      length: _lib.itemWidht,
      offset: _lib.itemWidht * index,
      index
    }),
    renderItem: _ref2 => {
      let {
        item
      } = _ref2;
      return /*#__PURE__*/_react.default.createElement(_weekItem.WeekItem, {
        date: item,
        selectedDate: (0, _lib.formatDate)(item) === (0, _lib.formatDate)(date),
        onSelectDate: selectDate,
        selectedColor: selectedColor,
        key: item.toDateString()
      });
    }
  }));
});
exports.CalendarComponent = CalendarComponent;
//# sourceMappingURL=calendar.js.map