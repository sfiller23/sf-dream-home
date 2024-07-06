import { Typography } from "@cman430/sf-component-library";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IFontSizes, IThemeColors } from "../../../utils/theme";

interface ITypographyElement {
  as:
    | "p"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "span"
    | "a"
    | "em"
    | "strong"
    | "blockquote"
    | "pre"
    | "code"
    | typeof Link;
}

export interface ITextProps {
  children: string | 
  color?: keyof IThemeColors;
  size?: keyof IFontSizes;
  weight?: number;
  letterSpacing?: string;
  as?: ITypographyElement;
}

const StyledText = styled(Typography).attrs<ITextProps>(
  ({ as = "p", text = "Provide your text throut this prop" }) => ({
    as: as,
  })
)<ITextProps>`
  color: ${(props) =>
    props.color ? props.theme.colors[props.color] : props.theme.colors.heading};
  font-size: ${(props) =>
    props.size
      ? props.theme.fontSizes[props.size]
      : props.theme.fontSizes.bodyText};
  font-weight: ${(props) => (props.weight ? props.weight : 400)};
  letter-spacing: ${(props) => (props.spacing ? props.spacing : "normal")};
  max-width: 40rem;
  overflow-wrap: break-word;
`;

const Text = (props: ITextProps) => {
  const { text, ...otherProps } = props;
  return <StyledText {...otherProps}>{text}</StyledText>;
};

export default Text;
