import {
  CalendarDays,
  CheckSquare,
  ChevronRight,
  Clock3,
  Leaf,
  Plus,
  Search,
  Target,
} from "lucide-react";

import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Subjects from "./pages/Subjects";
import DataStructures from "./pages/DataStructures";
import Module from "./pages/Module";
import Topic from "./pages/Topic";

function Home() {
  return (
    <div className="min-h-screen bg-[#101b16] text-[#f3ead8]">
      <div className="mx-auto min-h-screen max-w-7xl">
        {/* Desktop Sidebar */}
        <aside className="fixed hidden h-screen w-64 border-r border-[#34483d] bg-[#0d1713] p-6 md:block">
          <div className="mb-10 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#d7c6a5] text-[#17352a]">
              <Leaf size={21} />
            </div>

            <div>
              <h1 className="font-serif text-xl font-semibold">StudySpace</h1>
              <p className="text-xs text-[#9eaa9f]">Your peaceful study place</p>
            </div>
          </div>

          <nav className="space-y-2">
             <button
              className="flex w-full items-center gap-4 rounded-xl bg-[#20382d] px-4 py-3 text-left text-[#f3ead8]"
               >
              <span className="text-lg">⌂</span>
              <span>Home</span>
            </button>

             <Link
             to="/subjects"
             className="flex w-full items-center gap-4 rounded-xl px-4 py-3 text-left text-[#aeb8ae] transition hover:bg-[#182820]"
              >
              <span className="text-lg">▣</span>
              <span>Subjects</span>
              </Link>

            <button className="flex w-full items-center gap-4 rounded-xl px-4 py-3 text-left text-[#aeb8ae] transition hover:bg-[#182820]">
            <span className="text-lg">✓</span>
             <span>Tasks</span>
             </button>

            <button className="flex w-full items-center gap-4 rounded-xl px-4 py-3 text-left text-[#aeb8ae] transition hover:bg-[#182820]">
            <span className="text-lg">□</span>
            <span>Calendar</span>
            </button>

            <button className="flex w-full items-center gap-4 rounded-xl px-4 py-3 text-left text-[#aeb8ae] transition hover:bg-[#182820]">
            <span className="text-lg">✎</span>
            <span>Notes</span>
            </button>

            <button className="flex w-full items-center gap-4 rounded-xl px-4 py-3 text-left text-[#aeb8ae] transition hover:bg-[#182820]">
             <span className="text-lg">◇</span>
            <span>PYQs</span>
            </button>

             <button className="flex w-full items-center gap-4 rounded-xl px-4 py-3 text-left text-[#aeb8ae] transition hover:bg-[#182820]">
             <span className="text-lg">⌘</span>
             <span>Mind Maps</span>
              </button>

            <button className="flex w-full items-center gap-4 rounded-xl px-4 py-3 text-left text-[#aeb8ae] transition hover:bg-[#182820]">
             <span className="text-lg">☆</span>
              <span>Favorites</span>
            </button>
          </nav>
        </aside>

        {/* Main */}
        <main className="pb-24 md:ml-64 md:pb-8">
          <div className="mx-auto max-w-5xl px-5 py-7 sm:px-8 md:px-10">
            {/* Header */}
            <header className="mb-8 flex items-center justify-between">
              <div>
                <p className="mb-1 text-sm text-[#9eaa9f]">
                  Tuesday, September 15
                </p>
                <h2 className="font-serif text-3xl font-semibold sm:text-4xl">
                  Good evening 🌿
                </h2>
                <p className="mt-2 text-[#aeb8ae]">
                  Let's make today's studying a little easier.
                </p>
              </div>

              <button className="hidden h-11 w-11 items-center justify-center rounded-full border border-[#34483d] bg-[#16241d] text-[#d7c6a5] sm:flex">
                <Search size={20} />
              </button>
            </header>

            {/* Today's focus */}
            <section className="mb-6 overflow-hidden rounded-3xl border border-[#3a4d41] bg-linear-to-br from-[#20392d] to-[#17271f] p-6 shadow-2xl">
              <div className="flex items-start justify-between">
                <div>
                  <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#d7c6a5]/10 px-3 py-1 text-xs text-[#d7c6a5]">
                    <Target size={14} />
                    TODAY'S FOCUS
                  </div>

                  <h3 className="font-serif text-2xl font-semibold">
                    Finish Linked Lists
                  </h3>

                  <p className="mt-2 max-w-md text-sm leading-6 text-[#b6c0b7]">
                    Complete the remaining topics and solve two previous year
                    questions.
                  </p>
                </div>

                <div className="hidden h-16 w-16 items-center justify-center rounded-full border border-[#d7c6a5]/30 sm:flex">
                  <span className="font-serif text-lg">72%</span>
                </div>
              </div>

              <div className="mt-6 h-2 overflow-hidden rounded-full bg-[#0d1713]/70">
                <div className="h-full w-[72%] rounded-full bg-[#d7c6a5]" />
              </div>

              <button className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[#d7c6a5] px-4 py-2.5 text-sm font-medium text-[#17352a]">
                Continue studying
                <ChevronRight size={17} />
              </button>
            </section>

            {/* Quick actions */}
            <section className="mb-8">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="font-serif text-xl font-semibold">Quick add</h3>
                <span className="text-xs text-[#87958a]">One tap away</span>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  ["+", "Task"],
                  ["✎", "Note"],
                  ["□", "Study session"],
                  ["＋", "Event"],
                ].map(([icon, label]) => (
                  <button
                    key={label}
                    className="flex items-center gap-3 rounded-2xl border border-[#34483d] bg-[#16241d] p-4 text-left transition hover:bg-[#1c3026]"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#2a4235] text-[#d7c6a5]">
                      {icon}
                    </span>
                    <span className="text-sm">{label}</span>
                  </button>
                ))}
              </div>
            </section>

            {/* Today grid */}
            <section className="grid gap-5 lg:grid-cols-2">
              {/* Tasks */}
              <div className="rounded-3xl border border-[#34483d] bg-[#14221b] p-5">
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <CheckSquare className="text-[#d7c6a5]" size={21} />
                    <h3 className="font-serif text-xl font-semibold">
                      Today's tasks
                    </h3>
                  </div>

                  <button className="text-sm text-[#d7c6a5]">View all</button>
                </div>

                <div className="space-y-3">
                  {[
                    ["Complete Linked Lists notes", "High"],
                    ["Solve 2024 DBMS PYQs", "Medium"],
                    ["Review OS scheduling", "Low"],
                  ].map(([task, priority], index) => (
                    <div
                      key={task}
                      className="flex items-center gap-3 rounded-2xl bg-[#1b2c23] p-3"
                    >
                      <button className="h-5 w-5 rounded-full border border-[#68786d]" />
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm">{task}</p>
                        <p className="mt-1 text-xs text-[#849188]">
                          {index === 0 ? "Data Structures" : "Today"}
                        </p>
                      </div>
                      <span className="text-xs text-[#b9aa8f]">{priority}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Schedule */}
              <div className="rounded-3xl border border-[#34483d] bg-[#14221b] p-5">
                <div className="mb-5 flex items-center gap-3">
                  <CalendarDays className="text-[#d7c6a5]" size={21} />
                  <h3 className="font-serif text-xl font-semibold">
                    Coming up
                  </h3>
                </div>

                <div className="space-y-3">
                  {[
                    ["10:00 AM", "Data Structures", "Class"],
                    ["2:00 PM", "Study Session", "Linked Lists"],
                    ["Sep 22", "DBMS Assignment", "Deadline"],
                  ].map(([time, title, type]) => (
                    <div
                      key={title}
                      className="flex items-center gap-4 rounded-2xl bg-[#1b2c23] p-3"
                    >
                      <div className="w-16 text-center text-xs text-[#d7c6a5]">
                        {time}
                      </div>

                      <div className="h-9 w-px bg-[#34483d]" />

                      <div>
                        <p className="text-sm">{title}</p>
                        <p className="mt-1 text-xs text-[#849188]">{type}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Overall progress */}
            <section className="mt-5 rounded-3xl border border-[#34483d] bg-[#14221b] p-5">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-xl font-semibold">
                    Your progress
                  </h3>
                  <p className="mt-1 text-sm text-[#849188]">
                    Keep going. Small progress adds up.
                  </p>
                </div>

                <span className="text-2xl font-semibold text-[#d7c6a5]">
                  64%
                </span>
              </div>

              <div className="space-y-4">
                {[
                  ["Data Structures", 78],
                  ["DBMS", 61],
                  ["Operating Systems", 54],
                ].map(([subject, progress]) => (
                  <div key={subject as string}>
                    <div className="mb-2 flex justify-between text-sm">
                      <span>{subject}</span>
                      <span className="text-[#849188]">{progress}%</span>
                    </div>

                    <div className="h-2 overflow-hidden rounded-full bg-[#0d1713]">
                      <div
                        className="h-full rounded-full bg-[#8da18f]"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </main>

        {/* Mobile Bottom Navigation */}
        <nav className="fixed bottom-0 left-0 right-0 z-20 border-t border-[#34483d] bg-[#0d1713]/95 px-2 py-2 backdrop-blur md:hidden">
          <div className="mx-auto flex max-w-md items-center justify-around">
            {[
              ["⌂", "Home"],
              ["▣", "Subjects"],
              ["✓", "Tasks"],
              ["□", "Calendar"],
              ["⌕", "Search"],
            ].map(([icon, label], index) => (
              <button
                key={label}
                className={`flex min-w-14 flex-col items-center gap-1 rounded-xl px-3 py-2 text-xs ${
                  index === 0
                    ? "bg-[#20382d] text-[#d7c6a5]"
                    : "text-[#849188]"
                }`}
              >
                <span className="text-lg">{icon}</span>
                {label}
              </button>
            ))}

            <button className="absolute -top-6 right-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#d7c6a5] text-[#17352a] shadow-lg">
              <Plus size={22} />
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/subjects" element={<Subjects />} />
      <Route path="/subjects/data-structures" element={<DataStructures />} />
      <Route
        path="/subjects/data-structures/:moduleName"
        element={<Module />}
      />
      <Route
        path="/subjects/data-structures/arrays-and-strings/:topicName"
        element={<Topic />}
      />
    </Routes>
  );
}

export default App;
