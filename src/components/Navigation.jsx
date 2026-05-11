import React from "react";
import {
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  CheckCircle2,
} from "lucide-react";

const Navigation = ({
  currentIdx,
  totalQuestions,
  setCurrentIdx,
  userAnswers,
  setUserAnswers,
  setShowResults,
  isDarkMode,
}) => {
  // Previous Question
  const handlePrev = () => {
    if (currentIdx > 0) {
      setCurrentIdx((prev) => prev - 1);
    }
  };

  // Next Question
  const handleNext = () => {
    if (currentIdx < totalQuestions - 1) {
      setCurrentIdx((prev) => prev + 1);
    }
  };

  // Clear Current Answer
  const handleClear = () => {
    setUserAnswers({
      ...userAnswers,
      [currentIdx]: null,
    });
  };

  // Submit Quiz
  const handleSubmit = () => {
    const confirmSubmit = window.confirm(
      "Are you sure you want to submit the quiz?"
    );

    if (confirmSubmit) {
      setShowResults(true);
    }
  };

  return (
    <nav
      className={`
        fixed bottom-0 left-0 right-0 z-50
        border-t backdrop-blur-xl
        px-4 py-4
        transition-all duration-300
        ${
          isDarkMode
            ? "bg-neutral-900/95 border-neutral-700"
            : "bg-white/95 border-gray-200"
        }
      `}
    >
      <div className="max-w-5xl mx-auto">
        
        {/* Desktop Layout */}
        <div className="hidden md:flex items-center gap-4">
          
          {/* Previous */}
          <button
            disabled={currentIdx === 0}
            onClick={handlePrev}
            className={`
              flex-1 py-4 rounded-2xl
              flex items-center justify-center gap-2
              font-semibold transition-all duration-300
              shadow-md active:scale-95
              ${
                currentIdx === 0
                  ? "opacity-50 cursor-not-allowed bg-gray-300 text-gray-600"
                  : isDarkMode
                  ? "bg-neutral-800 hover:bg-neutral-700 text-white"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-800"
              }
            `}
          >
            <ChevronLeft size={20} />
            Previous
          </button>

          {/* Clear */}
          <button
            onClick={handleClear}
            className={`
              px-8 py-4 rounded-2xl
              flex items-center justify-center gap-2
              font-semibold transition-all duration-300
              shadow-md active:scale-95
              ${
                isDarkMode
                  ? "bg-red-900/30 hover:bg-red-900/50 text-red-300"
                  : "bg-red-50 hover:bg-red-100 text-red-600"
              }
            `}
          >
            <RotateCcw size={18} />
            Clear
          </button>

          {/* Last Question => Submit */}
          {currentIdx === totalQuestions - 1 ? (
            <button
              onClick={handleSubmit}
              className="
                flex-[1.3]
                py-4 rounded-2xl
                bg-green-600 hover:bg-green-700
                text-white font-bold
                flex items-center justify-center gap-2
                shadow-xl shadow-green-500/20
                transition-all duration-300
                active:scale-95
              "
            >
              <CheckCircle2 size={20} />
              Submit Quiz
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="
                flex-1 py-4 rounded-2xl
                bg-blue-600 hover:bg-blue-700
                text-white font-semibold
                flex items-center justify-center gap-2
                shadow-xl shadow-blue-500/20
                transition-all duration-300
                active:scale-95
              "
            >
              Next
              <ChevronRight size={20} />
            </button>
          )}
        </div>

        {/* Mobile Layout */}
        <div className="grid grid-cols-1 gap-3 md:hidden">
          
          {/* Previous */}
          <button
            disabled={currentIdx === 0}
            onClick={handlePrev}
            className={`
              w-full py-4 rounded-2xl
              flex items-center justify-center gap-2
              font-semibold transition-all duration-300
              active:scale-95
              ${
                currentIdx === 0
                  ? "opacity-50 cursor-not-allowed bg-gray-300 text-gray-600"
                  : isDarkMode
                  ? "bg-neutral-800 text-white"
                  : "bg-gray-100 text-gray-800"
              }
            `}
          >
            <ChevronLeft size={20} />
            Previous
          </button>

          {/* Middle Row */}
          <div className="grid grid-cols-2 gap-3">
            
            {/* Clear */}
            <button
              onClick={handleClear}
              className={`
                py-4 rounded-2xl
                flex items-center justify-center gap-2
                font-semibold transition-all duration-300
                active:scale-95
                ${
                  isDarkMode
                    ? "bg-red-900/30 text-red-300"
                    : "bg-red-50 text-red-600"
                }
              `}
            >
              <RotateCcw size={18} />
              Clear
            </button>

            {/* Next or Submit */}
            {currentIdx === totalQuestions - 1 ? (
              <button
                onClick={handleSubmit}
                className="
                  py-4 rounded-2xl
                  bg-green-600 text-white font-bold
                  flex items-center justify-center gap-2
                  active:scale-95
                "
              >
                <CheckCircle2 size={18} />
                Submit
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="
                  py-4 rounded-2xl
                  bg-blue-600 text-white font-semibold
                  flex items-center justify-center gap-2
                  active:scale-95
                "
              >
                Next
                <ChevronRight size={18} />
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;