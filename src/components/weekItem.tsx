import React, { FC, memo } from 'react';
import { WeekItemProps } from '../lib/types';
import { screenWidth } from '../lib/constants';
import { View, TouchableOpacity, Text } from 'react-native';

export const WeekItem: FC<WeekItemProps> = memo(() => {
  return (
    <View style={{ width: screenWidth / 7, alignItems: 'center' }}>
      <TouchableOpacity>
        <Text>1</Text>
      </TouchableOpacity>
    </View>
  );
});
