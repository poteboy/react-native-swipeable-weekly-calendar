"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = void 0;

var _react = _interopRequireWildcard(require("react"));

var _lib = require("../lib");

var _reactNative = require("react-native");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Header = /*#__PURE__*/(0, _react.memo)(_ref => {
  let {
    language
  } = _ref;
  const getLocalWeek = (0, _react.useCallback)(_lib.createLocalWeek, [_lib.createLocalWeek]);
  const localWeek = (0, _react.useMemo)(() => {
    return getLocalWeek(language);
  }, [language, getLocalWeek]);
  const getWeekList = (0, _react.useCallback)(_lib.createWeekList, [_lib.createWeekList]);
  const weekList = (0, _react.useMemo)(() => {
    return getWeekList(localWeek);
  }, [localWeek, getWeekList]);
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      display: 'flex',
      flexDirection: 'row',
      paddingVertical: 10
    }
  }, weekList.map((w, index) => {
    return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      key: index,
      style: {
        width: _lib.screenWidth / 7,
        alignItems: 'center'
      }
    }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
      style: {
        color: index === 0 ? _lib.colors.sunday : index === 6 ? _lib.colors.saturday : _lib.colors.defaultWeekColor,
        fontSize: 12
      }
    }, w));
  }));
});
exports.Header = Header;
//# sourceMappingURL=header.js.map