import {
  Columns,
  Divider,
  Hcentered,
  Inline,
  List,
  Pad,
  Rows,
  Vcentered,
} from "@cman430/sf-component-library";

import { theme } from "../../utils/theme";
import Text from "../common/typography/Text";
import AddressListItem from "../lists/addressListItem/AddressListItem";
import { addressInfo } from "../lists/addressListItem/addressInfo";
import ServicesListItem from "../lists/servicesListItem/ServicesListItem";
import { services } from "../lists/servicesListItem/services";
import FooterCard from "./footerCard/FooterCard";
import { footerCardData } from "./footerCard/footerCardData";

const FooterDivider = () => {
  return <Divider width="80%" color={theme.colors.footerBorder} />;
};

const FooterTitle = (props: { text: string }) => {
  const { text } = props;
  return (
    <Text size="footerTitle" color="white">
      {text}
    </Text>
  );
};

const Footer = () => {
  return (
    <Hcentered background={theme.colors.heading}>
      <Pad space="xxl none">
        <Inline gap="l">
          {footerCardData.map((itemData, index) => (
            <FooterCard key={index} {...itemData} />
          ))}
        </Inline>
      </Pad>
      <FooterDivider />
      <Pad space="l none">
        <Columns evenly="false" gap="xxl">
          <Rows justify="start">
            <FooterTitle text="Office Address" />
            <List items={addressInfo} ItemComponent={AddressListItem} />
          </Rows>
          <Rows justify="start">
            <FooterTitle text="Our Company" />
            <List items={services} ItemComponent={ServicesListItem} />
          </Rows>
        </Columns>
      </Pad>
      <FooterDivider />
      <Vcentered minHeight={"5rem"}>
        <Text color="textNote" size="footerText" weight={200}>
          Copyright © 2023 Real estate CP. Designed & Developed by Themesflat
        </Text>
      </Vcentered>
    </Hcentered>
  );
};

export default Footer;
