// src/components/PaginationDots.tsx
import React from "react";

interface PaginationDotsProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const PaginationDots: React.FC<PaginationDotsProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => (
  <div className="flex justify-center gap-6 md:gap-2 mb-6">
    {[...Array(totalPages)].map((_, idx) => {
      const page = idx;
      const isActive = page === currentPage;
      return (
        <button
          type="button"
          key={page}
          onClick={() => onPageChange(page)}
          className={`w-14 h-1 rounded-full transition duration-300 easy-in-out cursor-pointer ${
            isActive ? "bg-indigo-200 shadow-lg" : "bg-white/20"
          } `}
          aria-label={`Go to card ${page + 1}`}
          title={`Go to card ${page + 1}`}
        />
      );
    })}
  </div>
);

export default PaginationDots;
