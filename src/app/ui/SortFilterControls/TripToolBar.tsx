"use client"
import { useCruiseStore } from "@/store/useCruiseStore"
import { SortingSelect } from "./SortingDropdown";

export const TripToolBar: React.FC = () => {
    const { sortedCruises, error, isLoading} = useCruiseStore();

    const shouldRender = !error && !isLoading;
    const currentCruisesAvailable = sortedCruises.length;

    if(!shouldRender) {
        return null;
    }

    return(
        <div className="w-full relative flex justify-between">
            <div className="flex items-center gap-2">
                <p>{`${currentCruisesAvailable} trips found`}</p>
                <button className="
                    inline-flex
                    px-4
                    py-2
                    rounded-md
                    shadow-lg
                    hover:shadow-xl
                    hover:bg-gray-200
                    transition-all
                    duration-300
                    ease-in-out
                    border
                    border-gray-200
                ">
                    Reset Filters
                </button>
                {/* 
                    Reset button is great for MVP - for future improvement, this is an ideal space to show active filters as chip or something
                    I think a nice UI would allow a user to clear individual filters without clearing all of them      
                */}
            </div>
            <div className="flex items-center gap-2">
                <p>Sort by</p>
                <SortingSelect/>
            </div>
        </div>
    )
} 