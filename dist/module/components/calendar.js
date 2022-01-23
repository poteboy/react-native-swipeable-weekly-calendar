import React, { useState, useMemo, useCallback, memo, useRef } from 'react';
import { createWholeWeek, formatDate, createWholeWeeks, itemWidht, createNextTwoWeeks, createPreviousTwoWeeks, screenWidth, colors, styles, createLocalWeek } from '../lib';
import { Header } from './header';
import { WeekItem } from './weekItem';
import { View, FlatList, unstable_batchedUpdates, Text } from 'react-native';
import { format } from 'date-fns';
export const CalendarComponent = /*#__PURE__*/memo(_ref => {
  let {
    date,
    language,
    onPressDate,
    selectedColor,
    showMonth,
    shadow
  } = _ref;
  const showHeader = showMonth !== null && showMonth !== void 0 ? showMonth : true;
  const [selectedDate, setSelectedDate] = useState(date); // to get current page's month

  const [appearDate, setAppearDate] = useState(date);
  const flatListRef = useRef();
  const getWholeWeek = useCallback(createWholeWeek, [createWholeWeek]);
  const wholeWeek = useMemo(() => {
    return getWholeWeek(selectedDate);
  }, [selectedDate, getWholeWeek]);
  const getWholeWeeks = useCallback(createWholeWeeks, [createWholeWeeks]);
  const wholeWeeks = useMemo(() => {
    return getWholeWeeks(selectedDate, wholeWeek);
  }, [selectedDate, wholeWeek]);
  const selectDate = useCallback(d => {
    onPressDate(d);
  }, [onPressDate]);
  const [weeks, setWeeks] = useState(wholeWeeks);
  const endReach = useCallback(() => {
    const n = createNextTwoWeeks(weeks.slice(-1)[0], []);
    setWeeks(w => {
      return [...w, ...n];
    });
  }, [weeks, createNextTwoWeeks, setWeeks]);
  const momentumEnd = useCallback(event => {
    const widthFromStart = event.nativeEvent.contentOffset.x;

    if (widthFromStart < screenWidth) {
      const b = createPreviousTwoWeeks(weeks[0], []);
      unstable_batchedUpdates(() => {
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
  }, [createPreviousTwoWeeks, weeks, setWeeks, flatListRef, setAppearDate]);
  const localMonth = useMemo(() => {
    return format(appearDate, 'LLLL', {
      locale: createLocalWeek(language)
    });
  }, [createLocalWeek, appearDate]);
  return /*#__PURE__*/React.createElement(View, {
    style: shadow ? {
      backgroundColor: colors.white,
      paddingTop: 5,
      paddingBottom: 10,
      ...styles.shadow
    } : {
      backgroundColor: colors.white,
      paddingTop: 5,
      paddingBottom: 10
    }
  }, showHeader && /*#__PURE__*/React.createElement(View, {
    style: {
      alignSelf: 'center',
      paddingVertical: 10
    }
  }, /*#__PURE__*/React.createElement(Text, {
    style: {
      fontSize: 18
    }
  }, localMonth)), /*#__PURE__*/React.createElement(Header, {
    language: language
  }), /*#__PURE__*/React.createElement(FlatList, {
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
      length: itemWidht,
      offset: itemWidht * index,
      index
    }),
    renderItem: _ref2 => {
      let {
        item
      } = _ref2;
      return /*#__PURE__*/React.createElement(WeekItem, {
        date: item,
        selectedDate: formatDate(item) === formatDate(date),
        onSelectDate: selectDate,
        selectedColor: selectedColor,
        key: item.toDateString()
      });
    }
  }));
});
//# sourceMappingURL=calendar.js.map