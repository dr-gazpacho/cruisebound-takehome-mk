import { Sidebar } from "./ui/SortFilterControls/SideBar";
import { TripToolBar } from "./ui/SortFilterControls/TripToolBar";
import { CardContainer } from "./ui/ProductCard/CardContainer";

export default function Home() {

  return (
    <div className="font-[family-name:var(--font-geist-sans)] w-full min-h-screen">
        <Sidebar>
          <TripToolBar />
          <CardContainer />
        </Sidebar>
      <footer className="row-start-3 h-36 flex gap-6 flex-wrap items-center justify-center bg-gray-200">
        {/* Would add content here like links etc. nothing for now just using a grey placeholder box */}
      </footer>
    </div>
  );
}
