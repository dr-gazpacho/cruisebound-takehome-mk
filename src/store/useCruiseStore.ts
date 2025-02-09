import { create } from 'zustand';
import { fetchTrips } from '../utils/data';
import type { CruiseApiResponse, Cruise } from '../types'; 

interface CruiseStore {
  // Original state
  cruises: Cruise[];
  error: CruiseApiResponse['error'];
  isLoading: boolean;
  
  // New state for sorting
  sortedCruises: Cruise[];
  sortDirection: 'asc' | 'desc';
  
  // Original actions
  fetchCruises: () => Promise<void>;
  
  // New actions
  sortByPrice: (direction: 'asc' | 'desc') => void;
}

export const useCruiseStore = create<CruiseStore>((set, get) => ({
  // Original state
  cruises: [],
  error: null,
  isLoading: false,
  
  // New state
  sortedCruises: [],
  sortDirection: 'asc',
  
  // Original actions
  fetchCruises: async () => {
    set({ isLoading: true });
    try {
        const { data, error } = await fetchTrips();
        if (error) {
            set({ error, cruises: [], sortedCruises: [], isLoading: false });
        } else if (data?.results) {
            set({ 
                cruises: data.results, 
                sortedCruises: data.results, // Initialize sorted array with original data
                error: null, 
                isLoading: false 
            });
        } else {
            set({ 
                error: { message: 'No data found' }, 
                cruises: [], 
                sortedCruises: [],
                isLoading: false 
            });
        }
    } catch (error) {
        console.log(`Throw new ${error} or log it`)
        set({ 
            error: { message: 'Failed to fetch cruises' }, 
            cruises: [], 
            sortedCruises: [],
            isLoading: false 
        });
    }
  },
  
  // New actions
  sortByPrice: (direction: 'asc' | 'desc') => {
    const { cruises } = get();
    
    const sortedCruises = [...cruises].sort((a, b) => {
      if (direction === 'asc') {
        return a.price - b.price;
      }
      return b.price - a.price;
    });
    
    set({ 
      sortedCruises,
      sortDirection: direction
    });
  },
}));