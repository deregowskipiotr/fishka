// src/components/VocabularyCard.tsx
"use client"
import React from "react";
import { motion } from "framer-motion";
import SpinningArrows from "./SpinningArrow";

interface VocabularyCardProps {
  word: string;
  explanation: string;
  example: string;
  example1: string;
}

const VocabularyCard: React.FC<VocabularyCardProps> = ({
  word,
  explanation,
  example,
  example1,
}) => {
  const [isFlipped, setIsFlipped] = React.useState(false);

  const toggleFlip = () => setIsFlipped((f) => !f);

  return (
    <div className="relative w-full h-80 md:h-60 perspective " onClick={toggleFlip}>
      <motion.div
        className="w-full h-full shadow-xl"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 1 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front Side */}
        <div className="absolute w-full h-full backface-hidden flex flex-col justify-center items-center p-8 bg-black/40 border border-white/20 rounded-lg">
          <h2 className=" text-xl md:text-3xl font-semibold italic tracking-wide uppercase text-indigo-200 mb-6 md:mb-4 h-1/5 leading-tight md:leading-none">
            {word}
          </h2>
          <p className="text-white text-center mb-6 h-3/5 leading-tight md:leading-normal">{explanation}</p>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              toggleFlip();
            }}
            className="flex h-1/5 items-center space-x-2 px-4 py-2 rounded text-white hover:text-white/50 transition-colors duration-500 ease-in-out cursor-pointer"
            aria-label="Press to flip card"
          >
            <SpinningArrows />

            <span>Press to flip</span>
          </button>
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-white/20 border border-white/10 flex flex-col p-8 text-white text-center rounded-lg">
          <div className="flex flex-col items-start justify-center h-4/5 gap-4 leading-tight md:leading-normal">
            <p className="-mt-4 text-start">
              <span className="text-indigo-200 font-bold pr-2">Level B1/B2:</span>
              {example}
            </p>
            <p className="text-start">
              <span className="text-indigo-200 font-bold">Level C1:</span> {example1}
            </p>
          </div>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              toggleFlip();
            }}
            className="flex h-1/5 items-center justify-center space-x-2 px-4 py-2 rounded text-white hover:text-white/50 transition-colors duration-500 ease-in-out cursor-pointer"
            aria-label="Press to flip card back"
          >
            <SpinningArrows />
            <span>Press to flip back</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default VocabularyCard;
