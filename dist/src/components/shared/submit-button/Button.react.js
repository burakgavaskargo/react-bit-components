"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@material-ui/core");

var _react = _interopRequireDefault(require("react"));

require("./button.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function Button(props) {
  var text = props.text,
      onClick = props.onClick,
      disabled = props.disabled;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement(_core.Button, {
    variant: "contained",
    color: "primary",
    onClick: onClick,
    disabled: disabled,
    type: "submit"
  }, text), disabled && /*#__PURE__*/_react.default.createElement(_core.CircularProgress, {
    className: "loader",
    color: "primary",
    size: 25
  }));
};

var _default = Button;
exports.default = _default;

//# sourceMappingURL=Button.react.js.map