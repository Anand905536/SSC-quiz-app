import React from "react";
import { motion } from "framer-motion";

const ProgressBar = ({
  currentIdx,
  totalQuestions,
  attemptedCount,
  isDarkMode,
}) => {
  const progressPercentage =
    ((currentIdx + 1) / totalQuestions) * 100;

  return (
    <div className="w-full mb-8">
      
      {/* Top Stats */}
      <div className="flex items-center justify-between mb-3">
        
        {/* Progress */}
        <div>
          <p
            className={`text-sm font-semibold ${
              isDarkMode
                ? "text-neutral-300"
                : "text-gray-700"
            }`}
          >
            Progress
          </p>

          <p
            className={`text-xs mt-1 ${
              isDarkMode
                ? "text-neutral-500"
                : "text-gray-500"
            }`}
          >
            Question {currentIdx + 1} of {totalQuestions}
          </p>
        </div>

        {/* Attempted */}
        <div className="text-right">
          <p
            className={`text-sm font-semibold ${
              isDarkMode
                ? "text-neutral-300"
                : "text-gray-700"
            }`}
          >
            Attempted
          </p>

          <p className="text-xs mt-1 text-blue-500 font-bold">
            {attemptedCount} / {totalQuestions}
          </p>
        </div>
      </div>

      {/* Progress Track */}
      <div
        className={`
          w-full h-4 rounded-full overflow-hidden
          ${
            isDarkMode
              ? "bg-neutral-800"
              : "bg-gray-200"
          }
        `}
      >
        {/* Animated Progress */}
        <motion.div
          initial={{ width: 0 }}
          animate={{
            width: `${progressPercentage}%`,
          }}
          transition={{
            duration: 0.4,
            ease: "easeInOut",
          }}
          className="
            h-full rounded-full
            bg-gradient-to-r
            from-blue-500
            via-cyan-500
            to-green-500
            shadow-lg
          "
        />
      </div>

      {/* Bottom Labels */}
      <div className="flex justify-between mt-2">
        
        <span
          className={`text-xs ${
            isDarkMode
              ? "text-neutral-500"
              : "text-gray-500"
          }`}
        >
          Start
        </span>

        <span className="text-xs font-bold text-blue-500">
          {Math.round(progressPercentage)}%
        </span>

        <span
          className={`text-xs ${
            isDarkMode
              ? "text-neutral-500"
              : "text-gray-500"
          }`}
        >
          Finish
        </span>
      </div>
    </div>
  );
};

export default ProgressBar;
