import { create } from 'zustand';
import { fetchTrips } from '../utils/data';
import { CruiseApiResponse, Cruise, SortingConfig } from '../types'; 

interface CruiseStore {
    //cruises will be "immutable" in the sense that I'll make shallow copies for sort/filter actions and render those
    cruises: Cruise[];
    error: CruiseApiResponse['error'];
    isLoading: boolean;
    
    //separate state for sorted/filtered results and current sorting/filtering methods
    sortedCruises: Cruise[];
    sortMethod: SortingConfig;
    
    //actions
    fetchCruises: () => Promise<void>;
    sort: (method: SortingConfig) => void;
}

export const useCruiseStore = create<CruiseStore>((set, get) => ({

    //initial state
    cruises: [],
    error: null,
    isLoading: false,
    sortedCruises: [],
    sortMethod: SortingConfig.PRICE_ASC,


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
    

    sort: (method: SortingConfig) => {

        const { cruises } = get();
        
        const sortedCruises = [...cruises].sort((a, b) => {
        if (method === SortingConfig.PRICE_ASC) {
            return a.price - b.price;
        }
        return b.price - a.price;
        });
        
        set({ 
            sortedCruises,
            sortMethod: method
        });
    }
}));