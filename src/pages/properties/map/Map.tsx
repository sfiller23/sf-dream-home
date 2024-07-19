import { useContext } from "react";
import { styled } from "styled-components";
import turkishMap from "../../../assets/images/turkish_map.png";
import { PropertiesContext } from "../../../context/propertiesContext/PropertiesContext";
import { useGetImgUrl } from "../../../firebase/hooks/useGetImgUrl";

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

const Map = () => {
  const { selectedCity } = useContext(PropertiesContext);
  const cityImage = useGetImgUrl(selectedCity);
  return (
    <StyledMapWrapper>
      <StyledMap src={cityImage === "" ? turkishMap : cityImage} alt="map" />
    </StyledMapWrapper>
  );
};

export default Map;
