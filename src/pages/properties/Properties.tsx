import { GridColResponsive, Pad, Rows } from "@sfiller23/sf-component-library";
import { useContext } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import { PropertiesContext } from "../../context/propertiesContext/PropertiesContext";
import Map from "./map/Map";
import PropertyCard from "./propertyCard/PropertyCard";
import PropertyListHeader from "./propertyListHeader/PropertyListHeader";

const Properties = () => {
  const { properties } = useContext(PropertiesContext);

  const currentYear = new Date().getFullYear();

  return (
    <Rows>
      <Map />
      <SearchBar />
      <Pad space="xl" width="100%">
        <PropertyListHeader />
        <GridColResponsive minItemWidth="17rem" gap="l">
          {properties.map((property) => {
            return (
              <PropertyCard
                key={property.url}
                {...property}
                currentYear={currentYear}
              />
            );
          })}
        </GridColResponsive>
      </Pad>
    </Rows>
  );
};

export default Properties;
