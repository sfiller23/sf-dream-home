import {
  Columns,
  Inline,
  InputWrapper,
  Rows,
  Button as SFButton,
} from "@cman430/sf-component-library";
import { styled } from "styled-components";
import filter from "../../assets/SVG/filter.svg";
import search from "../../assets/SVG/search.svg";
import { THEME } from "../../utils/theme";
import Button from "../common/button/Button";
import Text from "../common/typography/Text";

const StyledInputWrapper = styled(InputWrapper).attrs({
  bordercolor: `${THEME.colors.border}`,
})`
  width: 150px;
`;

const Bar = styled(Inline)`
  padding: 10px;
  border-radius: 0 10px 10px 10px;
  width: 700px;

  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.1);
`;

const BarSwitch = styled(SFButton)`
  justify-content: center;
  padding: 5px;
  width: 100px;
`;

const SearchBar = () => {
  return (
    <Rows justify="start">
      <Columns>
        <BarSwitch
          radius="10px 0px 0px 0px"
          background={`${THEME.colors.main}`}
        >
          <Text color="white">Rent</Text>
        </BarSwitch>
        <BarSwitch radius="0px 10px 0px 0px" background={`${THEME.colors.sub}`}>
          <Text weight={500} color="heading">
            Buy
          </Text>
        </BarSwitch>
      </Columns>

      <Bar gutter="m" background="white" justify="evenly">
        <StyledInputWrapper>
          <input type="text" placeholder="test" />
        </StyledInputWrapper>
        <StyledInputWrapper>
          <input type="text" placeholder="test" />
        </StyledInputWrapper>
        <StyledInputWrapper>
          <select name="" id="">
            <option value="test">Any</option>
            <option value="test2">Any2</option>
          </select>
        </StyledInputWrapper>
        <img src={filter} alt="filter" />
        <Button>
          <Text color="white">Search</Text>
          <img src={search} alt="search" />
        </Button>
      </Bar>
    </Rows>
  );
};

export default SearchBar;
