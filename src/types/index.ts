export interface CruiseLine {
  logo: string | null;
  name: string;
}

export interface Ship {
  name: string;
  rating: number;
  reviews: number;
  image: string | null;
  line: CruiseLine;
}

export interface Cruise {
  price: number;
  name: string;
  ship: Ship;
  itinerary: string[];
  region: string;
  departureDate: string;
  returnDate: string;
  duration: number;
}

export interface CruiseApiResponse {
  data: null | {
    results: Cruise[];
  };
  error: null | {
    message: string;
    statusCode?: number;
    body?: unknown;
  };
}

export enum SortingConfig {
  PRICE_ASC = "PRICE_ASC",
  PRICE_DESC = "PRICE_DESC",
  DURATION_ASC = "DURATION_ASC",
  DURATION_DESC = "DURATION_DESC",
  DEPARTURE_DATE_ASC = "DEPARTURE_DATE_ASC",
  DEPARTURE_DATE_DESC = "DEPARTURE_DATE_DESC"
}

export enum FilterProperty {
  CRUISELINE = "CRUISELINE",
  DEPARTURE_PORT = "DEPARTURE_PORT",
  CLEAR_ALL = "CLEAR_ALL"
}

export interface FilterConfig {
  property: FilterProperty | null;
  value: string;
}