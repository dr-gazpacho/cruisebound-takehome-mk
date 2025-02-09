import { create } from 'zustand';
import { fetchTrips } from '../utils/data';
import { CruiseApiResponse, Cruise, SortingConfig, FilterConfig } from '../types'; 

interface CruiseStore {
    //cruises will be "immutable" in the sense that I'll make shallow copies for sort/filter actions and render those
    cruises: Cruise[];
    error: CruiseApiResponse['error'];
    isLoading: boolean;
    
    //separate state for sorted/filtered results and current sorting/filtering methods
    sortedCruises: Cruise[];
    sortMethod: SortingConfig;
    filters: FilterConfig[];
    
    //actions
    fetchCruises: () => Promise<void>;
    sort: (method: SortingConfig) => void;
    filter: (filterConfig: FilterConfig) => void;
}

export const useCruiseStore = create<CruiseStore>((set, get) => ({

    //initial state
    cruises: [],
    error: null,
    isLoading: false,
    sortedCruises: [],
    sortMethod: SortingConfig.PRICE_ASC,
    filters: [
        {
            property: null,
            value: ""
        }
    ],


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

        const { sortedCruises, sortMethod } = get();
        
        const updatedSortedCruises = [...sortedCruises].sort((a, b) => {
        switch(method){
            case SortingConfig.PRICE_ASC:
                return a.price - b.price;
            case SortingConfig.PRICE_DESC:
                return b.price - a.price;
            case SortingConfig.DURATION_ASC:
                return a.duration - b.duration;
            case SortingConfig.DURATION_DESC:
                return b.duration - a.duration;
            case SortingConfig.DEPARTURE_DATE_ASC:
                return new Date(a.departureDate).getTime() - new Date(b.departureDate).getTime();
            case SortingConfig.DEPARTURE_DATE_DESC:
                return new Date(b.departureDate).getTime() - new Date(a.departureDate).getTime();
            default:
                return a.price - b.price;
        }})
            
        
        set({ 
            sortedCruises: updatedSortedCruises,
            sortMethod: method ?? sortMethod
        });
    },

    filter: (incomingFilters: FilterConfig) => {

        const { sortedCruises, sortMethod, filters } = get();

        console.log(incomingFilters)

        const updatedSortedCruises = sortedCruises

        set({
            sortedCruises: updatedSortedCruises,
            filters: filters ?? filters
        })
    }
}));