import React, { FC, useState, useMemo, useCallback } from 'react';
import { format } from 'date-fns';
import { CalendarProps, createWholeWeek, formatDate } from '../lib';
import { Header } from './header';
import { WeekItem } from './weekItem';
import { View, FlatList } from 'react-native';

export const CalendarComponent: FC<CalendarProps> = ({ date, language }) => {
  const [selectedDate, setSelectedDate] = useState(date);
  const getWholeWeek = useCallback(createWholeWeek, [createWholeWeek]);
  const wholeWeek = useMemo(() => {
    return getWholeWeek(selectedDate);
  }, [selectedDate, getWholeWeek]);

  const selectDate = useCallback((d: Date) => {
    setSelectedDate(d);
  }, []);

  return (
    <View>
      <Header language={language} />
      <FlatList
        data={wholeWeek}
        horizontal
        pagingEnabled
        bounces
        renderItem={({ item }) => {
          return (
            <WeekItem
              date={item}
              selectedDate={formatDate(item) === formatDate(selectedDate)}
              onSelectDate={selectDate}
            />
          );
        }}
      />
    </View>
  );
};
