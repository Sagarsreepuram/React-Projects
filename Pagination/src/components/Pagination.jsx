import React, { useState } from 'react'

const Pagination = () => {
    
    const items = Array.from({ length: 50}, (_, i)=> `Item ${i + 1}`);
    const itemsPerPage = 5;

    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(items.length / itemsPerPage);

    const startIndex = (currentPage -1) * itemsPerPage;
    const currentItems = items.slice(startIndex, startIndex + itemsPerPage);

    const goToPage = (Page) =>{
        if (Page < 1 || Page > totalPages) return;
        setCurrentPage(Page);
    }

  return (
    <div className='max-w-md mx-auto p-6'>
        <h2 className='text-xl font-semibold mb-4'>Pagination Example</h2>

        <ul className='space-y-2'>
          {currentItems.map((item)=>(
            <li key={item} className='p-3 bg-gray-100 rounded-md'>
                    {item}
            </li>
          ))}
        </ul>
        
        <div className='flex justify-center items-center gap-2 mt-6'>
            <button
            onClick={()=> goToPage(currentPage -1)}
            disabled={currentPage === 1}
            className='px-3 py-1 rounded bg-gray-200 disabled:opcaity-50'>
                    prev
            </button>
          {Array.from({length: totalPages}, (_, i)=> i+1).map((page)=>(
            <button 
            key={page}
            onClick={()=> goToPage(page)}
            className={`px-3 py-1 rounded ${
                currentPage === page ? "bg-indigo-600 text-white" : "bg-gray-100"
            }`}>
                {page}
            </button>
          ))}

            <button
            onClick={()=> goToPage(currentPage +  1)}
            disabled={currentPage === totalPages}
            className='px-3 py-1 rounded bg-gray-200 disabled:opacity-50'>
                Next
            </button>
        </div>
    </div>
  )

}
export default Pagination
