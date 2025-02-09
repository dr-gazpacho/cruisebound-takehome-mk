import { SortFilterDesktop } from "./SortFilterDesktop"
import { SortFilterMobile } from "./SortFilterMobile"

export const SortFilterResponsiveContainer: React.FC = () => {
    return(
        <aside>
            <SortFilterDesktop/>
            <SortFilterMobile/>
        </aside>
    )
}