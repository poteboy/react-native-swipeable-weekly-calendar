import React, { FC, useState, useCallback } from 'react';
import { View } from 'react-native';
import CalendarComponent from 'src/index';

export const App: FC = () => {
  const [date, setDate] = useState(new Date());

  const pressDate = useCallback(
    (d: Date) => {
      setDate(d);
    },
    [setDate],
  );

  return (
    <View>
      <CalendarComponent
        date={date}
        onPressDate={pressDate}
        showMonth
        language="ja"
      />
    </View>
  );
};
