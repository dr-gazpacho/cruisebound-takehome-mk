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
        <article className="flex w-full rounded-sm shadow-lg overflow-hidden" aria-label="Cruise Package">
            {/*  Image take up 1/3 of overall card*/}
              <div className="w-1/3 h-full ">
                <Image 
                    src={cruise.ship.image as string} 
                    alt={cruise.ship.name} 
                    className="object-cover"
                    width={500}
                    height={400}
                
                />
                <time 
                    dateTime="2022-11-23" 
                    className="top-4 left-4 bg-black/50 text-white p-2 rounded"
                >
                    Nov 23, 2022
                </time>
            </div>

            <div className="flex flex-col">
                <div className="h-3/4">ONE</div>
                <div className="h-1/4 flex">
                    <div>
                        <p className="
                            text-xs 
                            text-slate-400
                        ">
                            Interior from
                        </p>
                        <p className="
                            font-bold
                        ">
                            <sup>
                                $
                            </sup>
                            {cruise.price}
                        </p>
                    </div>
                    <button 
                        className="
                            bg-sailings
                            hover:bg-sailings/80
                            text-white
                            rounded-md
                            px-2
                            font-medium
                        ">
                            See Sailings
                        </button>
                </div>
            </div>
        </article>
    )
}