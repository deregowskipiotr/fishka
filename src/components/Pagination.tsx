// src/components/Pagination.tsx
import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPrevious: () => void;
  onNext: () => void;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPrevious,
  onNext,
  //onPageChange,
}) => {
  return (
    <nav
      className="flex items-center space-x-6 mt-6 select-none"
      aria-label="Pagination navigation"
    >
      {/* Previous Button */}
      <button
        type="button"
        onClick={onPrevious}
        disabled={currentPage === 1}
        className="px-5 py-2"
        aria-label="Previous page"
        title="Previous page"
      >
        Previous
      </button>

      {/* Page Count */}
      <div className="text-white font-semibold text-lg">
        {currentPage} / {totalPages}
      </div>

      {/* Dot Buttons */}
      {/*<div className="flex space-x-4 ">
        {[...Array(totalPages)].map((_, index) => {
          const page = index + 1;
          const isActive = page === currentPage;
          return (
            <button
              key={page}
              type="button"
              onClick={() => onPageChange(page)}
              className={`w-5 h-5 rounded-full transition duration-300 ${
                isActive
                  ? "bg-black shadow-lg"
                  : "bg-gray-500 hover:bg-gray-700"
              } focus:outline-2 focus:outline-indigo-400`}
              aria-label={`Go to page ${page}`}
              title={`Go to page ${page}`}
            />
          );
        })}
      </div> */}

      {/* Next Button */}
      <button
        type="button"
        onClick={onNext}
        disabled={currentPage === totalPages}
        className="px-5 py-2"
        aria-label="Next page"
        title="Next page"
      >
        Next
      </button>
    </nav>
  );
};

export default Pagination;
