import SideBar from "./SideBar"

interface SortFilterResponsiveContainerProps {
    children: React.ReactElement | React.ReactElement[];
}

export const SortFilterResponsiveContainer: React.FC<SortFilterResponsiveContainerProps> = ({children}) => {
    return(
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
            <SideBar/>
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
    )
}