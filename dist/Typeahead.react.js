import React, { useState, useRef } from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import CircularProgress from '@material-ui/core/CircularProgress';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
import './typeahead.css';

const Typeahead = (props) => {
  const { data, label, debounceTime = 400, onFinish } = props;

  const [value, setValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const timer = useRef(null);
  const latestSearchId = useRef(null);

  const search = (filter, searchId) => {
    // Mock search
    setTimeout(() => {
      if (searchId === latestSearchId.current) {
        setIsLoading(false);
  
        const filteredData = data.filter(
          person => person.name.toLowerCase().includes(filter.toLowerCase()) ||
            person.surname.toLowerCase().includes(filter.toLowerCase()) ||
            person.age === parseInt(filter)
        );
        onFinish(filteredData);
      }
    }, 500);
  }

  const hanldeDebounce = (value) => {
    if (timer) {
      clearTimeout(timer.current)
    };
    setIsLoading(true);

    const searchId = Math.random();
    timer.current = setTimeout(() => search(value, searchId), debounceTime);
    latestSearchId.current = searchId;
  }

  const onTextChange = (e) => {
    const value = e.target.value;
    setValue(value);
    hanldeDebounce(value);
  }

  const onClear = () => {
    setValue('');
    hanldeDebounce('');
  }

  return (
    <TextField
      value={value}
      onChange={onTextChange}
      label={label}
      fullWidth
      InputProps={{
        startAdornment: (
          <InputAdornment position='start'>
            { isLoading ? <CircularProgress size={18} /> : <SearchIcon /> }
          </InputAdornment>
        ),
        endAdornment: (
          value &&
          <IconButton size={'small'} onClick={onClear}>
            <ClearIcon />
          </IconButton>
        ),
      }}
    />
  );
}

export default Typeahead;