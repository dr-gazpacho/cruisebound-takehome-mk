"use client"
import React, { useState } from 'react';
import { ArrowIcon } from '../ProductCard/Icon';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [departurePort, setDeparturePort] = useState('');
  const [cruiseLine, setCruiseLine] = useState('');

  const validateInput = (input: string) => {
    return input.replace(/[^a-zA-Z\s-]/g, '');
  };

  const handleDepartureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const validatedInput = validateInput(e.target.value);
    setDeparturePort(validatedInput);
  };

  const handleCruiseLineChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const validatedInput = validateInput(e.target.value);
    setCruiseLine(validatedInput);
  };

  return (
        <div className={`
            min-h-screen
            h-full
            fixed
            md:relative
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
            <div className="p-4 pt-16 space-y-6">
            {/* Departure Port Input */}
            <div className="space-y-2">
                <label htmlFor="departurePort" className="block text-sm font-medium text-white">
                Departure Port
                </label>
                <input
                id="departurePort"
                type="text"
                value={departurePort}
                onChange={handleDepartureChange}
                placeholder="Enter departure port"
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

            {/* Cruise Line Input */}
            <div className="space-y-2">
                <label htmlFor="cruiseLine" className="block text-sm font-medium text-white">
                Cruise Line
                </label>
                <input
                id="cruiseLine"
                type="text"
                value={cruiseLine}
                onChange={handleCruiseLineChange}
                placeholder="Enter cruise line"
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
        </div>

        {/* Toggle Button - Always visible */}
        <button
            onClick={() => setIsOpen(!isOpen)}
            className="
            h-12
            w-12
            bg-white
            rounded-full
            flex
            items-center
            justify-center
            hover:bg-gray-100
            transition-colors
            duration-300
            m-4
            "
        >
            <div className={`transform ${isOpen ? 'rotate-180' : ''} transition-transform duration-300`}>
            <ArrowIcon />
            </div>
        </button>
        </div>
  );
};

export default Sidebar;