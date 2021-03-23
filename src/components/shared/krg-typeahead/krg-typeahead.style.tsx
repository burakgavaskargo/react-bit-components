import makeStyles from '@material-ui/core/styles/makeStyles';
import { COLORS } from '../../../util/constants';

const useStyles = () => makeStyles({
  /*
    Input text class
  */
  text: {
    color: COLORS.PRIMARY_COLOR,
  },

  /*
    Textfield classes
  */
  textField: {
    '& .MuiInput-underline:before': {
      borderBottomColor: '#656C75', // Semi-transparent underline
    },
    '& .MuiInput-underline:hover:before': {
      borderBottomColor: COLORS.SECONDARY_COLOR, // Solid underline on hover
      opacity: 0.4,
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: COLORS.SECONDARY_COLOR, // Solid underline on focus
    },
  },
  textFieldError: {
    '& .MuiInput-underline:after': {
      borderBottomColor: COLORS.ERROR_COLOR, // Solid underline on focus
    },
    '& svg': {
      color: COLORS.ERROR_COLOR,
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
      color: COLORS.PRIMARY_COLOR_LIGHT,
    },
    '& .Mui-focused': {
      '& svg': {
        color: COLORS.SECONDARY_COLOR,
      },
    },
  },
  textFieldFilled: {
    '& svg': {
      color: '#656C75',
    },
    '& .Mui-focused': {
      '& svg': {
        color: COLORS.SECONDARY_COLOR,
      },
    },
  },
});

export default useStyles;
  