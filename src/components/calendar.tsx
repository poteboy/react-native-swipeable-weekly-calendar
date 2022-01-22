import React, { FC, memo, useState, useMemo, useCallback } from 'react';
import { format } from 'date-fns';
import { CalendarProps, createWholeWeek } from '../lib';
import { Header } from './header';
import { View, FlatList } from 'react-native';

export const CalendarComponent: FC<CalendarProps> = memo(
  ({ date, language }) => {
    const [selectedDate, setSelectedDate] = useState(date);
    const getWholeWeek = useCallback(createWholeWeek, [createWholeWeek]);
    const wholeWeek = useMemo(() => {
      return getWholeWeek(selectedDate);
    }, [selectedDate, getWholeWeek]);

    return (
      <View>
        <Header language={language} />
      </View>
    );
  },
);
