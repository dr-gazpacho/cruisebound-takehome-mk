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
        <div className="
            w-full 
            relative 
            flex 
            flex-col
            space-y-4
            md:flex-row
            md:space-y-0
            md:justify-between 
            md:items-center
            p-4
        ">
            {/* Trips found and Reset button group */}
            <div className="
                flex 
                flex-col
                space-y-2
                sm:flex-row
                sm:items-center
                sm:gap-2
            ">
                <p className="
                    text-sm 
                    md:text-base
                    self-end
                    sm:self-auto
                    my-auto 
                ">{`${currentCruisesAvailable} trips found`}</p>
                <button className="
                    inline-flex
                    items-center
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
                    w-full
                    sm:w-auto
                ">
                    Reset Filters
                </button>
            </div>
            <div className="
                flex 
                flex-col
                space-y-2
                sm:flex-row
                sm:items-center
                sm:gap-2

            ">
                <p className="my-auto self-end sm:self-auto">Sort by</p>
                <SortingSelect/>
            </div>
        </div>
    )
}