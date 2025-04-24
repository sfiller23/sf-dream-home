import {
  Inline,
  InputWrapper,
  Rows,
  Select,
} from "@sfiller23/sf-component-library";
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import search from "../../assets/SVG/search.svg";
import { PropertiesContext } from "../../context/propertiesContext/PropertiesContext";
import { getFilteredRealEstateInfo } from "../../firebase/firestore";
import { SelectStyles } from "../../utils/theme";
import Button from "../common/button/Button";
import Text from "../common/typography/Text";
import { buildSearchString } from "./helpers/buildSearchString";
import { getQueryParams } from "./helpers/getQueryParams";
import { turkishCities } from "./selectData/cities";
import SwitchButtons from "./switchButtons/SwitchButtons";

const Bar = styled(Inline)<{ page: string }>`
  padding: 25px;
  border-radius: 0 10px 10px 10px;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.1);
  ${(props) => props.page === "/properties" && `width: 100%;`}
`;

const StyledRows = styled(Rows)<{ page: string }>`
  ${(props) => props.page === "/properties" && `width: 100%;`}
`;

const SearchBar = () => {
  // State for storing selected values
  const [type, setType] = useState<"rent" | "buy">("rent");
  const [city, setCity] = useState<string | undefined>(undefined);
  const [minRooms, setMinRooms] = useState("");
  const [maxFloor, setMaxFloor] = useState("");
  const [minYear, setMinYear] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const { dispatch } = useContext(PropertiesContext);

  const navigate = useNavigate();
  const location = useLocation();

  const resetForm = () => {
    setCity("");
    setMinRooms("");
    setMaxFloor("");
    setMinYear("");
    setMaxPrice("");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchObj = {
      city,
      type,
      minRooms: minRooms !== "" ? +minRooms : undefined,
      maxFloor: maxFloor !== "" ? +maxFloor : undefined,
      minYear: minYear !== "" ? +minYear : undefined,
      maxPrice:
        maxPrice !== ""
          ? type === "rent"
            ? Math.floor(+maxPrice * 150)
            : +maxPrice
          : undefined,
    };
    getFilteredRealEstateInfo(searchObj, dispatch);

    const searchString = buildSearchString(searchObj);

    dispatch({ type: "SET_CITY", payload: city ? city : "" });

    if (location.pathname !== `/properties?${searchString}`) {
      navigate(`/properties?${searchString}`);
    }
  };

  useEffect(() => {
    if (location.pathname === "/properties") {
      const currentSearchObj = getQueryParams(window.location.href);
      getFilteredRealEstateInfo(currentSearchObj, dispatch);
      const {
        type,
        city = "",
        minRooms = "",
        maxFloor = "",
        minYear = "",
        maxPrice = "",
      } = currentSearchObj;
      setType(type as "rent" | "buy");
      setCity(city);
      setMinRooms(minRooms);
      setMaxFloor(maxFloor);
      setMinYear(minYear);
      setMaxPrice(
        type === "rent"
          ? maxPrice !== ""
            ? Math.floor(+maxPrice / 150).toString()
            : maxPrice
          : maxPrice
      );
    }
  }, []);

  return (
    <StyledRows
      justify={`${location.pathname !== "/properties" ? "start" : "center"}`}
      page={location.pathname}
    >
      {location.pathname !== "/properties" && (
        <SwitchButtons
          type={type}
          setType={setType}
          page={location.pathname}
          onSwitch={resetForm}
        />
      )}
      <Bar
        as="form"
        gap="m"
        background="white"
        justify={`${
          location.pathname !== "/properties" ? "evenSpace" : "center"
        }`}
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        page={location.pathname}
      >
        {location.pathname === "/properties" && (
          <SwitchButtons
            type={type}
            setType={setType}
            page={location.pathname}
            onSwitch={resetForm}
          />
        )}
        <Select
          isMulti={false}
          placeholder="City"
          styles={SelectStyles.searchBarSelect}
          options={turkishCities}
          onChange={(e) => setCity(e?.value)}
          value={city ? { value: city, label: city } : undefined}
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
            placeholder={type === "rent" ? "Monthly price" : "Maximum price"}
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </InputWrapper>

        <Button type="submit">
          <Text color="white">Search</Text>
          <img src={search} alt="search" />
        </Button>
      </Bar>
    </StyledRows>
  );
};

export default SearchBar;
