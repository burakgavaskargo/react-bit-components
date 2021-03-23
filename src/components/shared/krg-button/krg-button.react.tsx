import Button from '@material-ui/core/Button';
import React, { MouseEvent, ReactNode } from 'react';
import useStyles from './krg-button.style';

type Props = {
  className?: string,
  text: string,
  size?: 'small' | 'medium' | 'large' | 'xlarge',
  variant: 'text' | 'outlined' | 'contained',
  disabled?: boolean,
  onClick?: (ev: MouseEvent<HTMLButtonElement>) => void,
  startIcon?: ReactNode,
  iconFontSize?: string,
  style?: React.CSSProperties,
  fullWidth?: boolean,
};

const KrgButton = ({
  className,
  text,
  size = 'medium',
  variant = 'contained',
  disabled = false,
  onClick,
  startIcon,
  iconFontSize,
  fullWidth = false,
  style,
}: Props) => {
  const classes = useStyles({ iconFontSize, fullWidth, iconExists: !!startIcon })();

  const buttonVariantClass = (
    variant === 'text' ? classes.textButton :
    variant === 'outlined' ? classes.outlinedButton :
    classes.containedButton
  );
  const buttonSizeClass = (
    variant === 'text' ? classes.textSizeButton :
    size === 'small' ? classes.smallButton :
    size === 'medium' ? classes.mediumButton :
    size === 'large' ? classes.largeButton :
    classes.xlargeButton
  );
  const buttonRippleVariantClass = (
    variant === 'text' ? classes.textButtonRipple :
    variant === 'outlined' ? classes.outlinedButtonRipple :
    ''
  );
  const innerContainerSizeClass = (
    variant === 'text' ? classes.textContainerTextSizeButton :
    size === 'small' ? classes.textContainerSmall :
    size === 'medium' ? classes.textContainerMedium :
    size === 'large' ? classes.textContainerLarge :
    classes.textContainerXlarge
  );

  return (
    <Button
      className={
        `${className} ${classes.button} ${buttonVariantClass} ${buttonSizeClass}`
      }
      TouchRippleProps={{ className: buttonRippleVariantClass }}
      variant={variant}
      disabled={disabled}
      onClick={onClick}
      fullWidth={fullWidth}
      style={style}
    >
      <div className={classes.innerContainer}>
        {startIcon}
        <div className={`${classes.textContainer} ${innerContainerSizeClass}`}>
          {text}
        </div>
      </div>
    </Button>
  );
}

export default KrgButton;
  