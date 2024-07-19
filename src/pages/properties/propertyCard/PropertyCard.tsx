import {
  Card,
  Columns,
  Divider,
  Hcentered,
  Inline,
  Pad,
  Rows,
} from "@sfiller23/sf-component-library";
import { FaRegBuilding } from "react-icons/fa";
import { LuBedDouble } from "react-icons/lu";
import { MdOutlineMeetingRoom } from "react-icons/md";
import { PiBathtub, PiResize } from "react-icons/pi";
import { styled } from "styled-components";
import { Property } from "../../../context/propertiesContext/propertiesReducer";
import { theme } from "../../../utils/theme";
import CardHeader from "./cardHeader/CardHeader";
import IconLabelValue from "./iconLabelValue/IconLabelValue";
import LabelValue from "./labelValue/LabelValue";

const StyledCard = styled(Card)`
  border: 1px solid ${(props) => props.theme.colors.border};
  background: ${(props) => props.background};
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.1);
  max-width: 25rem;

  &:hover {
    box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.4);
  }

  .main-img {
    width: ${(props) => props.imageWidth};
  }
`;

const PropertyCard = (props: Property & { currentYear: number }) => {
  const {
    url,
    image,
    price_in_USD,
    apartment_bedrooms,
    apartment_bathrooms,
    apartment_total_area,
    apartment_rooms,
    apartment_floor,
    building_construction_year,
    currentYear,
  } = props;

  const navigateToExternalSite = (url: string) => {
    window.location.href = url;
  };

  return (
    <StyledCard
      background={theme.colors.white}
      imageWidth="100%"
      onClick={() => {
        navigateToExternalSite(url);
      }}
    >
      <Pad space="l l l l">
        <CardHeader
          imgSrc={image}
          title="Gorgeous Apartment Building"
          titleTextValues={{ size: "cardTitle", weight: 600 }}
          subTitleTextValues={{ size: "cardSubTitle", weight: 300 }}
          subTitle="58 Hullbrook Road, Billesley, B13 0LA"
        />
        <Rows justify="start">
          <Pad space="l none">
            <Rows justify="start">
              <LabelValue
                label="Buying Price"
                value={`$${price_in_USD.toLocaleString()}`}
                gap="m"
                size="cardBuyingPrice"
                weight={500}
                valueColor="main"
              />
              <LabelValue
                label="Renting Price"
                value={`$${Math.floor(price_in_USD / 150)}`}
                gap="m"
                size="cardRentingPrice"
                weight={500}
                valueColor="main"
              />
            </Rows>
          </Pad>
          <Columns gap="m" width="100%">
            <Inline gap="s">
              <IconLabelValue
                Icon={LuBedDouble}
                label="Beds:"
                labelTextValues={{ size: "cardInfo", weight: 300 }}
                value={apartment_bedrooms.toLocaleString()}
                ValueTextValues={{ size: "cardInfoNum", weight: 600 }}
              />
            </Inline>
            <Inline gap="s">
              <IconLabelValue
                Icon={PiBathtub}
                label="Baths:"
                labelTextValues={{ size: "cardInfo", weight: 300 }}
                value={apartment_bathrooms.toLocaleString()}
                ValueTextValues={{ size: "cardInfoNum", weight: 600 }}
              />
            </Inline>
            <Inline gap="s">
              <IconLabelValue
                Icon={PiResize}
                label="Size:"
                labelTextValues={{ size: "cardInfo", weight: 300 }}
                value={apartment_total_area}
                ValueTextValues={{ size: "cardInfoNum", weight: 600 }}
              />
            </Inline>
          </Columns>
          <Pad space="l none" width="100%">
            <Divider />
          </Pad>
          <Columns gap="m">
            <Inline gap="s">
              <IconLabelValue
                Icon={MdOutlineMeetingRoom}
                label="Rooms:"
                labelTextValues={{ size: "cardInfo", weight: 300 }}
                value={apartment_rooms.toLocaleString()}
                ValueTextValues={{ size: "cardInfoNum", weight: 600 }}
              />
            </Inline>
            <Inline gap="s">
              <IconLabelValue
                Icon={FaRegBuilding}
                label="Floor:"
                labelTextValues={{ size: "cardInfo", weight: 300 }}
                value={apartment_floor.toLocaleString()}
                ValueTextValues={{ size: "cardInfoNum", weight: 600 }}
              />
            </Inline>
          </Columns>
          <Pad space="l none" width="100%">
            <Divider />
          </Pad>
          <Hcentered>
            <LabelValue
              label="Construction"
              value={`${currentYear - +building_construction_year} years ago`}
              gap="m"
              size="cardRentingPrice"
              weight={500}
              labelColor="main"
            />
          </Hcentered>
        </Rows>
      </Pad>
    </StyledCard>
  );
};

export default PropertyCard;
