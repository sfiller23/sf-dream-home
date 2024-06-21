import { Columns, Inline, Rows } from "@cman430/sf-component-library";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import auth from "../../assets/SVG/auth.svg";
import house from "../../assets/SVG/house.svg";
import logo from "../../assets/SVG/logo.svg";
import Button from "../common/button/Button";
import Text from "../common/typography/Text";

const StyledHeader = styled(Inline)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 80px;
  background-color: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledText = styled(Text).attrs({ weight: 500 })``;

const Header = () => {
  return (
    <StyledHeader as="header" align="center" justify="midSpace">
      <Columns evenly="false" gap="l">
        <img src={logo} alt="Site logo" />
        <Rows justify="start">
          <Text weight={700} size="headerTitle">
            Dream home
          </Text>
          <Text weight={200} color="textNote" size="headerText" spacing="2px">
            Real Estate
          </Text>
        </Rows>
      </Columns>
      <Inline align="center" gap="l">
        <StyledLink to="/home">
          <StyledText>Home</StyledText>
        </StyledLink>
        <StyledLink to="/properties">
          <StyledText>Property</StyledText>
        </StyledLink>
        <StyledLink to="/pages">
          <StyledText>Page</StyledText>
        </StyledLink>
        <StyledLink to="/blogs">
          <StyledText>Blog</StyledText>
        </StyledLink>
        <StyledLink to="/contact">
          <StyledText>Contact</StyledText>
        </StyledLink>
      </Inline>
      <Columns evenly="false" gap="l">
        <Inline align="center" gap="s">
          <img src={auth} alt="auth" />
          <StyledLink to="/register">
            <Text>Register</Text>
          </StyledLink>
          /
          <StyledLink to="/login">
            <Text>Login</Text>
          </StyledLink>
        </Inline>
        <Button>
          <img src={house} alt="house" />
          <Text color="white" weight={500}>
            Sell Property
          </Text>
        </Button>
      </Columns>
    </StyledHeader>
  );
};

export default Header;
