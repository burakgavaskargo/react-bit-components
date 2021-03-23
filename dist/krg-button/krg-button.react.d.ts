import React, { MouseEvent, ReactNode } from 'react';
declare type Props = {
    className?: string;
    text: string;
    size?: 'small' | 'medium' | 'large' | 'xlarge';
    variant: 'text' | 'outlined' | 'contained';
    disabled?: boolean;
    onClick?: (ev: MouseEvent<HTMLButtonElement>) => void;
    startIcon?: ReactNode;
    iconFontSize?: string;
    style?: React.CSSProperties;
    fullWidth?: boolean;
};
declare const KrgButton: ({ className, text, size, variant, disabled, onClick, startIcon, iconFontSize, fullWidth, style, }: Props) => JSX.Element;
export default KrgButton;
