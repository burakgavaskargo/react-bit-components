import Button from '@material-ui/core/Button';
import React from 'react';
import useStyles from './krg-button.style';
const KrgButton = ({ className, text, size = 'medium', variant = 'contained', disabled = false, onClick, startIcon, iconFontSize, fullWidth = false, style, }) => {
    const classes = useStyles({ iconFontSize, fullWidth, iconExists: !!startIcon })();
    const buttonVariantClass = (variant === 'text' ? classes.textButton :
        variant === 'outlined' ? classes.outlinedButton :
            classes.containedButton);
    const buttonSizeClass = (variant === 'text' ? classes.textSizeButton :
        size === 'small' ? classes.smallButton :
            size === 'medium' ? classes.mediumButton :
                size === 'large' ? classes.largeButton :
                    classes.xlargeButton);
    const buttonRippleVariantClass = (variant === 'text' ? classes.textButtonRipple :
        variant === 'outlined' ? classes.outlinedButtonRipple :
            '');
    const innerContainerSizeClass = (variant === 'text' ? classes.textContainerTextSizeButton :
        size === 'small' ? classes.textContainerSmall :
            size === 'medium' ? classes.textContainerMedium :
                size === 'large' ? classes.textContainerLarge :
                    classes.textContainerXlarge);
    return (React.createElement(Button, { className: `${className} ${classes.button} ${buttonVariantClass} ${buttonSizeClass}`, TouchRippleProps: { className: buttonRippleVariantClass }, variant: variant, disabled: disabled, onClick: onClick, fullWidth: fullWidth, style: style },
        React.createElement("div", { className: classes.innerContainer },
            startIcon,
            React.createElement("div", { className: `${classes.textContainer} ${innerContainerSizeClass}` }, text))));
};
export default KrgButton;
