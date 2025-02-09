import { SortFilterResponsiveContainer } from "./ui/SortFilterControls/SortFilterResponsiveContainer";
import { TripToolBar } from "./ui/SortFilterControls/TripToolBar";
import { CardContainer } from "./ui/ProductCard/CardContainer";



export default function Home() {

  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
        <SortFilterResponsiveContainer>
          <TripToolBar />
          <CardContainer />
        </SortFilterResponsiveContainer>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <div>Generic Footer</div>
      </footer>
    </div>
  );
}
