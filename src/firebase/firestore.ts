import {
  DocumentData,
  Query,
  collection,
  getDocs,
  getFirestore,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { Dispatch } from "react";
import { ISearchFilters } from "../components/searchBar/interfaces";
import {
  PropertiesActions,
  Property,
} from "../context/propertiesContext/propertiesReducer";
import { app } from "../firebaseApp";

// Function to get filtered real estate info
export async function getFilteredRealEstateInfo(
  filters: ISearchFilters,
  dispatch: Dispatch<PropertiesActions>
) {
  const db = getFirestore(app); // Initialize Firestore
  let q: Query = collection(db, "real-estate-info");

  if (filters.city === "All" || !filters.city) {
    q = query(
      q,
      where("apartment_rooms", ">=", filters.minRooms ?? 0),
      where("apartment_floor", "<=", filters.maxFloor ?? 100),
      where("building_construction_year", ">=", filters.minYear ?? 1940),
      where(
        "price_in_USD",
        "<=",
        filters.maxPrice === 0 || !filters.maxPrice ? 5000000 : filters.maxPrice
      )
    );
  }
  if (filters.city && filters.city !== "All") {
    q = query(q, where("city", "==", filters.city));
  }

  q = query(q, orderBy("price_in_USD"));

  // Execute the query
  const querySnapshot = await getDocs(q);
  const results: DocumentData[] = [];
  querySnapshot.forEach((doc) => {
    results.push(doc.data());
  });
  dispatch({ type: "SET_PROPERTIES", payload: results as Property[] });
}
