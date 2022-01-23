import React, { FC, memo, useCallback } from 'react';
import { styles, WeekItemProps, itemWidht, colors } from '../lib';
import { View, TouchableOpacity, Text } from 'react-native';
import { getDate, getDay } from 'date-fns';

export const WeekItem: FC<WeekItemProps> = memo(
  ({ date, selectedDate, onSelectDate, selectedColor }) => {
    const day = getDate(date);
    const selectDate = useCallback(() => {
      onSelectDate(date);
    }, [date, onSelectDate]);

    const bgColor = selectedColor ?? colors.defaultBg;

    return (
      <View
        style={{ width: itemWidht, alignItems: 'center', paddingVertical: 5 }}
      >
        <TouchableOpacity onPress={selectDate}>
          <Text
            style={
              selectedDate
                ? {
                    ...styles.eachDay,
                    backgroundColor: bgColor,
                    borderColor: bgColor,
                    color: colors.white,
                  }
                : {
                    ...styles.eachDay,
                    color:
                      getDay(date) === 0
                        ? colors.sunday
                        : getDay(date) === 6
                        ? colors.saturday
                        : colors.black,
                  }
            }
          >
            {day}
          </Text>
        </TouchableOpacity>
      </View>
    );
  },
);
