import { Cruise } from "@/types"
import Image from "next/image"
import { StarIcon, ArrowIcon } from "./Icon"
import * as Fallback from '../../public/cb.jpeg'
import React, { useState } from 'react'
import { formatDateRange } from "@/utils/date"

type CardProps = {
    cruise: Cruise;
}

export const Card: React.FC<CardProps> = ({ cruise }) => {

    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleDialogClose = () => {
        setIsDialogOpen(!isDialogOpen);
    };

    return(
        <>
            <article className="
                    grid
                    grid-cols-1
                    md:grid-cols-[1fr_2fr]
                    w-full rounded-xl
                    shadow-xl hover:shadow-2xl
                    transition-shadow
                    duration-300
                    ease-in-out
                    overflow-hidden 
                    my-4
                    border
                    border-gray-200
                "
                aria-label="Cruise Packages"
            >
                {/* Image section */}
                <div className="
                    relative 
                    col-start-1 
                    col-span-1 
                    bg-gray-100 
                    h-full
                    md:h-full 
                    w-full  
                    aspect-[4/3] md:aspect-auto 
                "> 
                    <div className="h-full w-full">
                        <Image 
                            src={cruise.ship.image as string ?? Fallback} 
                            alt={cruise.ship.name} 
                            className="object-cover h-full w-full" 
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                        />
                    </div>
                    <time 
                        dateTime="2022-11-23" 
                        className="absolute top-4 left-4 bg-black/50 text-white rounded p-2"
                    >
                        {formatDateRange(cruise.departureDate, cruise.returnDate)}
                    </time>
                </div>

                {/* Main Card */}
                <div className="grid grid-rows-[auto_auto] md:grid-rows-[2fr_1fr]">
                    
                    {/* Upper content area */}
                    <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] p-4 md:p-6 gap-4 md:gap-0">
                        <div className="flex flex-col gap-4">
                            <h2 className="text-lg md:text-xl font-bold">
                                {cruise.name}
                            </h2>
                            <ul className="flex flex-wrap items-baseline gap-2 md:gap-0">
                                <li className="mr-2 text-md font-bold gray-700">{cruise.region}</li>
                                <li className="mr-2 text-md font-bold gray-700">{`${cruise.duration} nights`}</li>
                                <li className="mr-1"><StarIcon /> {cruise.ship.rating}</li>
                                <li className="text-xs text-gray-500">{`${cruise.ship.reviews} reviews`}</li>
                            </ul>
                            <div className="flex flex-wrap items-baseline overflow-hidden">
                                {cruise.itinerary.map((stop, index) => {
                                    return (
                                        <span key={index} className="inline-flex items-center shrink-0 mr-1">
                                            {stop} {index < cruise.itinerary.length - 1 && <ArrowIcon />}
                                        </span>
                                    )
                                })}
                            </div>
                        </div>

                        <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-start">
                            <div className="w-20 md:w-24">
                                <Image 
                                    src={cruise.ship.line.logo as string ?? Fallback} 
                                    alt={cruise.ship.line.name} 
                                    width={100}
                                    height={50}
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                            <h3 className="text-xs text-gray-500 md:mt-2 text-right w-full">
                                {cruise.ship.line.name}
                            </h3>
                        </div>
                    </div>

                    {/* Lower content area */}
                    <div className="grid grid-cols-[1fr_auto] gap-4 md:gap-8 bg-gray-100 items-center p-4 md:px-6">
                        <div className="justify-self-end text-right">
                            <p className="text-xs text-gray-500 text-right">
                                Interior from
                            </p>
                            <p className="font-bold text-lg md:text-xl justify-self-end text-right">
                                <sup className="text-sm">$</sup>
                                {cruise.price}
                            </p>
                        </div>
                        <button
                            onClick={handleDialogClose} 
                            className="
                                bg-sailings
                                hover:bg-sailings/80
                                text-white
                                rounded-md
                                px-4 md:px-6
                                py-2 md:py-3
                                text-sm md:text-base
                                font-medium
                                transition-colors
                            ">
                            See Sailings
                        </button>
                    </div>
                </div>
            </article>
            <dialog 
                open={isDialogOpen} 
                className="
                    fixed 
                    top-1/2 
                    left-1/2 
                    -translate-x-1/2 
                    -translate-y-1/2
                    rounded-lg 
                    p-6
                    shadow-xl
                    backdrop:bg-black/50
                    z-50
                "
            >
                <div className="flex flex-col gap-4 min-w-[200px]">
                    <h3 className="text-lg font-semibold">Coming Soon!</h3>
                    <p className="text-gray-600">This feature is not yet available.</p>
                    <button
                        onClick={handleDialogClose}
                        className="
                            bg-sailings
                            hover:bg-sailings/80
                            text-white
                            rounded-md
                            px-4
                            py-2
                            text-sm
                            font-medium
                            transition-colors
                            self-end
                        "
                    >
                        Close
                    </button>
                </div>
            </dialog>
            {/* not a formal focus trap, just a visual touch */}
            {isDialogOpen && (
                <div 
                    className="fixed inset-0 bg-black/50 z-40"
                    onClick={handleDialogClose}
                />
            )}
        </> 
    )
}