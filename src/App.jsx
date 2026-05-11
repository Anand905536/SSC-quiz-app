import React, { useState, useEffect } from "react";

import Header from "./components/Header";
import ProgressBar from "./components/progressBar";
import QuestionCard from "./components/questionCard";
import Navigation from "./components/Navigation";
import PaletteDrawer from "./components/PaletteDrawer";
import ResultScreen from "./components/ResultScreen";

import QUESTIONS_DATA from "./data/questions";

function App() {
  // STATES
  const [currentIdx, setCurrentIdx] = useState(0);

  const [userAnswers, setUserAnswers] = useState({});

  const [bookmarks, setBookmarks] = useState(new Set());

  const [isDarkMode, setIsDarkMode] = useState(false);

  const [isPaletteOpen, setIsPaletteOpen] = useState(false);

  const [showResults, setShowResults] = useState(false);

  const [timeLeft, setTimeLeft] = useState(1200);

  // TIMER
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // DARK MODE BODY CLASS
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  // LOCAL STORAGE LOAD
  useEffect(() => {
  const saved = localStorage.getItem("quiz-state");

  if (saved) {
    const parsed = JSON.parse(saved);

    setCurrentIdx(parsed.currentIdx ?? 0);

    setUserAnswers(parsed.userAnswers ?? {});

    setBookmarks(new Set(parsed.bookmarks ?? []));

    setIsDarkMode(parsed.isDarkMode ?? false);

    setTimeLeft(parsed.timeLeft ?? 1200);
  }
}, []);

  // LOCAL STORAGE SAVE
  useEffect(() => {
    localStorage.setItem(
      "quiz-state",
      JSON.stringify({
        currentIdx,
        userAnswers,
        bookmarks: [...bookmarks],
        isDarkMode,
        timeLeft,
      })
    );
  }, [
    currentIdx,
    userAnswers,
    bookmarks,
    isDarkMode,
    timeLeft,
  ]);

  // HANDLE ANSWER
  const handleAnswer = (optionIdx) => {
    setUserAnswers({
      ...userAnswers,
      [currentIdx]: optionIdx,
    });
  };

  // TOGGLE BOOKMARK
  const toggleBookmark = () => {
    const newBookmarks = new Set(bookmarks);

    if (newBookmarks.has(currentIdx)) {
      newBookmarks.delete(currentIdx);
    } else {
      newBookmarks.add(currentIdx);
    }

    setBookmarks(newBookmarks);
  };

  // ATTEMPTED COUNT
  const attemptedCount = Object.values(userAnswers).filter(
    (ans) => ans !== null && ans !== undefined
  ).length;

  return (
    <div
      className={`
        min-h-screen transition-all duration-300
        ${isDarkMode
          ? "bg-neutral-950 text-white"
          : "bg-gray-100 text-gray-900"
        }
      `}
    >
      {/* HEADER */}
      <Header
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        timeLeft={timeLeft}
      />

      {/* RESULT SCREEN */}
      {showResults ? (
        <ResultScreen
          QUESTIONS_DATA={QUESTIONS_DATA}
          userAnswers={userAnswers}
          setShowResults={setShowResults}
          setCurrentIdx={setCurrentIdx}
          setUserAnswers={setUserAnswers}
          setBookmarks={setBookmarks}
          isDarkMode={isDarkMode}
        />
      ) : (
        <>
          {/* MAIN CONTENT */}
          <main className="max-w-5xl mx-auto px-4 py-6 pb-36">

            {/* PROGRESS */}
            <ProgressBar
              currentIdx={currentIdx}
              totalQuestions={QUESTIONS_DATA.length}
              attemptedCount={attemptedCount}
              isDarkMode={isDarkMode}
            />

            {/* QUESTION CARD */}
            <QuestionCard
              question={QUESTIONS_DATA[currentIdx]}
              currentIdx={currentIdx}
              totalQuestions={QUESTIONS_DATA.length}
              userAnswers={userAnswers}
              handleAnswer={handleAnswer}
              bookmarks={bookmarks}
              toggleBookmark={toggleBookmark}
              isDarkMode={isDarkMode}
              showResults={showResults}
            />
          </main>

          {/* NAVIGATION */}
          <Navigation
            currentIdx={currentIdx}
            totalQuestions={QUESTIONS_DATA.length}
            setCurrentIdx={setCurrentIdx}
            userAnswers={userAnswers}
            setUserAnswers={setUserAnswers}
            setShowResults={setShowResults}
            isDarkMode={isDarkMode}
          />

          {/* FLOATING PALETTE BUTTON */}
          <button
            onClick={() => setIsPaletteOpen(true)}
            className="
              fixed bottom-28 right-6 z-40
              w-16 h-16 rounded-full
              bg-blue-600 hover:bg-blue-700
              text-white text-2xl
              shadow-2xl
              flex items-center justify-center
              transition-all duration-300
              active:scale-95
            "
          >
            📋

            {/* Badge */}
            <span
              className="
                absolute -top-1 -right-1
                w-7 h-7 rounded-full
                bg-green-500 text-white
                text-xs font-bold
                flex items-center justify-center
                border-2 border-white
              "
            >
              {attemptedCount}
            </span>
          </button>

          {/* PALETTE DRAWER */}
          <PaletteDrawer
            isPaletteOpen={isPaletteOpen}
            setIsPaletteOpen={setIsPaletteOpen}
            QUESTIONS_DATA={QUESTIONS_DATA}
            currentIdx={currentIdx}
            setCurrentIdx={setCurrentIdx}
            userAnswers={userAnswers}
            bookmarks={bookmarks}
            isDarkMode={isDarkMode}
          />
        </>
      )}
    </div>
  );
}

export default App;