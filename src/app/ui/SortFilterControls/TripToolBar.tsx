"use client"
import { useCruiseStore } from "@/store/useCruiseStore"

export const TripToolBar: React.FC = () => {
    const { sortedCruises, error, isLoading} = useCruiseStore();

    const shouldRender = !error && !isLoading;
    const currentCruisesAvailable = sortedCruises.length;

    if(!shouldRender) {
        return null;
    }

    return(
        <div className="w-full relative flex justify-between">
            <div>
                <p>{`${currentCruisesAvailable} trips found`}</p>
                <button>Reset Filters</button>
                {/* 
                    Reset button is great for MVP - for future improvement, this is an ideal space to show active filters as chip or something
                    I think a nice UI would allow a user to clear individual filters without clearing all of them      
                */}
            </div>
            <div>
                Sort
            </div>
        </div>
    )
} 