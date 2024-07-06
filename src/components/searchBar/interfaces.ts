export interface ISearchFilters {
  city?: string;
  minRooms?: number;
  maxFloor?: number;
  minYear?: number;
  maxPrice?: number;
  type?: "rent" | "buy";
}
