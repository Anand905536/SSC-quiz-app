import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";

// const Home = () => {
//     return (
//         <>
//             <div className="flex gap-2 flex-wrap p-4">
//                 {[...Array(200)].map((_, i) => (
//                     <button
//                         key={i}
//                         onClick={() => setSelectedPage(i + 1)}
//                         className="px-3 py-2 bg-blue-500 text-white rounded"
//                     >
//                         Page {i + 1}
//                     </button>
//                 ))}
//             </div>
//         </>
//     )
// }

// export default Home

export default function HomePage() {
    const navigate = useNavigate();


    const chapters = [
        {
            id: 1,
            title: "Ancient History",
            icon: "🏺",
            color: "from-amber-500 to-orange-600",
            totalQuestions: 520,
            subChapters: [
                "Indus Valley Civilization",
                "Vedic Civilization",
                "Mahajanapadas",
                "Buddhism",
                "Jainism",
                "Mauryan Empire",
                "Gupta Empire",
                "Sangam Age",
                "Foreign Invasions",
                "Ancient Literature",
            ],
        },
        {
            id: 2,
            title: "Medieval History",
            icon: "⚔️",
            color: "from-slate-600 to-gray-800",
            totalQuestions: 610,
            subChapters: [
                "Delhi Sultanate",
                "Mughal Empire",
                "Vijayanagara Empire",
                "Bhakti Movement",
                "Sufi Movement",
                "Maratha Empire",
                "Sher Shah Suri",
                "Mughal Administration",
                "Medieval Architecture",
                "Regional Kingdoms",
            ],
        },
        {
            id: 3,
            title: "Modern History",
            icon: "📜",
            color: "from-orange-500 to-red-600",
            totalQuestions: 780,
            subChapters: [
                "Advent of Europeans",
                "Revolt of 1857",
                "Indian National Congress",
                "Moderates and Extremists",
                "Partition of Bengal",
                "Gandhian Era",
                "Revolutionary Movement",
                "Constitutional Reforms",
                "Freedom Struggle",
                "Post Independence India",
            ],
        },
        {
            id: 4,
            title: "Geography",
            icon: "🌍",
            color: "from-green-500 to-emerald-700",
            totalQuestions: 540,
            subChapters: [
                "Universe",
                "Latitude and Longitude",
                "Earth Motions",
                "Rivers of India",
                "Mountains",
                "Climate",
                "Soils",
                "Agriculture",
                "Minerals",
                "Industries",
            ],
        },
        {
            id: 5,
            title: "Polity",
            icon: "🏛️",
            color: "from-blue-500 to-indigo-700",
            totalQuestions: 690,
            subChapters: [
                "Constitution",
                "Preamble",
                "Fundamental Rights",
                "Directive Principles",
                "Parliament",
                "President",
                "Prime Minister",
                "Supreme Court",
                "Emergency Provisions",
                "Constitutional Amendments",
            ],
        },
        {
            id: 6,
            title: "Economics",
            icon: "💰",
            color: "from-lime-500 to-green-700",
            totalQuestions: 560,
            subChapters: [
                "National Income",
                "GDP and GNP",
                "Inflation",
                "Banking",
                "Reserve Bank of India",
                "Budget",
                "Taxation",
                "Poverty",
                "Unemployment",
                "Five Year Plans",
            ],
        },
        {
            id: 7,
            title: "Science",
            icon: "🧪",
            color: "from-cyan-500 to-sky-700",
            totalQuestions: 820,
            subChapters: [
                "Physics",
                "Chemistry",
                "Biology",
                "Human Body",
                "Nutrition",
                "Diseases",
                "Atoms and Molecules",
                "Electricity",
                "Environment",
                "Space Science",
            ],
        },
        {
            id: 8,
            title: "Static GK",
            icon: "📚",
            color: "from-violet-500 to-purple-700",
            totalQuestions: 510,
            subChapters: [
                "Books and Authors",
                "Awards",
                "Sports",
                "Important Days",
                "Capitals and Currencies",
                "National Parks",
                "Dances",
                "Festivals",
                "Important Organizations",
                "World Geography GK",
            ],
        },
    ];

    const [openCard, setOpenCard] = React.useState(null);

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-neutral-950 text-gray-900 dark:text-white transition-all duration-300">
            {/* HEADER */}
            <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 dark:bg-neutral-900/70 border-b border-gray-200 dark:border-neutral-800">
                <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                    {/* LOGO */}
                    <div>
                        <h1 className="text-2xl md:text-3xl font-black tracking-tight">
                            GS Quiz App
                        </h1>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                            Practice SSC • UPSC • Railway • State Exams
                        </p>
                    </div>

                    {/* DARK MODE BUTTON */}
                    <button
                        onClick={() => {
                            document.documentElement.classList.toggle("dark");
                        }}
                        className="w-12 h-12 rounded-2xl bg-gray-200 dark:bg-neutral-800 flex items-center justify-center text-xl hover:scale-105 transition-all duration-300"
                    >
                        🌙
                    </button>
                </div>
            </header>

            {/* HERO SECTION */}
            <section className="max-w-7xl mx-auto px-4 py-10 md:py-16">
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 p-8 md:p-14 shadow-2xl">
                    <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl" />

                    <div className="relative z-10 max-w-3xl">
                        <h2 className="text-4xl md:text-6xl font-black leading-tight text-white">
                            Master General Studies With Smart Practice
                        </h2>

                        <p className="mt-5 text-lg md:text-xl text-blue-100 leading-relaxed">
                            Solve chapter-wise MCQs for SSC, UPSC, Railway and State exams.
                            Track progress, bookmark questions and revise smarter.
                        </p>

                        <div className="flex flex-wrap gap-4 mt-8">
                            <button className="px-7 py-4 rounded-2xl bg-white text-blue-700 font-bold hover:scale-105 transition-all duration-300 shadow-xl">
                                Start Practice
                            </button>

                            <button className="px-7 py-4 rounded-2xl border border-white/40 text-white font-semibold hover:bg-white/10 transition-all duration-300">
                                Explore Chapters
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* SEARCH BAR */}
            <section className="max-w-7xl mx-auto px-4">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search chapters..."
                        className="w-full rounded-2xl bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500 text-lg shadow-sm"
                    />

                    <div className="absolute right-5 top-1/2 -translate-y-1/2 text-xl text-gray-400">
                        🔍
                    </div>
                </div>
            </section>

            {/* STATS */}
            <section className="max-w-7xl mx-auto px-4 mt-10 grid grid-cols-2 md:grid-cols-4 gap-5">
                <div className="rounded-3xl bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 p-6 shadow-sm">
                    <h3 className="text-4xl font-black text-blue-600">8+</h3>
                    <p className="mt-2 text-gray-500 dark:text-gray-400 font-medium">
                        Subjects
                    </p>
                </div>

                <div className="rounded-3xl bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 p-6 shadow-sm">
                    <h3 className="text-4xl font-black text-green-600">3500+</h3>
                    <p className="mt-2 text-gray-500 dark:text-gray-400 font-medium">
                        MCQs
                    </p>
                </div>

                <div className="rounded-3xl bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 p-6 shadow-sm">
                    <h3 className="text-4xl font-black text-orange-500">24/7</h3>
                    <p className="mt-2 text-gray-500 dark:text-gray-400 font-medium">
                        Practice
                    </p>
                </div>

                <div className="rounded-3xl bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 p-6 shadow-sm">
                    <h3 className="text-4xl font-black text-purple-600">100%</h3>
                    <p className="mt-2 text-gray-500 dark:text-gray-400 font-medium">
                        Free Access
                    </p>
                </div>
            </section>

            {/* CHAPTER SECTION */}
            <section className="max-w-7xl mx-auto px-4 py-14">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-black">
                            Choose Your Chapter
                        </h2>
                        <p className="mt-2 text-gray-500 dark:text-gray-400 text-lg">
                            Select any chapter and start solving quizzes instantly.
                        </p>
                    </div>

                    <button className="hidden md:block px-5 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all duration-300">
                        View All
                    </button>
                </div>

                {/* GRID */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {chapters.map((chapter) => (
                        <div
                            key={chapter.id}
                            className="group relative overflow-hidden rounded-3xl bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                        >
                            {/* TOP GRADIENT */}
                            <div
                                className={`h-32 bg-gradient-to-r ${chapter.color} flex items-center justify-center text-5xl`}
                            >
                                {chapter.icon}
                            </div>

                            {/* CONTENT */}
                            <div className="p-6">
                                <h3 className="text-2xl font-black">
                                    {chapter.title}
                                </h3>

                                <p className="mt-2 text-gray-500 dark:text-gray-400">
                                    {chapter.totalQuestions}+ Important Questions
                                </p>

                                {/* PROGRESS BAR */}
                                <div className="mt-5">
                                    <div className="flex justify-between text-sm mb-2 text-gray-500 dark:text-gray-400">
                                        <span>Progress</span>
                                        <span>65%</span>
                                    </div>

                                    <div className="w-full h-3 rounded-full bg-gray-200 dark:bg-neutral-800 overflow-hidden">
                                        <div className="h-full w-[65%] bg-blue-600 rounded-full" />
                                    </div>
                                </div>

                                {/* BUTTONS */}
                                {/* SUB CHAPTERS */}
                                <div className="mt-5">
                                    <button
                                        onClick={() =>
                                            setOpenCard(openCard === chapter.id ? null : chapter.id)
                                        }
                                        className="w-full py-3 rounded-2xl bg-gray-100 dark:bg-neutral-800 hover:bg-gray-200 dark:hover:bg-neutral-700 font-semibold transition-all duration-300"
                                    >
                                        {openCard === chapter.id
                                            ? "Hide Chapters"
                                            : "View Chapters"}
                                    </button>

                                    {openCard === chapter.id && (
                                        <div className="mt-4 grid grid-cols-1 gap-3 animate-in fade-in duration-300">
                                            {chapter.subChapters.map((sub, idx) => (
                                                <button
                                                    key={idx}
                                                    onClick={() =>
                                                        navigate(
                                                            `/quiz/${chapter.title
                                                                .toLowerCase()
                                                                .replaceAll(" ", "-")}/${sub
                                                                    .toLowerCase()
                                                                    .replaceAll(" ", "-")}`
                                                        )
                                                    }
                                                    className="text-left px-4 py-3 rounded-2xl
                                                     bg-gray-50 dark:bg-neutral-800
                                                      hover:bg-blue-50 dark:hover:bg-neutral-700
                                                      border border-gray-200 dark:border-neutral-700
                                                      transition-all duration-300
                                                       w-full "
                                                >
                                                    <div className="flex items-center justify-between">
                                                        <span className="font-medium">
                                                            {sub}
                                                        </span>
                                                        <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold">
                                                            Start →
                                                        </span>

                                                    </div>
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* BUTTONS */}
                                <div className="flex gap-3 mt-6">
                                    <button className="flex-1 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all duration-300">
                                        Start Quiz
                                    </button>

                                    <button className="w-14 rounded-2xl bg-gray-100 dark:bg-neutral-800 hover:scale-105 transition-all duration-300 text-xl">
                                        ⭐
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* FOOTER */}
            <footer className="border-t border-gray-200 dark:border-neutral-800 mt-10">
                <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div>
                        <h3 className="font-black text-xl">GS Quiz App</h3>
                        <p className="text-gray-500 dark:text-gray-400 mt-1">
                            Built for serious exam aspirants.
                        </p>
                    </div>

                    <div className="flex gap-4 text-gray-500 dark:text-gray-400">
                        <button className="hover:text-blue-600 transition-all duration-300">
                            About
                        </button>

                        <button className="hover:text-blue-600 transition-all duration-300">
                            Privacy
                        </button>

                        <button className="hover:text-blue-600 transition-all duration-300">
                            Contact
                        </button>
                    </div>
                </div>
            </footer>
        </div>
    );
}
