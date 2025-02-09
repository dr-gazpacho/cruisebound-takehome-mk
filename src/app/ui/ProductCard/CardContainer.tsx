"use client"
import { Card } from "./Card"
import { useEffect } from "react"
import { useCruiseStore } from "@/store/useCruiseStore"

export const CardContainer: React.FC = () => {
      const { orderedCruises, error, isLoading, fetchCruises } = useCruiseStore();

      //simple but not beautiful - ideally would integrate the store with a Suspense component and show the user
      //some kind of loading state while they're waiting for the API or the sort/filter action (if it's slow or happening server-side)
      //client side sort/filter in this should be fast enough where this brutalist "loading state" is acceptable for v1
      const shouldRender = !error && !isLoading;
    
      useEffect(() => {
        fetchCruises()
      }, [fetchCruises])

    return (
        <section>
            {shouldRender && orderedCruises.map((cruise, index) => {
                return (
                    <Card key={index} cruise={cruise}/>
                )
            })}
        </section>
    )
}