import React, { FC, memo, useMemo, useCallback } from 'react';
import {
  CalendarHeaderProps,
  createLocalWeek,
  createWeekList,
  screenWidth,
} from '../lib';
import { View, Text } from 'react-native';

export const Header: FC<CalendarHeaderProps> = memo(({ language }) => {
  const getLocalWeek = useCallback(createLocalWeek, [createLocalWeek]);
  const localWeek = useMemo(() => {
    return getLocalWeek(language);
  }, [language, getLocalWeek]);
  const getWeekList = useCallback(createWeekList, [createWeekList]);
  const weekList = useMemo(() => {
    return getWeekList(localWeek);
  }, [localWeek, getWeekList]);

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        paddingVertical: 10,
      }}
    >
      {weekList.map((w, index) => {
        return (
          <View
            key={index}
            style={{
              width: screenWidth / 7,
              alignItems: 'center',
            }}
          >
            <Text>{w}</Text>
          </View>
        );
      })}
    </View>
  );
});
