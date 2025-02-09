import { create } from 'zustand';
import { fetchTrips } from '../utils/data';
import type { CruiseApiResponse, Cruise } from '../types'; 

interface CruiseStore {
    //cruises will be "immutable" in the sense that I'll make shallow copies for sort/filter actions and render those
    cruises: Cruise[];
    error: CruiseApiResponse['error'];
    isLoading: boolean;
    
    // New state for sorting
    sortedCruises: Cruise[];
    sortDirection: 'asc' | 'desc';
    
    //actions
    fetchCruises: () => Promise<void>;
    sortByPrice: (direction: 'asc' | 'desc') => void;
}

export const useCruiseStore = create<CruiseStore>((set, get) => ({

    //initial state
    cruises: [],
    error: null,
    isLoading: false,
    sortedCruises: [],
    sortDirection: 'asc',

    //actions
    fetchCruises: async () => {
        set({ isLoading: true });
        try {
            const { data, error } = await fetchTrips();
            if (error) {
                set({ error, cruises: [], sortedCruises: [], isLoading: false });
            } else if (data?.results) {
                set({ 
                    cruises: data.results, 
                    sortedCruises: data.results, // Initialize sorted array with original data, render this
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
    }
}));