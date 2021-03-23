import makeStyles from '@material-ui/core/styles/makeStyles';
const primaryColor = '#303237';
const secondaryColor = '#00B5E2';
const secondaryColorLight = '#E6F8FC';
const useStyles = ({ iconFontSize, iconExists, fullWidth, }) => makeStyles({
    innerContainer: {
        alignItems: 'center',
        display: 'flex',
        width: '100%',
    },
    textContainer: {
        width: '100%',
    },
    textContainerSmall: {
        fontSize: '11px',
        padding: (iconExists ? '0 10px 0 13px' : '0'),
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
    textSizeButton: {
        height: '36px',
        padding: '10px 16px',
        '& .MuiSvgIcon-root': {
            fontSize: iconFontSize || '13px',
        },
    },
    smallButton: {
        height: '24px',
        padding: '4px 16px',
        '& .MuiSvgIcon-root': {
            fontSize: iconFontSize || '11px',
        },
    },
    mediumButton: {
        height: '36px',
        padding: '10px 16px',
        '& .MuiSvgIcon-root': {
            fontSize: iconFontSize || '13px',
        },
    },
    largeButton: {
        height: '48px',
        padding: '16px',
        '& .MuiSvgIcon-root': {
            fontSize: iconFontSize || '15px',
        },
    },
    xlargeButton: {
        height: '60px',
        padding: '22px 16px',
        '& .MuiSvgIcon-root': {
            fontSize: iconFontSize || '16px',
        },
    },
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
    textButtonRipple: {
        opacity: 0.5,
    },
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
    outlinedButtonRipple: {
        opacity: 0.5,
    },
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
