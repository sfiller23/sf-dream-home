import {
  Columns,
  Inline,
  MediaWrapper,
  Rows,
} from "@cman430/sf-component-library";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import logo from "../../assets/logo.svg";

const StyledHeader = styled(Inline)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  background-color: white;
`;

const Header = () => {
  return (
    <StyledHeader as="header" align="center" justify="between" gutter="s">
      <Columns evenly={false}>
        <MediaWrapper>
          <img src={logo} alt="Site logo" />
        </MediaWrapper>
        <Rows>
          {/* <SiteTypography>Dream home</SiteTypography>
          <SiteTypography>Real Estate</SiteTypography> */}
        </Rows>
      </Columns>
      <Inline align="center" justify="evenly">
        <Link to="/home">
          {/* <SiteTypography color="heading">Home</SiteTypography> */}
        </Link>
        <Link to="/properties">
          {/* <SiteTypography color="heading">Property</SiteTypography> */}
        </Link>
        <Link to="/pages">
          {/* <SiteTypography color="heading">Page</SiteTypography> */}
        </Link>
        <Link to="/blogs">
          {/* <SiteTypography color="heading">Blog</SiteTypography> */}
        </Link>
        <Link to="/contact">
          {/* <SiteTypography color="heading">Contact</SiteTypography> */}
        </Link>
      </Inline>
      <Columns>
        <Rows>
          <Inline>
            <MediaWrapper>
              <img src={logo} alt="Site logo" />
            </MediaWrapper>
            <Link to="/register">
              {/* <SiteTypography color="heading">Register</SiteTypography> */}
            </Link>
            /
            <Link to="/login">
              {/* <SiteTypography color="heading">Login</SiteTypography> */}
            </Link>
          </Inline>
        </Rows>
      </Columns>
    </StyledHeader>
  );
};

export default Header;
