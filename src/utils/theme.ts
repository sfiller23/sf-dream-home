interface ITheme {
  colors: IThemeColors;
  fontSizes: IFontSizes;
}

interface IThemeColors {
  icon: string;
  input: string;
  line: string;
  main: string;
  sub: string;
  strong: string;
  heading: string;
  bodyText: string;
  textNote: string;
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
};

interface IFontSizes {
  mainTitle: string;
  subTitle: string;
  buttonText: string;
  inputText: string;
  bodyText: string;
  headerTitle: string;
  headerText: string;
}

export const FontSizes: IFontSizes = {
  mainTitle: "2rem",
  subTitle: "1.5rem",
  buttonText: "1rem",
  inputText: "1rem",
  bodyText: "1rem",
  headerTitle: "1.25rem",
  headerText: "1rem",
};

export const THEME: ITheme = {
  colors: ThemeColors,
  fontSizes: FontSizes,
};
