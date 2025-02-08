"use client"
import { useEffect } from "react";
import { useCruiseStore } from "@/store/useCruiseStore";

import { SortFilterResponsiveContainer } from "./ui/SortFilterControls/SortFilterResponsiveContainer";



export default function Home() {
  const { cruises, error, isLoading, fetchCruises } = useCruiseStore();

  useEffect(() => {
    fetchCruises()
  }, [fetchCruises])

  console.log({ cruises, error, isLoading });

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <SortFilterResponsiveContainer />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <div>Generic Footer</div>
      </footer>
    </div>
  );
}
