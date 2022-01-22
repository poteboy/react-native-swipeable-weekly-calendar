import { Dimensions, StyleSheet } from 'react-native';

export const screenWidth = Dimensions.get('screen').width;

export const styles = StyleSheet.create({
  eachDay: {
    padding: 10,
    borderRadius: 20,
    borderWidth: 1,
    overflow: 'hidden',
    borderColor: 'transparent',
  },
});
