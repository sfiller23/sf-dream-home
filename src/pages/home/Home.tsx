import {
  Columns,
  Hcentered,
  Inline,
  Pad,
  Rows,
} from "@cman430/sf-component-library";
import styled from "styled-components";
import company1 from "../../assets/SVG/company1.svg";
import company2 from "../../assets/SVG/company2.svg";
import company3 from "../../assets/SVG/company3.svg";
import company4 from "../../assets/SVG/company4.svg";
import company5 from "../../assets/SVG/company5.svg";
import company6 from "../../assets/SVG/company6.svg";
import bannerImg from "../../assets/images/banner-img.jpeg";
import Text from "../../components/common/typography/Text";
import SearchBar from "../../components/searchBar/SearchBar";

const Banner = styled.img`
  position: absolute;
  right: 10%;
  width: 500px;
  object-fit: cover;
  border-radius: 50% 50% 0 0;
  box-shadow: -80px -125px 600px -110px ${(props) => props.theme.colors.main};
  margin-top: 40px;
  z-index: -1;
`;

const FullScreen = styled.div`
  height: calc(100vh - ${(props) => props.theme.cssConstants.headerHeight});
`;

const Home = () => {
  return (
    <FullScreen>
      <Banner src={bannerImg} alt="main img" />
      <Rows justify="start">
        <Pad padding="xxl xxl">
          <Rows justify="start">
            <Text size="mainTitle" weight={700}>
              We will find a perfect
              <br /> home for you
            </Text>
            <Text color="bodyText">
              Find a variety of properties that suit you very easily, forget all
              difficulties
              <br /> in finding a residence for you
            </Text>
            <Pad padding="xxl none xxl none">
              <SearchBar />
            </Pad>
            <Columns gutter="xxl">
              <Rows justify="start">
                <Text size="bodyTitle" weight={700}>
                  1500+
                </Text>
                <Text size="bodyNote" color="textNote">
                  Property ready
                </Text>
              </Rows>
              <Rows justify="start">
                <Text size="bodyTitle" weight={700}>
                  700+
                </Text>
                <Text size="bodyNote" color="textNote">
                  Happy customer
                </Text>
              </Rows>
            </Columns>
          </Rows>
        </Pad>
      </Rows>
      <Hcentered>
        <Rows justify="start" gutter="l">
          <Text size="bodyNote" weight={500}>
            Trusted by over 150+ major companies
          </Text>

          <Inline gutter="xxl">
            <img src={company1} alt="company1" width="80px" />
            <img src={company2} alt="company2" width="80px" />
            <img src={company3} alt="company3" width="80px" />
            <img src={company4} alt="company4" width="80px" />
            <img src={company5} alt="company5" width="80px" />
            <img src={company6} alt="company5" width="80px" />
          </Inline>
        </Rows>
      </Hcentered>
    </FullScreen>
  );
};

export default Home;
