import { Columns, Inline, Rows } from "@sfiller23/sf-component-library";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin, FaSquareTwitter } from "react-icons/fa6";
import { ImFacebook2 } from "react-icons/im";
import { Link, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import auth from "../../assets/SVG/auth.svg";
import house from "../../assets/SVG/house.svg";
import logo from "../../assets/SVG/logo.svg";
import { theme } from "../../utils/theme";
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
  z-index: 1;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Header = () => {
  const navigate = useNavigate();
  return (
    <StyledHeader as="header" align="center" justify="midSpace">
      <Columns
        evenly="false"
        gap="l"
        onClick={() => {
          navigate("/");
        }}
      >
        <img src={logo} alt="Site logo" />
        <Rows justify="start">
          <Text weight={700} size="headerTitle">
            Turkish Dream home
          </Text>
          <Text
            weight={200}
            color="textNote"
            size="headerText"
            letterSpacing="2px"
          >
            Real Estate
          </Text>
        </Rows>
      </Columns>
      <Inline gap="l">
        <FaSquareTwitter size="2.5rem" color={`${theme.colors.main}`} />
        <FaInstagramSquare size="2.5rem" />
        <ImFacebook2 size="2.1rem" color={`${theme.colors.main}`} />
        <FaLinkedin size="2.5rem" />
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
