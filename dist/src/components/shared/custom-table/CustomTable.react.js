"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _TableContainer = _interopRequireDefault(require("@material-ui/core/TableContainer"));

var _Table = _interopRequireDefault(require("@material-ui/core/Table"));

var _TableHead = _interopRequireDefault(require("@material-ui/core/TableHead"));

var _TableRow = _interopRequireDefault(require("@material-ui/core/TableRow"));

var _TableCell = _interopRequireDefault(require("@material-ui/core/TableCell"));

var _TableBody = _interopRequireDefault(require("@material-ui/core/TableBody"));

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

require("./custom-table.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CustomTable = function CustomTable(props) {
  var columns = props.columns,
      rows = props.rows;
  return /*#__PURE__*/_react.default.createElement(_TableContainer.default, {
    component: _Paper.default
  }, /*#__PURE__*/_react.default.createElement(_Table.default, null, /*#__PURE__*/_react.default.createElement(_TableHead.default, null, /*#__PURE__*/_react.default.createElement(_TableRow.default, null, columns.map(function (col, i) {
    return /*#__PURE__*/_react.default.createElement(_TableCell.default, {
      key: i
    }, col);
  }))), /*#__PURE__*/_react.default.createElement(_TableBody.default, null, rows.map(function (row, i) {
    return /*#__PURE__*/_react.default.createElement(_TableRow.default, {
      key: i
    }, row.map(function (cell, i2) {
      return /*#__PURE__*/_react.default.createElement(_TableCell.default, {
        key: i2
      }, cell);
    }));
  }))));
};

var _default = CustomTable;
exports.default = _default;

//# sourceMappingURL=CustomTable.react.js.map