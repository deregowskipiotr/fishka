// src/components/PaginationControls.tsx
import React from "react";
import { AiFillBackward, AiFillForward } from "react-icons/ai";


interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
  onPrevious: () => void;
  onNext: () => void;
}

const PaginationControls: React.FC<PaginationControlsProps> = ({
  currentPage,
  totalPages,
  onPrevious,
  onNext,
}) => (
  <div
    className="flex items-center w-full justify-between mt-6 select-none"
    aria-label="Pagination controls"
  >
    <button
      type="button"
      onClick={onPrevious}
      disabled={currentPage === 0}
      className="px-5 py-2 hover:bg-white/5 border border-white/20 text-white transition-colors duration-500 ease-in-out rounded-md cursor-pointer"
      aria-label="Previous card"
      title="Previous card"
    >
      <AiFillBackward />
    </button>

    <div className="text-white text-lg">
      Card {currentPage + 1} of {totalPages}
    </div>

    <button
      type="button"
      onClick={onNext}
      disabled={currentPage === totalPages - 1}
      className="px-5 py-2 hover:bg-white/5 border border-white/20 text-white transition-colors duration-500 ease-in-out rounded-md shadow-md cursor-pointer"
      aria-label="Next card"
      title="Next card"
    >
      <AiFillForward />
    </button>
  </div>
);

export default PaginationControls;
