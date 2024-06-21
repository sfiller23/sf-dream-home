import { ITheme, theme } from "@cman430/sf-component-library";
import chroma from "chroma-js";
import { StylesConfig } from "react-select";

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
  inputDisabled: string;
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
  inputDisabled: "#f8f7f5",
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

export interface ISelectOption {
  readonly value: string;
  readonly label: string;
  readonly color?: string;
  readonly isFixed?: boolean;
  readonly isDisabled?: boolean;
  readonly rating?: string;
}

export interface ISelectStyles {
  searchBarSelect: StylesConfig<ISelectOption>;
}

export const SelectStyles: ISelectStyles = {
  searchBarSelect: {
    control: (styles, { isFocused, isDisabled }) => ({
      ...styles,
      backgroundColor: isDisabled
        ? ThemeColors.inputDisabled
        : isFocused
        ? "transparent"
        : "white", // Change background color on focus
      borderRadius: 5,
      borderColor: isFocused ? ThemeColors.main : ThemeColors.border, // Override borderColor on active/focus
      boxShadow: isFocused ? `0 0 0 1px ${ThemeColors.main}` : styles.boxShadow, // Optional: Add a box-shadow to mimic focus if needed
      // Ensure outline is none and apply other focus styles directly without using ":focus" pseudo-class
      outline: "none",
      ":hover": {
        ...styles[":focus"],
        outline: "none",
        borderColor: ThemeColors.main, // Your desired active border color
        backgroundColor: "transparent", // Your desired active background color
        color: ThemeColors.main, // Your desired active text color
      },
      minWidth: "10rem",
      fontSize: "0.8rem",
      svg: {
        width: "0.9rem",
      },
    }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      const color = chroma(ThemeColors.main);
      return {
        ...styles,
        backgroundColor: isDisabled
          ? undefined
          : isSelected
          ? data.color
          : isFocused
          ? color.alpha(0.1).css()
          : undefined,
        color: isDisabled
          ? "#ccc"
          : isSelected
          ? chroma.contrast(color, "white") > 2
            ? "white"
            : "black"
          : data.color,
        cursor: isDisabled ? "not-allowed" : "default",

        ":active": {
          ...styles[":active"],
          backgroundColor: !isDisabled
            ? isSelected
              ? data.color
              : color.alpha(0.3).css()
            : undefined,
        },
      };
    },
    //// The code below is an example of using the dot function to style the select component

    // input: (styles) => ({ ...styles, ...dot() }),
    // placeholder: (styles) => ({ ...styles, ...dot("#ccc") }),
    // singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) }),

    input: (styles) => ({ ...styles }),
    placeholder: (styles) => ({ ...styles }),
    singleValue: (styles) => ({ ...styles }),
  },
};

export const THEME: DMTheme = {
  colors: ThemeColors,
  fontSizes: FontSizes,
  cssConstants: CSSConstants,
  spaceSchema: theme.spaceSchema,
  fractionsSchema: theme.fractionsSchema,
};
