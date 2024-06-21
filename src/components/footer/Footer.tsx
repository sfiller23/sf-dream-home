import {
  Columns,
  Hcentered,
  Inline,
  List,
  Pad,
  Rows,
  Vcentered,
} from "@cman430/sf-component-library";
import styled from "styled-components";
import house from "../../assets/SVG/house.svg";
import bannerImg from "../../assets/images/banner-img.jpeg";
import Button from "../common/button/Button";
import Card from "../common/card/Card";
import Text from "../common/typography/Text";
import FooterListItem from "../lists/footerListItem/FooterListItem";
import { services } from "../lists/footerListItem/data/services";

const StyledFooter = styled(Hcentered)`
  background-color: ${(props) => props.theme.colors.heading};
`;

const Separator = styled.hr`
  width: 80%;
  border-style: solid;
  border-color: ${(props) => props.theme.colors.footerBorder};
  border-width: 1px 0 0 0;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Pad $space="xxl none">
        <Card>
          <Pad $space="l">
            <Inline align="maxSpace" justify="maxSpace">
              <img className="main-img" src={bannerImg} alt="house" />
              <Rows align="maxSpace" justify="start">
                <Text size="footerTitle" weight={700}>
                  Sell your house
                </Text>
                <Text size="footerSub" weight={300}>
                  We will connect you to thousands of people who
                  <br /> need to buy a home.
                </Text>
              </Rows>
            </Inline>
          </Pad>
          <Button style={{ height: "40px", width: "200px" }}>
            <img src={house} alt="house" />
            <Text size="bodyNote" color="white" weight={500}>
              Sell Property
            </Text>
          </Button>
        </Card>
      </Pad>
      <Separator />
      <Columns evenly="false" gap="xxl">
        <Rows justify="start">
          <Text size="footerTitle" color="white">
            Office Address
          </Text>
          <Rows justify="start">
            <Text size="footerTextSub" weight={200} color="textNote">
              Head office:
            </Text>
            <Text size="footerText" color="footerText">
              2118 Thornridge Cir. Syracuse, Connecticut 35624
            </Text>
          </Rows>
          <Rows justify="start">
            <Text size="footerTextSub" weight={200} color="textNote">
              Branch:
            </Text>
            <Text weight={200} size="footerText" color="footerText">
              3891 Ranchview Dr. Richardson, California 62639
            </Text>
          </Rows>
          <Text weight={200} size="footerText" color="footerText">
            3517 W. Gray St. Utica, Pennsylvania 57867
          </Text>
        </Rows>
        <Rows justify="start">
          <Pad $space="l none">
            <Text size="footerTitle" color="white">
              Our Company
            </Text>
          </Pad>
          <List items={services} ItemComponent={FooterListItem} />
        </Rows>
      </Columns>
      <Separator style={{ marginTop: "1rem" }} />
      <Vcentered $minHeight={"5rem"}>
        <Text color="textNote" size="footerText" weight={200}>
          Copyright © 2023 Real estate CP. Designed & Developed by Themesflat
        </Text>
      </Vcentered>
    </StyledFooter>
  );
};

export default Footer;
