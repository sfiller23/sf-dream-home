import { ITypographyProps, Typography } from "@sfiller23/sf-component-library";
import { IFontSizes, IThemeColors, theme } from "../../../utils/theme";

export interface ITextProps extends ITypographyProps {
  color?: keyof IThemeColors;
  size?: keyof IFontSizes;
}

const Text = (props: ITextProps) => {
  const {
    children,
    color = "heading",
    size = "bodyNote",
    ...otherProps
  } = props;

  return (
    <Typography
      color={theme.colors[color]}
      size={theme.fontSizes[size]}
      {...otherProps}
    >
      {children}
    </Typography>
  );
};

export default Text;
