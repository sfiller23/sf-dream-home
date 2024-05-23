import { ITheme, theme } from "@cman430/sf-component-library";

export interface DMTheme extends ITheme {
  colors: IThemeColors;
  fontSizes: IFontSizes;
  cssConstants: ICSSConstants;
}

interface ICSSConstants {
  headerHeight: string;
}

const CSSConstants: ICSSConstants = {
  headerHeight: "80px",
};

export interface IThemeColors {
  icon: string;
  input: string;
  line: string;
  main: string;
  sub: string;
  strong: string;
  heading: string;
  bodyText: string;
  textNote: string;
  white: string;
  border: string;
  footerText: string;
  footerBorder: string;
}

export const ThemeColors: IThemeColors = {
  icon: "#8E8E93",
  input: "#E5E5EA",
  line: "#EFEFEF",
  main: "#FFA920",
  sub: "#FFF5E0",
  strong: "#6E55FF",
  heading: "#1C1C1E",
  bodyText: "#3A3A3C",
  textNote: "#8E8E93",
  white: "#FFFFFF",
  border: "#E5E5EA",
  footerBorder: "#3A3A3C",
  footerText: "#F1FAEE",
};

export interface IFontSizes {
  mainTitle: string;
  subTitle: string;
  buttonText: string;
  inputText: string;
  bodyTitle: string;
  bodyText: string;
  bodyNote: string;
  headerTitle: string;
  headerText: string;
  footerTitle: string;
  footerSub: string;
  footerTextSub: string;
  footerText: string;
}

export const FontSizes: IFontSizes = {
  mainTitle: "3rem",
  subTitle: "1.5rem",
  buttonText: "1rem",
  inputText: "1rem",
  bodyTitle: "1.25rem",
  bodyText: "1rem",
  bodyNote: "0.85rem",
  headerTitle: "1.25rem",
  headerText: "0.85rem",
  footerText: "0.85rem",
  footerTitle: "1.2rem",
  footerSub: "0.7rem",
  footerTextSub: "0.825rem",
};

export const THEME: DMTheme = {
  colors: ThemeColors,
  fontSizes: FontSizes,
  cssConstants: CSSConstants,
  spaceSchema: theme.spaceSchema,
  fractionsSchema: theme.fractionsSchema,
};
