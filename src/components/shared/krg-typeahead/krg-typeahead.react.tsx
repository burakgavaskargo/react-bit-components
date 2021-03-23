import TextField from '@material-ui/core/TextField';
import React, { ChangeEvent, useState, useRef } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './krg-typeahead.style';

type Props = {
  className?: string,
  style?: React.CSSProperties,
  placeholder?: string,
  disabled?: boolean,
  fullWidth?: boolean,
  onDebounceEnd?: (text: string) => void,
  onDebouncRestart?: () => void,
  debounceTime?: number,
  loading?: boolean,
  errorMessage?: string,
};

const KrgTypeahead = ({
  className,
  style,
  placeholder = 'Search',
  disabled = false,
  fullWidth = false,
  onDebounceEnd,
  onDebouncRestart,
  debounceTime = 400,
  errorMessage = '',
}: Props) => {
  const classes = useStyles()();
  const [text, setText] = useState<string>('');
  const timer = useRef<any>(null);
  const hasError = errorMessage !== '';

  const onTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setText(text);
    hanldeDebounce(text);
  }

  const hanldeDebounce = (text: string): void => {
    if (timer && timer.current) {
      clearTimeout(timer.current);
    };
    if (onDebouncRestart) onDebouncRestart();

    timer.current = setTimeout(() => {
      if (onDebounceEnd) onDebounceEnd(text);
    }, debounceTime);
  }

  const textFieldDisabledClass = (
    disabled ? classes.textFieldDisabled :
    hasError ? classes.textFieldError :
    classes.textField
  );
  const textFieldFilledClass = (
    (hasError || disabled) ? '' :
    text === '' ? classes.textFieldEmpty :
    classes.textFieldFilled
  );

  return (
    <TextField
      className={`${className} ${textFieldDisabledClass} ${textFieldFilledClass}`}
      style={style}
      InputProps={{
        className: classes.text,
        endAdornment: (
          <SearchIcon fontSize='small' />
        ),
      }}
      value={text}
      onChange={onTextChange}
      placeholder={placeholder}
      fullWidth={fullWidth}
      disabled={disabled}
      error={hasError}
      helperText={errorMessage}
    />
  );
}

export default KrgTypeahead;
  