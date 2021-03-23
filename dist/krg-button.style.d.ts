declare type Props = {
    iconExists: boolean;
    iconFontSize?: string;
    fullWidth: boolean;
};
declare const useStyles: ({ iconFontSize, iconExists, fullWidth, }: Props) => (props?: any) => Record<"button" | "innerContainer" | "textContainer" | "textContainerSmall" | "textContainerMedium" | "textContainerLarge" | "textContainerXlarge" | "textContainerTextSizeButton" | "textSizeButton" | "smallButton" | "mediumButton" | "largeButton" | "xlargeButton" | "textButton" | "textButtonRipple" | "outlinedButton" | "outlinedButtonRipple" | "containedButton", string>;
export default useStyles;
