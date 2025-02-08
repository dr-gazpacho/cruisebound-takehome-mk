// src/store/useCruiseStore.ts
import { create } from 'zustand';
import { fetchTrips } from '../utils/data';
import type { CruiseApiResponse, Cruise } from '../types'; 

interface CruiseStore {
  cruises: Cruise[];
  error: CruiseApiResponse['error'];
  isLoading: boolean;
  fetchCruises: () => Promise<void>;
}

export const useCruiseStore = create<CruiseStore>((set) => ({
  cruises: [],
  error: null,
  isLoading: false,
  fetchCruises: async () => {
    set({ isLoading: true });
    try {
        const { data, error } = await fetchTrips();
        if (error) {
            set({ error, cruises: [], isLoading: false });
        } else if (data?.results) {
            set({ cruises: data.results, error: null, isLoading: false });
        } else {
            set({ 
                error: { message: 'No data found' }, 
                cruises: [], 
                isLoading: false 
            });
        }
    } catch (error) {
        console.log(`Throw new ${error} or log it`)
        set({ 
            error: { message: 'Failed to fetch cruises' }, 
            cruises: [], 
            isLoading: false 
        });
    }
  },
}));