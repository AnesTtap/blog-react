import { FC } from 'react';
import { LIMIT_POSTS } from '../../constants/limit';
import './Pagination.scss';

interface IPagination {
    countElement: number;
    page: number;
    handlePageClick:(pageNumber: number) => void;
    handlePrevClick:() => void;
    handleNextClick: () => void;
}

export const Pagination: FC<IPagination> = ({page,countElement, handleNextClick,handlePageClick,handlePrevClick}) => {

    const totalPages = Math.ceil(countElement / LIMIT_POSTS);
    const pageNumbers= [];
    for(let i = 1; 1 <= totalPages; i++) {
        pageNumbers.push(i);
    }

    const visiblePages = pageNumbers.filter((pageNumber) => (
        pageNumber === 1 ||
        pageNumber === page ||
        pageNumber === totalPages ||
        Math.abs(pageNumber - page ) <= 2
    ));

    const prevDisabled = page === 1;
    const nextDisabled = page === totalPages;
    return (
        <nav className='pagination'>
            <button className='pagination__btn' onClick={handlePrevClick} disabled={prevDisabled}>
                prev
            </button>

            <div className='pagination__item'>
                {visiblePages.map((pageNumber) => (
                    <button className={`pagination__btn ${pageNumber === page ? 'active' : ''}`} key={pageNumber}
                    onClick={() => handlePageClick(pageNumber)}>
                        {pageNumber}
                    </button>
                ))}
            </div>
            <button className='pagination__btn' onClick={handleNextClick} disabled={nextDisabled}>
                next
            </button>
             
        </nav>
    )
};
