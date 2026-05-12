import { Home, ArrowLeft, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-neutral-950 text-white overflow-hidden relative flex items-center justify-center px-4">
      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/20 blur-3xl rounded-full" />

      {/* GRID */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-2xl text-center">
        {/* 404 */}
        <div className="relative inline-block">
          <h1 className="text-[120px] md:text-[200px] font-black leading-none tracking-tight bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
            404
          </h1>

          <div className="absolute inset-0 blur-3xl opacity-30 bg-blue-500" />
        </div>

        {/* TEXT */}
        <h2 className="text-3xl md:text-5xl font-black mt-2">
          Page Not Found
        </h2>

        <p className="mt-5 text-lg text-neutral-400 leading-relaxed max-w-xl mx-auto">
          The page you are trying to access does not exist or may have been moved.
          Continue your preparation by returning to the homepage.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <button
            onClick={() => navigate("/")}
            className="group px-7 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 transition-all duration-300 font-bold text-lg shadow-2xl flex items-center justify-center gap-3 hover:scale-105"
          >
            <Home className="w-5 h-5" />
            Go To Home
          </button>

          <button
            onClick={() => navigate(-1)}
            className="group px-7 py-4 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition-all duration-300 font-semibold text-lg flex items-center justify-center gap-3 hover:scale-105"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
        </div>

        {/* SEARCH BOX */}
        <div className="mt-12 max-w-xl mx-auto relative">
          <input
            type="text"
            placeholder="Search chapters or subjects..."
            className="w-full bg-neutral-900 border border-neutral-800 rounded-2xl px-6 py-4 pr-14 outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder:text-neutral-500"
          />

          <Search className="absolute right-5 top-1/2 -translate-y-1/2 text-neutral-500 w-5 h-5" />
        </div>

        {/* QUICK LINKS */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "Modern History",
            "Polity",
            "Geography",
            "Economics",
          ].map((item, idx) => (
            <button
              key={idx}
              className="rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-blue-500 hover:bg-neutral-800 px-4 py-5 transition-all duration-300 font-medium"
            >
              {item}
            </button>
          ))}
        </div>

        {/* FOOTER */}
        <div className="mt-14 text-neutral-600 text-sm">
          GS Quiz App • SSC • UPSC • Railway • State Exams
        </div>
      </div>
    </div>
  );
}
