import { Card as SFCard } from "@cman430/sf-component-library";
import styled from "styled-components";
import { THEME } from "../../../utils/theme";

const Card = styled(SFCard).attrs(
  ({ background = THEME.colors.sub, $imgWidth = "20%" }) => ({
    background,
    $imgWidth,
  })
)`
  width: 25rem;

  img {
    width: ${(props) => props.$imgWidth};
  }
`;

export default Card;
