"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@material-ui/core");

var _react = _interopRequireDefault(require("react"));

require("./search-input.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SearchInput = function SearchInput(props) {
  var placeholder = props.placeholder,
      value = props.value,
      _onChange = props.onChange,
      disabled = props.disabled,
      label = props.label;
  return /*#__PURE__*/_react.default.createElement(_core.TextField, {
    placeholder: placeholder,
    label: label,
    disabled: disabled,
    value: value,
    onChange: function onChange(e) {
      _onChange(e.target.value);
    },
    fullWidth: true
  });
};

var _default = SearchInput;
exports.default = _default;

//# sourceMappingURL=SearchInput.react.js.map