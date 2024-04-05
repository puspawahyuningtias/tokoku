import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange, onPrevChange, onNextChange, lengthData, limitData }) => {
    const maxVisiblePages = 3;
    const halfMaxVisiblePages = Math.floor(maxVisiblePages / 2);

    let startPage = Math.max(1, currentPage - halfMaxVisiblePages);
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage < maxVisiblePages - 1) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    const pageRange = Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);

    return (
        <div>
            <div className='flex items-center justify-between mt-[30px]'><h1 className='text-[#A098AE] text-[10px] '>Menampilkan 1-{limitData} dari {lengthData} data</h1>
                <div className='flex items-center gap-[8px]'>
                    <button onClick={onPrevChange} disabled={currentPage === 1}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><path fill="currentColor" d="M20.834 8.037L9.64 14.5c-1.43.824-1.43 2.175 0 3l11.194 6.463c1.43.826 2.598.15 2.598-1.5V9.537c0-1.65-1.17-2.326-2.598-1.5"/></svg>
                    </button>
                    {startPage > 1 && (
                        <>
                            <button className='bg-[#780000] rounded-[6px] w-[24px] h-[24px] bg-opacity-10 flex items-center justify-center' onClick={() => onPageChange(1)}>
                                <h1 className='text-[#780000] text-[10px]'>1</h1>
                            </button>
                            {startPage > 2 && (
                                <span className='text-[#A098AE]'>...</span>
                            )}
                        </>
                    )}
                    {pageRange.map((page) => (
                        <button
                            key={page}
                            className={currentPage === page ? 'bg-[#780000] rounded-[6px] w-[24px] h-[24px] flex items-center justify-center' : 'bg-[#780000] rounded-[6px] w-[24px] h-[24px] bg-opacity-10 flex items-center justify-center'}
                            onClick={() => onPageChange(page)}
                        >
                            <h1 className={currentPage === page ? 'text-white text-[10px]' : 'text-[#780000] text-[10px]'}>{page}</h1>
                        </button>
                    ))}
                    {endPage < totalPages && (
                        <>
                            {endPage < totalPages - 1 && (
                                <span className='text-[#A098AE]'>...</span>
                            )}
                            <button className='bg-[#780000] rounded-[6px] w-[24px] h-[24px] bg-opacity-10 flex items-center justify-center' onClick={() => onPageChange(totalPages)}>
                                <h1 className='text-[#780000] text-[10px]'>{totalPages}</h1>
                            </button>
                        </>
                    )}
                    <button onClick={onNextChange} disabled={currentPage === totalPages}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><path fill="currentColor" d="M11.166 23.963L22.36 17.5c1.43-.824 1.43-2.175 0-3L11.165 8.037c-1.43-.826-2.598-.15-2.598 1.5v12.926c0 1.65 1.17 2.326 2.598 1.5z" /></svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Pagination;
