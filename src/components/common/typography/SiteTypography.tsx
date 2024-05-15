// import { Typography, TypographyProps } from "@cman430/sf-component-library";
// import { styled } from "styled-components";
// import { FontSizes, ThemeColors } from "../../../utils/theme";

// interface SiteTypographyProps extends TypographyProps {
//   color?: keyof typeof ThemeColors;
//   size?: keyof typeof FontSizes;
//   weight?: number;
//   spacing?: string;
// }

// const SiteTypography = styled(Typography)<SiteTypographyProps>`
//   color: ${({ color = ThemeColors.bodyText }) =>
//     ThemeColors[color as keyof typeof ThemeColors]};
//   font-size: ${({ size = FontSizes.bodyText }) =>
//     FontSizes[size as keyof typeof FontSizes]};
//   font-weight: ${({ weight = 700 }) => weight};
//   letter-spacing: ${({ spacing = "auto" }) => spacing};
// `;

// const Typography = (props: SiteTypographyProps) => {
//   const { color, size, weight, spacing, children } = props;
//   console.log(`${color} ${size} ${weight} `);
//   return (
//     <SiteTypography color={color} size={size} weight={weight} spacing={spacing}>
//       {children}
//     </SiteTypography>
//   );
// };

// export default SiteTypography;
