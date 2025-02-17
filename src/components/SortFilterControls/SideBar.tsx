"use client"
import React, { useState, useEffect, useCallback } from 'react';
import { ArrowIcon } from '../ProductCard/Icon';
import { useCruiseStore } from '@/store/useCruiseStore';
import { FilterProperty } from '@/types';
import Image from 'next/image';
import * as CB_BLUE from '../../public/cb_blue.png'

interface SidebarProps {
    children: React.ReactElement | React.ReactElement[];
}

//Monolith - should be broken down into landmark areas just for overall readability. Earmarking for "futures"
export const Sidebar: React.FC<SidebarProps> = ({children}) => {
    const { filter, filters } = useCruiseStore();

    //defaulting to closed for now - need to figure out if there's a way to make this different for mobile vs. desktop
    const [isOpen, setIsOpen] = useState(false);
    const [departurePort, setDeparturePort] = useState('');
    const [cruiseLine, setCruiseLine] = useState('');
    const [debouncedDeparturePort, setDebouncedDeparturePort] = useState('');
    const [debouncedCruiseLine, setDebouncedCruiseLine] = useState('');

    const validateInput = (input: string) => {
        return input.replace(/[^a-zA-Z\s-]/g, '');
      };

    const handleDepartureChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const validatedInput = validateInput(e.target.value);
        setDeparturePort(validatedInput);
    }, []);
    
    const handleCruiseLineChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const validatedInput = validateInput(e.target.value);
        setCruiseLine(validatedInput);
    }, []);
    
    //basically will work as a debouncer for each input
    //every time user inputs key it sets a timer
    //when they hit a new key before the timer runs out, it clears the old timer and starts a new one
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setDebouncedDeparturePort(departurePort);
        }, 300);
    
        return () => clearTimeout(timeoutId);
    }, [departurePort]);
    
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setDebouncedCruiseLine(cruiseLine);
        }, 300);
    
        return () => clearTimeout(timeoutId);
    }, [cruiseLine]);
    

    //I don't know how scalable a manual debounce with a useEffect like this is, especially for responsive design
    //this ultimately could probably move to its own generic hook we could share, like a useDebounce
    useEffect(() => {
        filter({
            property: FilterProperty.DEPARTURE_PORT, 
            value: debouncedDeparturePort
        });
    }, [debouncedDeparturePort, filter]);
    
    useEffect(() => {
        filter({
            property: FilterProperty.CRUISELINE, 
            value: debouncedCruiseLine
        });
    }, [debouncedCruiseLine, filter]);


    useEffect(() => {
        if(!filters[0].property) {
            setDeparturePort('');
            setCruiseLine('');
        }
    }, [filters])

  return (
            <main className="
                    flex 
                    md:flex-row
                    flex-col
                    row-start-2 
                    items-center 
                    sm:items-start 
                    w-full
                    h-full
                    relative
                    flex-1   
                ">
                <div className={`
                    h-screen      
                    fixed md:sticky       
                    top-0                 
                    left-0                 
                    transition-all
                    duration-300
                    bg-[#0F1829]
                    ${isOpen ? 'w-96' : 'w-0'}
                    flex
                    z-50
                `}>

                <div className={`
                        flex-1
                        overflow-hidden
                        transition-all
                        duration-300
                        ${isOpen ? 'opacity-100 w-full' : 'opacity-0 w-0'}
                    `}>
                    <div className="p-4 pt-24 space-y-6">

                        <div className="space-y-2">
                            <label htmlFor="departurePort" className="block text-sm font-medium text-white">
                                Departure Port
                            </label>
                            <input
                                id="departurePort"
                                type="text"
                                value={departurePort}
                                onChange={handleDepartureChange}
                                placeholder="Any port"
                                className="
                                    w-full
                                    px-3
                                    py-2
                                    bg-gray-700
                                    rounded-md
                                    focus:outline-none
                                    focus:ring-2
                                    focus:ring-blue-500
                                    text-white
                                    placeholder-gray-400
                                "
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="cruiseLine" className="block text-sm font-medium text-white">
                                Cruiseline
                            </label>
                            <input
                            id="cruiseLine"
                            type="text"
                            value={cruiseLine}
                            onChange={handleCruiseLineChange}
                            placeholder="Any ship"
                            className="
                                w-full
                                px-3
                                py-2
                                bg-gray-700
                                rounded-md
                                focus:outline-none
                                focus:ring-2
                                focus:ring-blue-500
                                text-white
                                placeholder-gray-400
                            "
                            />
                        </div>
                    </div>
                    <div className="aspect-square md:aspect-4/3 relative mt-60">
                        <Image 
                            src={CB_BLUE} 
                            alt={"Cruisebound"} 
                            className="object-contain"
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                        />
                    </div>
                </div>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="
                        fixed md:absolute          
                        left-6 md:-right-6
                        top-4
                        h-12
                        w-12
                        bg-white
                        rounded-[50%]
                        flex
                        items-center
                        justify-center
                        hover:bg-gray-100
                        transition-all
                        duration-300
                        shadow-md
                        border
                        border-gray-200
                    "
                >
                    <div className={`transform ${isOpen ? 'rotate-180' : ''} transition-transform duration-300`}>
                        <ArrowIcon />
                    </div>
                </button>
                </div>
                <div className="
                    flex 
                    flex-col 
                    w-full
                    md:transition-all 
                    md:duration-300
                ">
                    {children}
                </div>
            </main>

    );
};

