import { ButtonProps, Button as SFButton } from "@cman430/sf-component-library";
import styled from "styled-components";
import { theme } from "../../../utils/theme";

const Button = styled(SFButton).attrs<ButtonProps>(
  ({ background = theme.colors.main }) => ({
    background,
  })
)`
  padding: 10px 20px;
`;

export default Button;
