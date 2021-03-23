import makeStyles from '@material-ui/core/styles/makeStyles';

const primaryColor = '#303237';
const secondaryColor = '#00B5E2';
const secondaryColorLight = '#E6F8FC';

type Props = {
  iconExists: boolean,
  iconFontSize?: string,
  fullWidth: boolean,
};

const useStyles = ({
  iconFontSize,
  iconExists,
  fullWidth,
}: Props) => makeStyles({
  /*
    Icon and text wrapper
  */
  innerContainer: {
    alignItems: 'center',
    display: 'flex',
    width: '100%',
  },

  /*
    Text container and its sizes
  */
  textContainer: {
    width: '100%',
  },
  textContainerSmall: {
    fontSize: '11px',
    padding: (
      iconExists ? '0 10px 0 13px' : '0'
    ),
  },
  textContainerMedium: {
    fontSize: '11px',
    padding: '0 25px',
  },
  textContainerLarge: {
    fontSize: '14px',
    padding: '0 25px',
    width: fullWidth ? '100%' : '250px',
  },
  textContainerXlarge: {
    fontSize: '14px',
    padding: '0 25px',
    width: fullWidth ? '100%' : '250px',
  },
  textContainerTextSizeButton: {
    fontSize: '11px',
    padding: '0',
  },

  /*
    Default button style
  */
  button: {
    borderRadius: 0,
    boxShadow: 'none',
    fontWeight: 500,
    '&:active': {
      boxShadow: 'none',
    },
    '&:hover': {
      boxShadow: 'none',
    },
    '& .MuiButton-startIcon': {
      marginRight: '0',
    },
  },

  /*
    Button sizes
  */
  textSizeButton: {
    height: '36px',
    padding: '10px 16px',
    // Start icon style
    '& .MuiSvgIcon-root': {
      fontSize: iconFontSize || '13px',
    },
  },
  smallButton: {
    height: '24px',
    padding: '4px 16px',
    // Start icon style
    '& .MuiSvgIcon-root': {
      fontSize: iconFontSize || '11px',
    },
  },
  mediumButton: {
    height: '36px',
    padding: '10px 16px',
    // Start icon style
    '& .MuiSvgIcon-root': {
      fontSize: iconFontSize || '13px',
    },
  },
  largeButton: {
    height: '48px',
    padding: '16px',
    // Start icon style
    '& .MuiSvgIcon-root': {
      fontSize: iconFontSize || '15px',
    },
  },
  xlargeButton: {
    height: '60px',
    padding: '22px 16px',
    // Start icon style
    '& .MuiSvgIcon-root': {
      fontSize: iconFontSize || '16px',
    },
  },

  /*
    Text button style
  */
  textButton: {
    backgroundColor: 'white',
    color: secondaryColor,
    '&:hover': {
      backgroundColor: secondaryColorLight,
    },
    '&:disabled': {
      color: '#91A0AD',
    },
  },
  // Ripple effect
  textButtonRipple: {
    opacity: 0.5,
  },

  /*
    Outline button style
  */
  outlinedButton: {
    backgroundColor: 'white',
    borderColor: primaryColor,
    color: primaryColor,
    '&:hover': {
      backgroundColor: 'white',
      borderColor: secondaryColor,
      color: secondaryColor,
    },
    '&:disabled': {
      borderColor: '#A7B3BD',
      color: '#A7B3BD',
    },
  },
  // Ripple effect
  outlinedButtonRipple: {
    opacity: 0.5,
  },

  /*
    Contained button style
  */
  containedButton: {
    backgroundColor: primaryColor,
    color: 'white',
    '&:hover': {
      backgroundColor: secondaryColor,
    },
    '&:disabled': {
      backgroundColor: '#D1D9DE',
      color: '#91A0AD',
    },
  },
});

export default useStyles;
  