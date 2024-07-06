import { ISearchFilters } from "../interfaces";

export const buildSearchString = (filters: ISearchFilters) => {
  // Object containing all the state values
  const queryParams = {
    ...filters,
  };

  // Filter out undefined or empty values and create key-value pairs
  const queryString = Object.entries(queryParams)
    .filter(([_, value]) => value !== undefined && value !== "")
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    )
    .join("&");

  return queryString;
};
