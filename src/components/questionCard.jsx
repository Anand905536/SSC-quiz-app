import React from "react";
import { Bookmark } from "lucide-react";
import { motion } from "framer-motion";

const QuestionCard = ({
   question,
  currentIdx,
  totalQuestions,
  userAnswers,
  handleAnswer,
  bookmarks,
  toggleBookmark,
  isDarkMode,
  showResults,
  
}) => {
  return (
    <motion.div
      key={currentIdx}
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`
        rounded-3xl p-6 md:p-8
        shadow-2xl border transition-all duration-300
        ${
          isDarkMode
            ? "bg-neutral-900 border-neutral-700"
            : "bg-white border-gray-100"
        }
      `}
    >
      {/* Top Header */}
      <div className="flex justify-between items-start gap-4 mb-6">
        
        {/* Question Number */}
        <div>
          <span className="text-xs uppercase tracking-widest font-bold text-blue-500">
            Question {currentIdx + 1} of {totalQuestions}
          </span>
        </div>

        {/* Bookmark */}
        <button
          onClick={toggleBookmark}
          className={`
            flex items-center gap-2
            px-4 py-2 rounded-xl border
            transition-all duration-300
            hover:scale-105 active:scale-95
            ${
              bookmarks.has(currentIdx)
                ? "bg-yellow-500 border-yellow-500 text-white"
                : isDarkMode
                ? "border-neutral-700 bg-neutral-800 text-white"
                : "border-gray-300 bg-gray-50 text-gray-700"
            }
          `}
        >
          <Bookmark
            size={18}
            fill={bookmarks.has(currentIdx) ? "currentColor" : "none"}
          />
          <span className="text-sm font-medium">Bookmark</span>
        </button>
      </div>

      {/* Question */}
      <div
        className={`
          text-lg md:text-xl leading-relaxed font-medium mb-8
          ${isDarkMode ? "text-white" : "text-gray-800"}
        `}
        dangerouslySetInnerHTML={{
          __html: question.question,
        }}
      />

      {/* Options */}
      <div className="space-y-4">
        {[
          question.option1,
          question.option2,
          question.option3,
          question.option4,
        ].map((option, i) => {
          const isSelected = userAnswers[currentIdx] === i;

          return (
            <motion.label
              whileTap={{ scale: 0.98 }}
              key={i}
              className={`
                flex items-start gap-4
                p-5 rounded-2xl border-2
                cursor-pointer transition-all duration-300
                ${
                  isSelected
                    ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                    : isDarkMode
                    ? "border-neutral-700 bg-neutral-800 hover:border-blue-500"
                    : "border-gray-200 bg-gray-50 hover:border-blue-400"
                }
              `}
            >
              {/* Radio */}
              <input
                type="radio"
                name={`question-${currentIdx}`}
                checked={isSelected}
                onChange={() => handleAnswer(i)}
                className="mt-1 w-5 h-5 accent-blue-600 cursor-pointer"
              />

              {/* Option HTML */}
              <div
                className={`
                  flex-1 text-base leading-relaxed
                  ${
                    isDarkMode ? "text-neutral-100" : "text-gray-800"
                  }
                `}
                dangerouslySetInnerHTML={{
                  __html: option,
                }}
              />
            </motion.label>
          );
        })}
      </div>

      {/* Solution Section */}
      {showResults && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`
            mt-8 p-5 rounded-2xl border-l-4
            ${
              isDarkMode
                ? "bg-blue-900/20 border-blue-400"
                : "bg-blue-50 border-blue-500"
            }
          `}
        >
          <h3 className="font-bold text-blue-500 mb-3 text-sm uppercase tracking-wider">
            Solution
          </h3>

          <div
            className={`leading-relaxed ${
              isDarkMode ? "text-neutral-200" : "text-gray-700"
            }`}
            dangerouslySetInnerHTML={{
              __html: question.solution_text,
            }}
          />
        </motion.div>
      )}
    </motion.div>
  );
};

export default QuestionCard;