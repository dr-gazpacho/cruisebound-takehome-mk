import { SortFilterDesktop } from "./SortFilterDesktop"
import { SortFilterMobile } from "./SortFilterMobile"

export const SortFilterResponsiveContainer: React.FC = () => {
    return(
        <div>
            <SortFilterDesktop/>
            <SortFilterMobile/>
        </div>
    )
}