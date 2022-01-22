import React, { FC, memo, useCallback } from 'react';
import { screenWidth, styles, WeekItemProps } from '../lib';
import { View, TouchableOpacity, Text } from 'react-native';
import { getDate } from 'date-fns';

export const WeekItem: FC<WeekItemProps> = memo(
  ({ date, selectedDate, onSelectDate, selectedColor }) => {
    const day = getDate(date);
    const selectDate = useCallback(() => {
      onSelectDate(date);
    }, [date, onSelectDate]);

    const bgColor = selectedColor ?? 'lightblue';

    return (
      <View style={{ width: screenWidth / 7, alignItems: 'center' }}>
        <TouchableOpacity onPress={selectDate}>
          <Text
            style={
              selectedDate
                ? {
                    ...styles.eachDay,
                    backgroundColor: bgColor,
                    borderColor: bgColor,
                  }
                : { ...styles.eachDay }
            }
          >
            {day}
          </Text>
        </TouchableOpacity>
      </View>
    );
  },
);
