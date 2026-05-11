import React, { useMemo } from "react";
import {
  RotateCcw,
  Download,
  Printer,
  CheckCircle2,
  XCircle,
  CircleDashed,
} from "lucide-react";
import { motion } from "framer-motion";

const ResultScreen = ({
  QUESTIONS_DATA,
  userAnswers,
  setShowResults,
  setCurrentIdx,
  setUserAnswers,
  setBookmarks,
  isDarkMode,
}) => {
  // Score Calculations
  const stats = useMemo(() => {
    let correct = 0;
    let wrong = 0;
    let unattempted = 0;

    QUESTIONS_DATA.forEach((q, idx) => {
      const userAns = userAnswers[idx];

      if (userAns === undefined || userAns === null) {
        unattempted++;
      } else if (userAns === q.answer) {
        correct++;
      } else {
        wrong++;
      }
    });

    return {
      correct,
      wrong,
      unattempted,
      total: QUESTIONS_DATA.length,
      score: correct,
      percentage: Math.round(
        (correct / QUESTIONS_DATA.length) * 100
      ),
    };
  }, [QUESTIONS_DATA, userAnswers]);

  // Restart Quiz
  const restartQuiz = () => {
    const confirmRestart = window.confirm(
      "Restart the quiz?"
    );

    if (!confirmRestart) return;

    setUserAnswers({});
    setBookmarks(new Set());
    setCurrentIdx(0);
    setShowResults(false);

    localStorage.removeItem("quiz-state");
  };

  // Print Result
  const printResult = () => {
    window.print();
  };

  // Download Result
  const downloadResult = () => {
    const text = `
SSC QUIZ RESULT

Score: ${stats.score}/${stats.total}
Percentage: ${stats.percentage}%

Correct: ${stats.correct}
Wrong: ${stats.wrong}
Unattempted: ${stats.unattempted}
    `;

    const blob = new Blob([text], {
      type: "text/plain",
    });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;
    a.download = "quiz-result.txt";

    a.click();

    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-6 pb-32">
      
      {/* Score Card */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        className="
          rounded-3xl overflow-hidden
          bg-gradient-to-br from-blue-600 to-green-500
          text-white shadow-2xl
          p-8 md:p-12 text-center
        "
      >
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
          Quiz Completed 🎉
        </h1>

        <div className="text-6xl md:text-7xl font-black mb-4">
          {stats.score}/{stats.total}
        </div>

        <p className="text-xl md:text-2xl opacity-90">
          You scored {stats.percentage}%
        </p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-8">
        
        {/* Correct */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`
            rounded-3xl p-6 text-center border shadow-lg
            ${
              isDarkMode
                ? "bg-neutral-900 border-neutral-700"
                : "bg-white border-gray-100"
            }
          `}
        >
          <CheckCircle2
            size={42}
            className="mx-auto text-green-500 mb-4"
          />

          <div className="text-4xl font-black text-green-500">
            {stats.correct}
          </div>

          <p className="mt-2 opacity-70 font-medium">
            Correct
          </p>
        </motion.div>

        {/* Wrong */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className={`
            rounded-3xl p-6 text-center border shadow-lg
            ${
              isDarkMode
                ? "bg-neutral-900 border-neutral-700"
                : "bg-white border-gray-100"
            }
          `}
        >
          <XCircle
            size={42}
            className="mx-auto text-red-500 mb-4"
          />

          <div className="text-4xl font-black text-red-500">
            {stats.wrong}
          </div>

          <p className="mt-2 opacity-70 font-medium">
            Wrong
          </p>
        </motion.div>

        {/* Unattempted */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className={`
            rounded-3xl p-6 text-center border shadow-lg
            ${
              isDarkMode
                ? "bg-neutral-900 border-neutral-700"
                : "bg-white border-gray-100"
            }
          `}
        >
          <CircleDashed
            size={42}
            className="mx-auto text-yellow-500 mb-4"
          />

          <div className="text-4xl font-black text-yellow-500">
            {stats.unattempted}
          </div>

          <p className="mt-2 opacity-70 font-medium">
            Unattempted
          </p>
        </motion.div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4 justify-center mt-10">
        
        {/* Restart */}
        <button
          onClick={restartQuiz}
          className="
            px-6 py-4 rounded-2xl
            bg-red-600 hover:bg-red-700
            text-white font-bold
            flex items-center gap-2
            shadow-xl transition-all
            active:scale-95
          "
        >
          <RotateCcw size={20} />
          Restart Quiz
        </button>

        {/* Download */}
        <button
          onClick={downloadResult}
          className="
            px-6 py-4 rounded-2xl
            bg-blue-600 hover:bg-blue-700
            text-white font-bold
            flex items-center gap-2
            shadow-xl transition-all
            active:scale-95
          "
        >
          <Download size={20} />
          Download Result
        </button>

        {/* Print */}
        <button
          onClick={printResult}
          className="
            px-6 py-4 rounded-2xl
            bg-neutral-700 hover:bg-neutral-800
            text-white font-bold
            flex items-center gap-2
            shadow-xl transition-all
            active:scale-95
          "
        >
          <Printer size={20} />
          Print
        </button>
      </div>

      {/* Review Section */}
      <div className="mt-14 space-y-6">
        <h2 className="text-3xl font-extrabold">
          Answer Review
        </h2>

        {QUESTIONS_DATA.map((q, idx) => {
          const userAns = userAnswers[idx];

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={`
                rounded-3xl border p-6 shadow-lg
                ${
                  isDarkMode
                    ? "bg-neutral-900 border-neutral-700"
                    : "bg-white border-gray-100"
                }
              `}
            >
              {/* Question */}
              <div
                className="text-lg font-semibold leading-relaxed mb-6"
                dangerouslySetInnerHTML={{
                  __html: q.question,
                }}
              />

              {/* Options */}
              <div className="space-y-3">
                {[q.option1, q.option2, q.option3, q.option4].map(
                  (option, i) => {
                    const isCorrect = i === q.answer;
                    const isUser = i === userAns;

                    return (
                      <div
                        key={i}
                        className={`
                          p-4 rounded-2xl border-2
                          ${
                            isCorrect
                              ? "border-green-500 bg-green-100 text-green-800"
                              : isUser
                              ? "border-red-500 bg-red-100 text-red-800"
                              : isDarkMode
                              ? "border-neutral-700 bg-neutral-800"
                              : "border-gray-200 bg-gray-50"
                          }
                        `}
                      >
                        <div
                          dangerouslySetInnerHTML={{
                            __html: option,
                          }}
                        />
                      </div>
                    );
                  }
                )}
              </div>

              {/* Solution */}
              <div
                className={`
                  mt-6 p-5 rounded-2xl border-l-4
                  ${
                    isDarkMode
                      ? "bg-blue-900/20 border-blue-400"
                      : "bg-blue-50 border-blue-500"
                  }
                `}
              >
                <h3 className="font-bold text-blue-500 mb-3">
                  Solution
                </h3>

                <div
                  dangerouslySetInnerHTML={{
                    __html: q.solution_text,
                  }}
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ResultScreen;