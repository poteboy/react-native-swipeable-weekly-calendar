import React, { memo, useMemo, useCallback } from 'react';
import { createLocalWeek, createWeekList, screenWidth, colors } from '../lib';
import { View, Text } from 'react-native';
export const Header = /*#__PURE__*/memo(_ref => {
  let {
    language
  } = _ref;
  const getLocalWeek = useCallback(createLocalWeek, [createLocalWeek]);
  const localWeek = useMemo(() => {
    return getLocalWeek(language);
  }, [language, getLocalWeek]);
  const getWeekList = useCallback(createWeekList, [createWeekList]);
  const weekList = useMemo(() => {
    return getWeekList(localWeek);
  }, [localWeek, getWeekList]);
  return /*#__PURE__*/React.createElement(View, {
    style: {
      display: 'flex',
      flexDirection: 'row',
      paddingVertical: 10
    }
  }, weekList.map((w, index) => {
    return /*#__PURE__*/React.createElement(View, {
      key: index,
      style: {
        width: screenWidth / 7,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Text, {
      style: {
        color: index === 0 ? colors.sunday : index === 6 ? colors.saturday : colors.defaultWeekColor,
        fontSize: 12
      }
    }, w));
  }));
});
//# sourceMappingURL=header.js.map