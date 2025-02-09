"use client"
import { Card } from "./Card"
import { useEffect, useState } from "react"
import { useCruiseStore } from "@/store/useCruiseStore"

export const CardContainer: React.FC = () => {
    const { orderedCruises, error, isLoading, fetchCruises } = useCruiseStore();
    const [currentPage, setCurrentPage] = useState(1);
    const resultsPerPage = 10;

    const shouldRender = !error && !isLoading;
    
    const totalPages = Math.ceil(orderedCruises.length / resultsPerPage);
    const startIndex = (currentPage - 1) * resultsPerPage;
    const endIndex = startIndex + resultsPerPage;
    const currentCruises = orderedCruises.slice(startIndex, endIndex);

    useEffect(() => {
        fetchCruises()
    }, [fetchCruises])

    //when you apply/remove filters, just reset back to the first page
    useEffect(() => {
        setCurrentPage(1);
    }, [orderedCruises.length]);

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
        //this just adds a visual scroll, not a programatic change of focus
        //would need improvements for accessibility
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="flex flex-col gap-4 mx-4">
            <section>
                {shouldRender && currentCruises.map((cruise, index) => (
                    <Card key={index} cruise={cruise}/>
                ))}
            </section>
    
            {/* Pagination Controls */}
            {shouldRender && totalPages > 1 && (
                <div className="flex justify-center items-center gap-2 my-4">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="px-4 py-2 rounded-md border border-gray-200 
                                    disabled:opacity-50 disabled:cursor-not-allowed
                                    hover:bg-gray-100 transition-colors
                                 "
                    >
                        Previous
                    </button>
    
                    <button
                        className="px-4 py-2 rounded-md border bg-blue-500 text-white border-blue-500"
                    >
                        {currentPage}
                    </button>
    
                    {/* next page if there is a next page */}
                    {currentPage < totalPages - 1 && (
                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            className="px-4 py-2 rounded-md border border-gray-200 hover:bg-gray-100"
                        >
                            {currentPage + 1}
                        </button>
                    )}
    
                    {/* use ellipsis for current + 1 through last */}
                    {currentPage < totalPages - 2 && (
                        <span className="px-2">...</span>
                    )}
    
                    {/* last page if not current page*/}
                    {currentPage !== totalPages && (
                        <button
                            onClick={() => handlePageChange(totalPages)}
                            className="px-4 py-2 rounded-md border border-gray-200 hover:bg-gray-100"
                        >
                            {totalPages}
                        </button>
                    )}
    
                    {/* flip to next page if not last */}
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 rounded-md border border-gray-200 
                                 disabled:opacity-50 disabled:cursor-not-allowed
                                 hover:bg-gray-100 transition-colors"
                    >
                        Next
                    </button>
                </div>
            )}
    
            {shouldRender && (
                <div className="text-center text-gray-600">
                    Showing {startIndex + 1}-{Math.min(endIndex, orderedCruises.length)} of {orderedCruises.length} results
                </div>
            )}
        </div>
    )
}