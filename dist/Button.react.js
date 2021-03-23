import { Button as MaterialButton, CircularProgress } from '@material-ui/core';
import React from 'react';
import './button.css';

const Button = (props) => {
  const { text, onClick, disabled } = props;

  return (
    <div className='container'>
      {/* Button */}
      <MaterialButton
        variant='contained'
        color='primary'
        onClick={onClick}
        disabled={disabled}
        type='submit'
      >
        {text}
      </MaterialButton>

      {/* Loader */}
      {
        disabled &&
        <CircularProgress
          className='loader'
          color='primary'
          size={25}
        />
      }
    </div>
  );
}

export default Button;
  