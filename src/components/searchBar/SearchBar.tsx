import {
  Columns,
  Inline,
  InputWrapper,
  Rows,
  Button as SFButton,
  Select,
} from "@cman430/sf-component-library";
import { useState } from "react";
import { styled } from "styled-components";
import search from "../../assets/SVG/search.svg";
import { getFilteredRealEstateInfo } from "../../firebase/firestore";
import { SelectStyles, THEME } from "../../utils/theme";
import Button from "../common/button/Button";
import Text from "../common/typography/Text";
import { turkishCities } from "./select/data";

const Bar = styled(Inline)`
  padding: 25px;
  border-radius: 0 10px 10px 10px;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.1);
`;

const BarSwitch = styled(SFButton)`
  justify-content: center;
  padding: 5px;
  width: 100px;
`;

// const DisabledInputWrapper = styled(InputWrapper)`
//   font-size: 0.7rem;
// `;

const SearchBar = () => {
  // State for storing selected values
  const [type, setType] = useState("rent");
  const [city, setCity] = useState<string | undefined>(undefined);
  const [minRooms, setMinRooms] = useState("");
  const [maxFloor, setMaxFloor] = useState("");
  const [minYear, setMinYear] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getFilteredRealEstateInfo({
      city,
      minRooms: minRooms !== "" ? +minRooms : undefined,
      maxFloor: maxFloor !== "" ? +maxFloor : undefined,
      minYear: minYear !== "" ? +minYear : undefined,
      maxPrice: maxPrice !== "" ? +maxPrice : undefined,
    });
  };

  return (
    <Rows justify="start">
      <Columns>
        <BarSwitch
          radius="10px 0px 0px 0px"
          background={type === "rent" ? THEME.colors.main : THEME.colors.sub}
          onClick={() => setType("rent")}
        >
          <Text color={type === "rent" ? "white" : "heading"}>Rent</Text>
        </BarSwitch>
        <BarSwitch
          radius="0px 10px 0px 0px"
          background={type === "buy" ? THEME.colors.main : THEME.colors.sub}
          onClick={() => setType("buy")}
        >
          <Text weight={500} color={type === "buy" ? "white" : "heading"}>
            Buy
          </Text>
        </BarSwitch>
      </Columns>

      <Bar
        as="form"
        gap="m"
        background="white"
        justify="evenSpace"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <Select
          isMulti={false}
          placeholder="City"
          styles={SelectStyles.searchBarSelect}
          options={turkishCities}
          onChange={(e) => setCity(e?.value)}
        />
        <InputWrapper>
          <input
            pattern="^[1-9]\d*$"
            title="Please enter a positive number."
            placeholder="Minimum rooms"
            value={minRooms}
            onChange={(e) => setMinRooms(e.target.value)}
          />
        </InputWrapper>
        <InputWrapper>
          <input
            pattern="^[1-9]\d*$"
            title="Please enter a positive number."
            placeholder="Maximum floor"
            value={maxFloor}
            onChange={(e) => setMaxFloor(e.target.value)}
          />
        </InputWrapper>
        <InputWrapper>
          <input
            pattern="^[1-9]\d*$"
            title="Please enter a positive number."
            placeholder="Minimum year"
            value={minYear}
            onChange={(e) => setMinYear(e.target.value)}
          />
        </InputWrapper>
        <InputWrapper>
          <input
            pattern="^[1-9]\d*$"
            title="Please enter a positive number."
            placeholder="Maximum price"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </InputWrapper>

        <Button type="submit">
          <Text color="white">Search</Text>
          <img src={search} alt="search" />
        </Button>
      </Bar>
    </Rows>
  );
};

export default SearchBar;
