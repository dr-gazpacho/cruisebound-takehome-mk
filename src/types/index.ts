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