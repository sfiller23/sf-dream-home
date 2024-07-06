import { Columns, Pad, Rows } from "@cman430/sf-component-library";
import styled from "styled-components";
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
  width: 100vw;
`;

const Home = () => {
  return (
    <FullScreen>
      <Banner src={bannerImg} alt="main img" />
      <Rows justify="start">
        <Pad space="xxl xxl">
          <Rows justify="start">
            <Text size="mainTitle" weight={700}>
              We will find a perfect home for you
            </Text>
            <Text color="bodyText">
              Find a variety of properties that suit you very easily, forget all
              difficulties in finding a residence for you
            </Text>
            <Pad space="xxl none xxl none">
              <SearchBar />
            </Pad>
            <Columns gap="xxl" evenly="false">
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
    </FullScreen>
  );
};

export default Home;
