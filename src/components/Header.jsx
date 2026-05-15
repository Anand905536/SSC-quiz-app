import React from "react";
import { Moon, Sun, Maximize2 } from "lucide-react";

const Header = ({
  isDarkMode,
  setIsDarkMode,
  timeLeft,
}) => {
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;

    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const toggleFullscreen = async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch (err) {
      console.log("Fullscreen not supported");
    }
  };

  return (
    <header
      className={`
        sticky top-0 z-40
        backdrop-blur-md
        border-b
        transition-all duration-300
        ${
          isDarkMode
            ? "bg-neutral-900/90 border-neutral-700"
            : "bg-white/90 border-gray-200"
        }
      `}
    >
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          
          {/* Title */}
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              {/* <span className="text-blue-600 dark:text-blue-400">
                SSC Quiz Platform
              </span> */}
            </h1>

            {/* <p
              className={`text-sm mt-1 ${
                isDarkMode ? "text-neutral-400" : "text-gray-500"
              }`}
            >
              Practice • Revise • Improve
            </p> */}
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-3">
            
            {/* Timer */}
            {/* <div
              className={`
                px-5 py-2 rounded-xl
                font-mono text-lg font-bold
                shadow-md transition-all
                ${
                  timeLeft <= 60
                    ? "bg-red-100 text-red-600 animate-pulse"
                    : isDarkMode
                    ? "bg-yellow-500/20 text-yellow-300"
                    : "bg-yellow-100 text-yellow-700"
                }
              `}
            >
              {formatTime(timeLeft)}
            </div> */}

            {/* Theme Toggle */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`
                w-11 h-11 rounded-xl
                flex items-center justify-center
                transition-all duration-300
                shadow-md hover:scale-105 active:scale-95
                ${
                  isDarkMode
                    ? "bg-neutral-800 hover:bg-neutral-700 text-yellow-300"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                }
              `}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Fullscreen */}
            <button
              onClick={toggleFullscreen}
              className={`
                w-11 h-11 rounded-xl
                flex items-center justify-center
                transition-all duration-300
                shadow-md hover:scale-105 active:scale-95
                ${
                  isDarkMode
                    ? "bg-neutral-800 hover:bg-neutral-700 text-white"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                }
              `}
            >
              <Maximize2 size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;