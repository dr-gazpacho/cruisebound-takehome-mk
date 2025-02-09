"use client"
import React from 'react';
import { useCruiseStore } from '@/store/useCruiseStore';
import { SortingConfig } from '@/types';

interface StyledSelectProps {
  options: Array<{
    value: SortingConfig;
    label: string;
  }>;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  placeholder?: string;
}


//generic styled dropdown, you could export this whole thing and configure via props anywhere
//or do what I'm doing and just implement one discrete version of it per use case
//I think this strikes a good balance between building a reusable component but not fabricating abstractions against hypotheticals that may never happen
const StyledSelect: React.FC<StyledSelectProps> = ({
  options,
  defaultValue = '',
  onChange,
  placeholder = 'Select an option'
}) => {

  return (
    <select
      onChange={onChange}
      defaultValue={defaultValue}
      className="
        appearance-none
        inline-flex
        px-4
        py-2
        rounded-md
        shadow-lg
        hover:shadow-xl
        hover:bg-gray-100
        transition-all
        duration-300
        ease-in-out
        border
        border-gray-700
        bg-white
        cursor-pointer
        pr-8
        relative
        focus:outline-none
        focus:ring-2
        focus:ring-blue-500
        focus:border-transparent
        items-center
        w-full
        sm:w-auto
        my-auto
      "
    >
      <option value="" disabled>{placeholder}</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};


export const SortingSelect = () => {
  const options = [
    { 
        value: SortingConfig.PRICE_ASC, 
        label: 'Price: Low to High' 
    },
    { 
        value: SortingConfig.PRICE_DESC, 
        label: 'Price: High to Low' 
    },
    { 
        value: SortingConfig.DURATION_ASC,
        label: 'Trip Duration: Shortest First' 
    },
    { 
        value: SortingConfig.DURATION_DESC,
        label: 'Trip Duration: Longest First' 
    },
    { 
        value: SortingConfig.DEPARTURE_DATE_ASC,
        label: 'Trip Departure: Soonest First' 
    },
    {
        value: SortingConfig.DEPARTURE_DATE_DESC,
        label: 'Trip Departure: Latest First'
    }
  ];

  const { sort } = useCruiseStore()

  return (
    <div className="w-full sm:w-auto self-end sm:self-auto">
      <StyledSelect
        options={options}
        placeholder="Sort by..."
        onChange={(e) => sort(e.target.value as SortingConfig)}
      />
    </div>
  );
};
