import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = () => makeStyles({
  /*
    Input text class
  */
  text: {
    color: '#303237',
  },

  /*
    Textfield classes
  */
  textField: {
    '& .MuiInput-underline:before': {
      borderBottomColor: '#656C75', // Semi-transparent underline
    },
    '& .MuiInput-underline:hover:before': {
      borderBottomColor: '#00B5E2', // Solid underline on hover
      opacity: 0.4,
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#00B5E2', // Solid underline on focus
    },
  },
  textFieldError: {
    '& .MuiInput-underline:after': {
      borderBottomColor: '#FF3037', // Solid underline on focus
    },
    '& svg': {
      color: '#FF3037',
    },
  },
  textFieldDisabled: {
    '& .MuiInput-underline:before': {
      borderBottomColor: '#A7B3BD', // Semi-transparent underline
      borderBottomStyle: 'solid',
    },
    '& svg': {
      color: '#D1D9DE',
    },
  },
  textFieldEmpty: {
    '& svg': {
      color: '#A7B3BD',
    },
    '& .Mui-focused': {
      '& svg': {
        color: '#00B5E2',
      },
    },
  },
  textFieldFilled: {
    '& svg': {
      color: '#656C75',
    },
    '& .Mui-focused': {
      '& svg': {
        color: '#00B5E2',
      },
    },
  },
});

export default useStyles;
  