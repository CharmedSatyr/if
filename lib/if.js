"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var If = function If(props) {
  if (!!props.condition) {
    if (!!props.then) {
      return _react.default.createElement(_react.Fragment, null, props.then);
    } else if (!!props.children) {
      return _react.default.createElement(_react.Fragment, null, props.children);
    }
  } else {
    if (!!props.unless) {
      return _react.default.createElement(_react.Fragment, null, props.unless);
    } else if (!!props.else) {
      return _react.default.createElement(_react.Fragment, null, props.else);
    }
  }

  return null;
};

var _default = If;
exports.default = _default;