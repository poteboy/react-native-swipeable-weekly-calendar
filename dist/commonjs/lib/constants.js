"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.swipeThreshold = exports.swipeSpeed = exports.styles = exports.screenWidth = exports.itemWidht = exports.colors = void 0;

var _reactNative = require("react-native");

const screenWidth = _reactNative.Dimensions.get('screen').width;

exports.screenWidth = screenWidth;
const itemWidht = screenWidth / 7;
exports.itemWidht = itemWidht;
const swipeThreshold = 0.25 * screenWidth;
exports.swipeThreshold = swipeThreshold;
const swipeSpeed = 0.2;
exports.swipeSpeed = swipeSpeed;
const colors = {
  white: '#ffff',
  sunday: '#E17F7F',
  saturday: '#7FB9E1',
  defaultWeekColor: '#7E7E7E',
  defaultBg: 'lightblue',
  shadowColor: '#000',
  black: 'black'
};
exports.colors = colors;

const styles = _reactNative.StyleSheet.create({
  eachDay: {
    padding: 10,
    borderRadius: 20,
    borderWidth: 1,
    overflow: 'hidden',
    borderColor: 'transparent',
    minWidth: 40,
    textAlign: 'center'
  },
  shadow: {
    shadowColor: colors.shadowColor,
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3
  }
});

exports.styles = styles;
//# sourceMappingURL=constants.js.map