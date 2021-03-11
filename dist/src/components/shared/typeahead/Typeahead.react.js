"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _InputAdornment = _interopRequireDefault(require("@material-ui/core/InputAdornment"));

var _CircularProgress = _interopRequireDefault(require("@material-ui/core/CircularProgress"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Search = _interopRequireDefault(require("@material-ui/icons/Search"));

var _Clear = _interopRequireDefault(require("@material-ui/icons/Clear"));

require("./typeahead.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Typeahead = function Typeahead(props) {
  var data = props.data,
      label = props.label,
      _props$debounceTime = props.debounceTime,
      debounceTime = _props$debounceTime === void 0 ? 400 : _props$debounceTime,
      onFinish = props.onFinish;

  var _useState = (0, _react.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isLoading = _useState4[0],
      setIsLoading = _useState4[1];

  var timer = (0, _react.useRef)(null);
  var latestSearchId = (0, _react.useRef)(null);

  var search = function search(filter, searchId) {
    // Mock search
    setTimeout(function () {
      if (searchId === latestSearchId.current) {
        setIsLoading(false);
        var filteredData = data.filter(function (person) {
          return person.name.toLowerCase().includes(filter.toLowerCase()) || person.surname.toLowerCase().includes(filter.toLowerCase()) || person.age === parseInt(filter);
        });
        onFinish(filteredData);
      }
    }, 500);
  };

  var hanldeDebounce = function hanldeDebounce(value) {
    if (timer) {
      clearTimeout(timer.current);
    }

    ;
    setIsLoading(true);
    var searchId = Math.random();
    timer.current = setTimeout(function () {
      return search(value, searchId);
    }, debounceTime);
    latestSearchId.current = searchId;
  };

  var onTextChange = function onTextChange(e) {
    var value = e.target.value;
    setValue(value);
    hanldeDebounce(value);
  };

  var onClear = function onClear() {
    setValue('');
    hanldeDebounce('');
  };

  return /*#__PURE__*/_react.default.createElement(_TextField.default, {
    value: value,
    onChange: onTextChange,
    label: label,
    fullWidth: true,
    InputProps: {
      startAdornment: /*#__PURE__*/_react.default.createElement(_InputAdornment.default, {
        position: "start"
      }, isLoading ? /*#__PURE__*/_react.default.createElement(_CircularProgress.default, {
        size: 18
      }) : /*#__PURE__*/_react.default.createElement(_Search.default, null)),
      endAdornment: value && /*#__PURE__*/_react.default.createElement(_IconButton.default, {
        size: 'small',
        onClick: onClear
      }, /*#__PURE__*/_react.default.createElement(_Clear.default, null))
    }
  });
};

var _default = Typeahead;
exports.default = _default;

//# sourceMappingURL=Typeahead.react.js.map