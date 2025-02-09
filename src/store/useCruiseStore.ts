import { create } from 'zustand';
import { fetchTrips } from '../utils/data';
import { CruiseApiResponse, Cruise, SortingConfig, FilterConfig, FilterProperty } from '../types'; 

interface CruiseStore {
    //cruises will be "immutable" in the sense that I'll make shallow copies for sort/filter actions and render those
    cruises: Cruise[];
    error: CruiseApiResponse['error'];
    isLoading: boolean;
    
    //separate state for sorted/filtered results and current sorting/filtering methods
    orderedCruises: Cruise[];
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
    orderedCruises: [],
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
                set({ error, cruises: [], orderedCruises: [], isLoading: false });
            } else if (data?.results) {
                set({ 
                    cruises: data.results, 
                    orderedCruises: data.results, // Initialize sorted array with original data, render this
                    error: null, 
                    isLoading: false 
                });
            } else {
                set({ 
                    error: { message: 'No data found' }, 
                    cruises: [], 
                    orderedCruises: [],
                    isLoading: false 
                });
            }
        } catch (error) {
            console.log(`Throw new ${error} or log it`)
            set({ 
                error: { message: 'Failed to fetch cruises' }, 
                cruises: [], 
                orderedCruises: [],
                isLoading: false 
            });
        }
    },
    

    sort: (method: SortingConfig) => {

        const { orderedCruises, sortMethod } = get();
        
        const updatedorderedCruises = [...orderedCruises].sort((a, b) => {
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
            orderedCruises: updatedorderedCruises,
            sortMethod: method ?? sortMethod
        });
    },

filter: (incomingFilter: FilterConfig) => {

    const { cruises, sortMethod, filters } = get();
    
    let updatedFilters = [...filters];
    
    if (filters.length === 1 && filters[0].property === null) {
        updatedFilters = [];
    }
    
    const existingFilterIndex = updatedFilters.findIndex(
        filter => filter.property === incomingFilter.property
    );
    
    if (incomingFilter.value === "") {
        if (existingFilterIndex !== -1) {
            updatedFilters.splice(existingFilterIndex, 1);
        }
    } else {
        if (existingFilterIndex !== -1) {
            updatedFilters[existingFilterIndex] = incomingFilter;
        } else {
            updatedFilters.push(incomingFilter);
        }
    }
    
    //reset filters to initial state if all values are "", apply no filtering
    if (updatedFilters.length === 0 || incomingFilter.property === FilterProperty.CLEAR_ALL) {
        updatedFilters = [{
            property: null,
            value: ""
        }];
    }
    
    //start by making a copy of all the cruises and filter down from the root set
    let filteredCruises = [...cruises];
    
    //only apply filters if there are active filters (property not null)
    if (updatedFilters[0].property !== null) {
        filteredCruises = filteredCruises.filter(cruise => {
            return updatedFilters.every(filter => {
                // Skip empty filter values
                if (filter.value === "") return true;
                
                switch (filter.property) {
                    case FilterProperty.CRUISELINE:
                        // Use regex for consecutive characters matching
                        const cruiselineRegex = new RegExp(filter.value.toLowerCase());
                        return !!cruise?.ship?.line?.name?.toLowerCase().match(cruiselineRegex);
                    case FilterProperty.DEPARTURE_PORT:
                        const portRegex = new RegExp(filter.value.toLowerCase());
                        return !!cruise?.itinerary[0]?.toLowerCase().match(portRegex);
                    default:
                        return true;
                }
            });
        });
    }
    
    // re-apply current sort to filtered results
    // doing this because I'm filtering down from the total cruises availble
    const sortedFilteredCruises = [...filteredCruises].sort((a, b) => {
        switch(sortMethod) {
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
        }
    });

    set({
        orderedCruises: sortedFilteredCruises,
        filters: updatedFilters
    });
}
   
}));