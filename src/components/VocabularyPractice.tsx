// src/components/VocabularyPractice.tsx
import React, { useState } from "react";
import { vocabularyWords } from "../constants";
import VocabularyCard from "./VocabularyCard";
import PaginationDots from "./PaginationDots";
import PaginationControls from "./PaginationControls";

const VocabularyPractice: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = vocabularyWords.length;

  const goToPage = (page: number) => {
    setCurrentIndex(page);
  };

  const prevCard = () => {
    setCurrentIndex((i) => (i === 0 ? total - 1 : i - 1));
  };

  const nextCard = () => {
    setCurrentIndex((i) => (i === total - 1 ? 0 : i + 1));
  };

  return (
    <div className="min-h-screen w-full bg-black flex flex-col items-center justify-center p-6 text-white/90 select-none">
      <div className="border border-white/50 w-full max-w-xl md:max-w-2xl px-8 py-6 rounded-lg bg-white/10">
        <h1 className="text-2xl mb-4 md:mb-6 font-semibold tracking-tight text-center">
          Vocabulary Practice
        </h1>
        <div className="h-px w-[80%] bg-white/50 mb-4 md:mb-8 mx-auto" />

        {/* Pagination Dots above the card */}
        <PaginationDots
          currentPage={currentIndex}
          totalPages={total}
          onPageChange={goToPage}
        />

        {/* Vocabulary Card */}
        <VocabularyCard
          word={vocabularyWords[currentIndex].word}
          explanation={vocabularyWords[currentIndex].explanation}
          example={vocabularyWords[currentIndex].example}
          example1={vocabularyWords[currentIndex].example1}
        />

        {/* Navigation Controls below the card */}
        <PaginationControls
          currentPage={currentIndex}
          totalPages={total}
          onPrevious={prevCard}
          onNext={nextCard}
        />
      </div>
    </div>
  );
};

export default VocabularyPractice;
