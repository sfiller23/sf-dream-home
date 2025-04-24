export interface Property {
  apartment_bathrooms: number;
  apartment_bedrooms: number;
  apartment_floor: number;
  apartment_living_area: string;
  apartment_rooms: number;
  apartment_total_area: string;
  building_construction_year: number;
  building_floor: number;
  building_total_area: string;
  city: string;
  image: string;
  price_in_USD: number;
  url: string;
}
export type Order = "ascending" | "descending";

export interface OrderBy {
  order: Order;
  orderBy: keyof Property;
}

export type SetProperties = {
  type: "SET_PROPERTIES";
  payload: Property[];
};

export type SetCity = {
  type: "SET_CITY";
  payload: string;
};

export type SetOrderBy = {
  type: "SET_ORDER_BY";
  payload: OrderBy;
};

type PropertiesState = {
  properties: Property[];
  city: string;
  orderBy: OrderBy;
};

export const initState: PropertiesState = {
  properties: [],
  city: "",
  orderBy: {
    order: "ascending",
    orderBy: "price_in_USD",
  },
};

export type PropertiesActions = SetProperties | SetCity | SetOrderBy;

export const propertiesReducer = (
  state: PropertiesState = initState,
  action: PropertiesActions
) => {
  switch (action.type) {
    case "SET_PROPERTIES":
      return { ...state, properties: action.payload };
    case "SET_CITY":
      return { ...state, city: action.payload };
    case "SET_ORDER_BY": {
      const sortedProperties = [...state.properties].sort(
        (a: Property, b: Property) => {
          if (action.payload.order === "ascending") {
            return +a[action.payload.orderBy] - +b[action.payload.orderBy];
          } else {
            return +b[action.payload.orderBy] - +a[action.payload.orderBy];
          }
        }
      );
      return {
        ...state,
        properties: sortedProperties,
        orderBy: action.payload,
      };
    }
    default:
      return state;
  }

  return state;
};
