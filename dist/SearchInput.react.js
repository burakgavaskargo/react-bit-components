import { TextField } from '@material-ui/core';
import React from 'react';
import './search-input.css';

const SearchInput = (props) => {
  const { placeholder, value, onChange, disabled, label } = props;

  return (
    <TextField
      placeholder={placeholder}
      label={label}
      disabled={disabled}
      value={value}
      onChange={(e) => {
        onChange(e.target.value);
      }}
      fullWidth
    />
  );
}

export default SearchInput;
  