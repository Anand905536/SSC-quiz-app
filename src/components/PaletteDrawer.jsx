import React, { useMemo, useState } from "react";
import { X, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const PaletteDrawer = ({
  isPaletteOpen,
  setIsPaletteOpen,
  QUESTIONS_DATA,
  currentIdx,
  setCurrentIdx,
  userAnswers,
  bookmarks,
  isDarkMode,
}) => {
  const [search, setSearch] = useState("");

  // Stats
  const answeredCount = useMemo(() => {
    return Object.values(userAnswers).filter(
      (ans) => ans !== null && ans !== undefined
    ).length;
  }, [userAnswers]);

  const bookmarkedCount = bookmarks.size;

  const unansweredCount = QUESTIONS_DATA.length - answeredCount;

  // Filter Questions
  const filteredQuestions = QUESTIONS_DATA.filter((_, idx) =>
    (idx + 1).toString().includes(search)
  );

  return (
    <AnimatePresence>
      {isPaletteOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsPaletteOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25 }}
            className={`
              fixed top-0 right-0 h-screen w-full max-w-md
              z-[60] shadow-2xl
              flex flex-col
              ${
                isDarkMode
                  ? "bg-neutral-900 text-white"
                  : "bg-white text-gray-900"
              }
            `}
          >
            {/* Header */}
            <div
              className={`
                p-5 border-b
                flex items-center justify-between
                ${
                  isDarkMode
                    ? "border-neutral-700"
                    : "border-gray-200"
                }
              `}
            >
              <div>
                <h2 className="text-xl font-bold">
                  Question Palette
                </h2>

                <p
                  className={`text-sm mt-1 ${
                    isDarkMode
                      ? "text-neutral-400"
                      : "text-gray-500"
                  }`}
                >
                  Jump between questions
                </p>
              </div>

              <button
                onClick={() => setIsPaletteOpen(false)}
                className={`
                  w-10 h-10 rounded-xl
                  flex items-center justify-center
                  transition-all duration-300
                  ${
                    isDarkMode
                      ? "bg-neutral-800 hover:bg-neutral-700"
                      : "bg-gray-100 hover:bg-gray-200"
                  }
                `}
              >
                <X size={20} />
              </button>
            </div>

            {/* Stats */}
            <div
              className={`
                grid grid-cols-3 gap-3 p-5 border-b
                ${
                  isDarkMode
                    ? "border-neutral-700"
                    : "border-gray-200"
                }
              `}
            >
              {/* Answered */}
              <div
                className={`
                  rounded-2xl p-4 text-center
                  ${
                    isDarkMode
                      ? "bg-green-900/20"
                      : "bg-green-50"
                  }
                `}
              >
                <div className="text-2xl font-bold text-green-500">
                  {answeredCount}
                </div>

                <div className="text-sm opacity-70">
                  Answered
                </div>
              </div>

              {/* Unanswered */}
              <div
                className={`
                  rounded-2xl p-4 text-center
                  ${
                    isDarkMode
                      ? "bg-neutral-800"
                      : "bg-gray-100"
                  }
                `}
              >
                <div className="text-2xl font-bold">
                  {unansweredCount}
                </div>

                <div className="text-sm opacity-70">
                  Left
                </div>
              </div>

              {/* Bookmarked */}
              <div
                className={`
                  rounded-2xl p-4 text-center
                  ${
                    isDarkMode
                      ? "bg-yellow-900/20"
                      : "bg-yellow-50"
                  }
                `}
              >
                <div className="text-2xl font-bold text-yellow-500">
                  {bookmarkedCount}
                </div>

                <div className="text-sm opacity-70">
                  Saved
                </div>
              </div>
            </div>

            {/* Search */}
            <div className="p-5">
              <div className="relative">
                <Search
                  size={18}
                  className={`
                    absolute left-4 top-1/2 -translate-y-1/2
                    ${
                      isDarkMode
                        ? "text-neutral-500"
                        : "text-gray-400"
                    }
                  `}
                />

                <input
                  type="text"
                  placeholder="Jump to question..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className={`
                    w-full pl-11 pr-4 py-3 rounded-2xl
                    border outline-none transition-all
                    ${
                      isDarkMode
                        ? "bg-neutral-800 border-neutral-700 focus:border-blue-500"
                        : "bg-gray-50 border-gray-200 focus:border-blue-500"
                    }
                  `}
                />
              </div>
            </div>

            {/* Grid */}
            <div className="flex-1 overflow-y-auto px-5 pb-5">
              <div className="grid grid-cols-5 gap-3">
                {filteredQuestions.map((_, filteredIndex) => {
                  const actualIndex =
                    QUESTIONS_DATA.findIndex(
                      (q) => q === filteredQuestions[filteredIndex]
                    );

                  const isAnswered =
                    userAnswers[actualIndex] !== undefined &&
                    userAnswers[actualIndex] !== null;

                  const isCurrent = currentIdx === actualIndex;

                  const isBookmarked =
                    bookmarks.has(actualIndex);

                  return (
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      key={actualIndex}
                      onClick={() => {
                        setCurrentIdx(actualIndex);
                        setIsPaletteOpen(false);
                      }}
                      className={`
                        aspect-square rounded-2xl
                        font-bold text-sm
                        transition-all duration-300
                        relative
                        ${
                          isCurrent
                            ? "ring-4 ring-blue-500 scale-105"
                            : ""
                        }
                        ${
                          isAnswered
                            ? "bg-green-500 text-white"
                            : isDarkMode
                            ? "bg-neutral-800 hover:bg-neutral-700"
                            : "bg-gray-100 hover:bg-gray-200"
                        }
                      `}
                    >
                      {actualIndex + 1}

                      {/* Bookmark Dot */}
                      {isBookmarked && (
                        <span className="absolute -top-1 -right-1 text-xs">
                          🔖
                        </span>
                      )}
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Footer Legend */}
            <div
              className={`
                border-t p-5
                ${
                  isDarkMode
                    ? "border-neutral-700"
                    : "border-gray-200"
                }
              `}
            >
              <div className="grid grid-cols-2 gap-3 text-sm">
                
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-green-500" />
                  <span>Answered</span>
                </div>

                <div className="flex items-center gap-2">
                  <div
                    className={`w-4 h-4 rounded ${
                      isDarkMode
                        ? "bg-neutral-700"
                        : "bg-gray-300"
                    }`}
                  />
                  <span>Unanswered</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded border-2 border-blue-500" />
                  <span>Current</span>
                </div>

                <div className="flex items-center gap-2">
                  <span>🔖</span>
                  <span>Bookmarked</span>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default PaletteDrawer;