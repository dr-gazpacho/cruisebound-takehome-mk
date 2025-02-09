import { Cruise } from "@/types"
import Image from "next/image"
import { StarIcon, ArrowIcon } from "./Icon"
import React from 'react'

type CardProps = {
    cruise: Cruise;
}

export const Card: React.FC<CardProps> = ({ cruise }) => {
    return(
        <article className="
                grid
                grid-cols-[1fr_2fr]
                w-full rounded-xl
                shadow-xl hover:shadow-2xl
                transition-shadow
                duration-300
                ease-in-out
                overflow-hidden 
                my-4
            "
            aria-label="Cruise Package"
        >

        
            {/* Image section */}
            <div className="relative col-start-1 col-span-1 bg-slate-100">
                <div className="aspect-4/3">
                    <Image 
                        src={cruise.ship.image as string} 
                        alt={cruise.ship.name} 
                        className="object-cover"
                        fill
                        sizes="33vw"
                    />
                </div>
                <time 
                    dateTime="2022-11-23" 
                    className="absolute top-4 left-4 bg-black/50 text-white rounded p-2"
                >
                    {cruise.departureDate}
                </time>
            </div>
            {/* END IMAGE */}

            {/* Main Card */}
            <div className="grid grid-rows-[2fr_1fr]">
            
                {/* Upper content area */}
                <div className="grid grid-cols-[3fr_1fr] p-6">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-xl font-bold">
                            {cruise.name}
                        </h2>
                        <ul className="flex items-baseline">
                            <li className="mr-2 text-md font-bold slate-700">{cruise.region}</li>
                            <li className="mr-2 text-md font-bold slate-700">{`${cruise.duration} nights`}</li>
                            <li className="mr-1"><StarIcon /> {cruise.ship.rating}</li>
                            <li className="text-xs text-slate-500">{`${cruise.ship.reviews} reviews`}</li>
                        </ul>
                        {/* TO DO - refactor this into it's own component where I can zoom in on the layout and manage long itineraries */}
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

                    <div className="flex flex-col items-end">
                        <div className="w-24">
                            <Image 
                                src={cruise.ship.line.logo as string} 
                                alt={cruise.ship.line.name} 
                                width={100}
                                height={50}
                                className="w-full h-auto object-contain"
                            />
                        </div>
                        <h3 className="text-xs text-slate-500 mt-2 text-right w-full">
                            {cruise.ship.line.name}
                        </h3>
                    </div>
                </div>
                    


                {/* Bottom section */}
                <div className="grid grid-cols-[1fr_auto] gap-8 bg-slate-100 items-center px-6">
                    <div className="justify-self-end">
                        <p className="text-xs text-slate-500">
                            Interior from
                        </p>
                        <p className="font-bold text-xl justify-self-end">
                            <sup className="text-sm">$</sup>
                            {cruise.price}
                        </p>
                    </div>
                    <button 
                        className="
                            bg-sailings
                            hover:bg-sailings/80
                            text-white
                            rounded-md
                            px-6
                            py-3
                            font-medium
                            transition-colors
                        ">
                        See Sailings
                    </button>
                </div>
            </div>
        </article>
    )
}