import { Cruise } from "@/types"
import Image from "next/image"

//card has three sections

//1. on left 1/3, image with dates in upper left
//2. on right 2/3 top 2/3 - details
//3. on right 1/3 bottom 1/3, button to book && price

type CardProps = {
    cruise: Cruise;
}


export const Card: React.FC<CardProps> = ({ cruise }) => {
    return(
        <article className="
                grid
                grid-cols-[1fr_2fr]
                w-full rounded-sm
                shadow-lg hover:shadow-xl
                transition-shadow
                duration-300
                ease-in-out
                overflow-hidden 
                my-4
            "
            aria-label="Cruise Package"
        >

        
            {/* Image section */}
            <div className="relative">
                <Image 
                    src={cruise.ship.image as string} 
                    alt={cruise.ship.name} 
                    className="object-cover"
                    width={500}
                    height={400}
                />
                <time 
                    dateTime="2022-11-23" 
                    className="absolute top-4 left-4 bg-black/50 text-white rounded p-2"
                >
                    Nov 23, 2022
                </time>
            </div>
            {/* END IMAGE */}

            {/* Main Card */}
            <div className="grid grid-rows-[2fr_1fr]">
                {/* Upper content area */}
                <div className="grid grid-cols-[3fr_1fr] p-6">
                    <section>
                        <h2 className="text-xl font-bold">
                            {cruise.name}
                        </h2>
                    </section>
                    <section className="flex flex-col items-end">
                        <div className="w-24">
                            <Image 
                                src={cruise.ship.line.logo as string} 
                                alt={cruise.ship.line.name} 
                                width={100}
                                height={50}
                                className="w-full h-auto object-contain"
                            />
                        </div>
                        <h2 className="text-xs text-slate-500 mt-2">
                            {cruise.ship.line.name}
                        </h2>
                    </section>
                </div>

                {/* Bottom section */}
                <div className="grid grid-cols-[1fr_auto] gap-4 bg-slate-100 items-center px-6">
                    <div className="justify-self-end">
                        <p className="text-xs text-slate-500">
                            Interior from
                        </p>
                        <p className="font-bold text-xl">
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