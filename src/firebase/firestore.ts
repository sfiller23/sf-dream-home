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
import { app } from "../main";

// Function to get filtered real estate info
export async function getFilteredRealEstateInfo(filters: {
  city?: string;
  minRooms?: number;
  maxFloor?: number;
  minYear?: number;
  maxPrice?: number;
}) {
  console.log(filters);
  const db = getFirestore(app); // Initialize Firestore
  let q: Query = collection(db, "real-estate-info");
  q = query(
    q,
    where("apartment_rooms", ">=", filters.minRooms ?? 0),
    where("apartment_floor", "<=", filters.maxFloor ?? 100),
    where("building_construction_year", ">=", filters.minYear ?? 1940),
    where("price_in_USD", "<=", filters.maxPrice ?? 5000000)
  );
  if (filters.city) {
    q = query(q, where("city", "==", filters.city));
  }

  q = query(q, orderBy("price_in_USD"));

  // collection(db, "real-estate-info"),
  //   where("city", "==", filters.city),
  //   where("apartment_rooms", ">=", filters.minRooms),
  //   where("apartment_floor", "<=", filters.maxFloor),
  //   where("building_construction_year", ">=", filters.minYear),
  //   where("price_in_USD", "<=", filters.maxPrice),
  //   orderBy("city");

  //Apply filters conditionally
  // if (filters.city) {
  //   q = query(q, where("city", "==", filters.city));
  // }
  // if (filters.rooms) {
  //   q = query(q, where("apartment_rooms", "==", filters.rooms));
  // }
  // if (filters.maxFloor) {
  //   q = query(q, where("apartment_floor", "<=", filters.maxFloor));
  // }
  // if (filters.minYear) {
  //   q = query(q, where("building_construction_year", ">=", filters.minYear));
  // }
  // if (filters.maxPrice) {
  //   q = query(q, where("price_in_USD", "<=", filters.maxPrice));
  // }

  // Execute the query
  const querySnapshot = await getDocs(q);
  const results: DocumentData[] = [];
  querySnapshot.forEach((doc) => {
    results.push(doc.data());
  });
  console.log(querySnapshot);
  return results;
}
