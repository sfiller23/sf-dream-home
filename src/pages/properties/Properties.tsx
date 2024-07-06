import {
  Card,
  Columns,
  GridColResponsive,
  Inline,
  Pad,
  Rows,
  Select,
} from "@cman430/sf-component-library";
import { useContext, useState } from "react";
import { FaRegBuilding } from "react-icons/fa";
import { LuBedDouble } from "react-icons/lu";
import { MdOutlineMeetingRoom } from "react-icons/md";
import { PiAddressBookThin, PiBathtub, PiResize } from "react-icons/pi";
import { SingleValue } from "react-select";
import { styled } from "styled-components";
import turkishMap from "../../assets/images/turkish_map.png";
import Text from "../../components/common/typography/Text";
import PathIndicator from "../../components/pathIndicator/PathIndicator";
import SearchBar from "../../components/searchBar/SearchBar";
import { PropertiesContext } from "../../context/propertiesContext/PropertiesContext";
import {
  Order,
  Property,
} from "../../context/propertiesContext/propertiesReducer";
import { useGetImgUrl } from "../../firebase/hooks/useGetImgUrl";
import { propertyInfo } from "../../utils/selectData/orderBySelect";
import { ISelectOption, theme } from "../../utils/theme";

const StyledMap = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StyledMapWrapper = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;
`;

const Separator = styled.hr`
  width: 100%;
  border-style: solid;
  border-color: ${(props) => props.theme.colors.border};
  border-width: 1px 0 0 0;
`;

const StyledCard = styled(Card).attrs(
  ({ background = theme.colors.white, imageWidth = "100%" }) => ({
    background,
    imageWidth,
  })
)`
  border: 1px solid ${(props) => props.theme.colors.border};
  background: ${(props) => props.background};
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.1);
  max-width: 25rem;

  &:hover {
    box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.4);
  }

  > img {
    width: ${(props) => props.imageWidth};
  }
`;

const Properties = () => {
  const [orderBy, setOrderBy] = useState<keyof Property>("price_in_USD");
  const [order, setOrder] = useState<Order>("ascending");

  const { properties, selectedCity, dispatch } = useContext(PropertiesContext);

  const cityImage = useGetImgUrl(selectedCity);

  const currentYear = new Date().getFullYear();

  const handelOrderChange = (currentVal: string) => {
    dispatch({
      type: "SET_ORDER_BY",
      payload: { orderBy: orderBy, order: order },
    });
  };

  const navigateToExternalSite = (url: string) => {
    window.location.href = url;
  };

  return (
    <Rows>
      <StyledMapWrapper>
        <StyledMap src={cityImage === "" ? turkishMap : cityImage} alt="map" />
      </StyledMapWrapper>
      <SearchBar />
      <Pad space="xl" width="100%">
        <PathIndicator />
        <Pad space="l none" width="100%">
          <Separator />
        </Pad>
        <Inline width="100%" align="start" justify="maxSpace">
          <Text size="subTitle" weight={600}>
            Property Listing
          </Text>
          <Rows as="form" justify="maxSpace" width="13rem">
            <Inline justify="maxSpace">
              <Text>Order By :</Text>
              <Select
                isMulti={false}
                options={propertyInfo}
                placeholder="Price"
                onChange={(e: SingleValue<ISelectOption>) => {
                  handelOrderChange(e?.value);
                }}
              />
            </Inline>
            <Pad space="m none l">
              <Inline justify="maxSpace">
                <Inline>
                  <input
                    type="radio"
                    id="ascending"
                    value="ascending"
                    name="order"
                    defaultChecked
                  />
                  <label htmlFor="ascending">
                    <Text size="bodyNote">Ascending</Text>
                  </label>
                </Inline>
                <Inline>
                  <input
                    type="radio"
                    id="descending"
                    value="descending"
                    name="order"
                  />
                  <label htmlFor="descending">
                    <Text size="bodyNote">Descending</Text>
                  </label>
                </Inline>
              </Inline>
            </Pad>
          </Rows>
        </Inline>

        <GridColResponsive minItemWidth="17rem" gap="l">
          {properties.map((property) => {
            return (
              <StyledCard
                key={property.url}
                onClick={() => {
                  navigateToExternalSite(property.url);
                }}
              >
                <img className="main-img" src={property.image} alt="house" />
                <Pad space="l l l l">
                  <Rows justify="start">
                    <Text weight={600} size="cardTitle">
                      Gorgeous Apartment Building
                    </Text>
                    <Inline>
                      <PiAddressBookThin />
                      <Text weight={200} size="cardSubTitle">
                        58 Hullbrook Road, Billesley, B13 0LA
                      </Text>
                    </Inline>
                    <Pad space="l none">
                      <Rows justify="start">
                        <Inline gap="m">
                          <Text size="cardBuyingPrice" weight={500}>
                            Buying Price:
                          </Text>
                          <Text
                            color="main"
                            size="cardBuyingPrice"
                            weight={500}
                          >
                            ${property.price_in_USD.toLocaleString()}
                          </Text>
                        </Inline>

                        <Inline gap="m">
                          <Text size="cardRentingPrice" weight={500}>
                            Renting Price:
                          </Text>
                          <Text
                            color="main"
                            size="cardRentingPrice"
                            weight={500}
                          >
                            $
                            {Math.floor(
                              property.price_in_USD / 150
                            ).toLocaleString()}
                          </Text>
                        </Inline>
                      </Rows>
                    </Pad>
                    <Columns gap="m" width="100%">
                      <Rows>
                        <Inline gap="s">
                          <LuBedDouble size="1.2rem" />
                          <Text size="cardInfo" weight={300}>
                            Beds:
                          </Text>
                        </Inline>
                        <Text size="cardInfoNum" weight={600}>
                          {property.apartment_bedrooms}
                        </Text>
                      </Rows>
                      <Rows>
                        <Inline gap="s">
                          <PiBathtub size="1.2rem" />
                          <Text size="cardInfo" weight={300}>
                            Baths:
                          </Text>
                        </Inline>
                        <Text size="cardInfoNum" weight={600}>
                          {property.apartment_bathrooms}
                        </Text>
                      </Rows>
                      <Rows>
                        <Inline gap="s">
                          <PiResize size="1.2rem" />
                          <Text size="cardInfo" weight={300}>
                            Size:
                          </Text>
                        </Inline>
                        <Text size="cardInfoNum" weight={600}>
                          {property.apartment_total_area}
                        </Text>
                      </Rows>
                    </Columns>
                    <Pad space="l none" width="100%">
                      <Separator />
                    </Pad>
                    <Columns gap="m">
                      <Inline gap="s">
                        <MdOutlineMeetingRoom size="1.2rem" />
                        <Text size="cardInfo" weight={300}>
                          Rooms:
                        </Text>
                        <Text size="cardInfoNum" weight={600}>
                          {property.apartment_rooms}
                        </Text>
                      </Inline>
                      <Inline gap="s">
                        <FaRegBuilding size="1.2rem" />
                        <Text size="cardInfo" weight={300}>
                          Floor:
                        </Text>
                        <Text size="cardInfoNum" weight={600}>
                          {property.apartment_floor}
                        </Text>
                      </Inline>
                    </Columns>
                    <Pad space="l none" width="100%">
                      <Separator />
                    </Pad>
                    <Inline justify="center" width="100%" gap="l">
                      <Text weight={600} size="cardFooter" color="main">
                        Construction:
                      </Text>
                      <Text weight={600} size="cardFooter">
                        {`${
                          currentYear - +property.building_construction_year
                        }`}{" "}
                        years ago
                      </Text>
                    </Inline>
                  </Rows>
                </Pad>
              </StyledCard>
            );
          })}
        </GridColResponsive>
      </Pad>
    </Rows>
  );
};

export default Properties;
