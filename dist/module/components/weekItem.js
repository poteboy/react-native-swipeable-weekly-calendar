import React, { memo, useCallback } from 'react';
import { styles, itemWidht, colors } from '../lib';
import { View, TouchableOpacity, Text } from 'react-native';
import { getDate, getDay } from 'date-fns';
export const WeekItem = /*#__PURE__*/memo(_ref => {
  let {
    date,
    selectedDate,
    onSelectDate,
    selectedColor
  } = _ref;
  const day = getDate(date);
  const selectDate = useCallback(() => {
    onSelectDate(date);
  }, [date, onSelectDate]);
  const bgColor = selectedColor !== null && selectedColor !== void 0 ? selectedColor : colors.defaultBg;
  return /*#__PURE__*/React.createElement(View, {
    style: {
      width: itemWidht,
      alignItems: 'center',
      paddingVertical: 5
    }
  }, /*#__PURE__*/React.createElement(TouchableOpacity, {
    onPress: selectDate
  }, /*#__PURE__*/React.createElement(Text, {
    style: selectedDate ? { ...styles.eachDay,
      backgroundColor: bgColor,
      borderColor: bgColor,
      color: colors.white
    } : { ...styles.eachDay,
      color: getDay(date) === 0 ? colors.sunday : getDay(date) === 6 ? colors.saturday : colors.black
    }
  }, day)));
});
//# sourceMappingURL=weekItem.js.map