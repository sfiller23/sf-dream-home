import { Dispatch, PropsWithChildren, createContext, useReducer } from "react";
import {
  OrderBy,
  PropertiesActions,
  Property,
  initState,
  propertiesReducer,
} from "./propertiesReducer";

type PropertiesContextState = {
  properties: Property[];
  selectedCity: string;
  orderBy: OrderBy;
  dispatch: Dispatch<PropertiesActions>;
};

export const PropertiesContext = createContext<PropertiesContextState>({
  properties: [],
  selectedCity: "",
  orderBy: {
    order: "ascending",
    orderBy: "price_in_USD",
  },
  dispatch: () => {},
} as PropertiesContextState);

export const PropertiesProvider = ({ children }: PropsWithChildren) => {
  const [{ ...properties }, dispatch] = useReducer(
    propertiesReducer,
    initState
  );
  return (
    <PropertiesContext.Provider
      value={{
        properties: properties.properties,
        selectedCity: properties.city,
        orderBy: properties.orderBy,
        dispatch,
      }}
    >
      {children}
    </PropertiesContext.Provider>
  );
};
