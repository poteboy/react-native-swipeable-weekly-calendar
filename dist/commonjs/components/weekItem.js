"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WeekItem = void 0;

var _react = _interopRequireWildcard(require("react"));

var _lib = require("../lib");

var _reactNative = require("react-native");

var _dateFns = require("date-fns");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const WeekItem = /*#__PURE__*/(0, _react.memo)(_ref => {
  let {
    date,
    selectedDate,
    onSelectDate,
    selectedColor
  } = _ref;
  const day = (0, _dateFns.getDate)(date);
  const selectDate = (0, _react.useCallback)(() => {
    onSelectDate(date);
  }, [date, onSelectDate]);
  const bgColor = selectedColor !== null && selectedColor !== void 0 ? selectedColor : _lib.colors.defaultBg;
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      width: _lib.itemWidht,
      alignItems: 'center',
      paddingVertical: 5
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    onPress: selectDate
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: selectedDate ? { ..._lib.styles.eachDay,
      backgroundColor: bgColor,
      borderColor: bgColor,
      color: _lib.colors.white
    } : { ..._lib.styles.eachDay,
      color: (0, _dateFns.getDay)(date) === 0 ? _lib.colors.sunday : (0, _dateFns.getDay)(date) === 6 ? _lib.colors.saturday : _lib.colors.black
    }
  }, day)));
});
exports.WeekItem = WeekItem;
//# sourceMappingURL=weekItem.js.map