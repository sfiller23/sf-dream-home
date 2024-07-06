import { Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import Text from "../common/typography/Text";

const PathIndicatorContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 0.5rem;
`;

const PathIndicator = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((name) => name);

  return (
    <PathIndicatorContainer aria-label="path_indicator">
      <Link to="/">
        <Text weight={200} color="textNote" size="headerText">
          Home
        </Text>
      </Link>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        return (
          <Fragment key={index}>
            <Text weight={200} color="textNote" size="headerText">
              &gt;
            </Text>
            {isLast ? (
              <Text weight={400} color="main" size="headerText">
                {name.charAt(0).toUpperCase() + name.slice(1)}
              </Text>
            ) : (
              <Link to={routeTo}>
                {" "}
                <Text weight={200} color="textNote" size="headerText">
                  {name.charAt(0).toUpperCase() + name.slice(1)}
                </Text>
              </Link>
            )}
          </Fragment>
        );
      })}
    </PathIndicatorContainer>
  );
};

export default PathIndicator;
