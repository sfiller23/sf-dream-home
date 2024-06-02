import { Typography } from "@cman430/sf-component-library";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IFontSizes, IThemeColors } from "../../../utils/theme";

interface ITextProps {
  color?: keyof IThemeColors;
  size?: keyof IFontSizes;
  weight?: number;
  spacing?: string;
  as?: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "h7" | typeof Link;
}

const Text = styled(Typography).attrs<ITextProps>(({ as = "p" }) => ({
  as: as,
}))<ITextProps>`
  color: ${(props) =>
    props.color ? props.theme.colors[props.color] : props.theme.colors.heading};
  font-size: ${(props) =>
    props.size
      ? props.theme.fontSizes[props.size]
      : props.theme.fontSizes.bodyText};
  font-weight: ${(props) => (props.weight ? props.weight : 400)};
  letter-spacing: ${(props) => (props.spacing ? props.spacing : "normal")};
`;

export default Text;
