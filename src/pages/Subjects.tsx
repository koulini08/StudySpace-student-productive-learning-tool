import { BookOpen, ChevronRight, Plus } from "lucide-react";
import { Link } from "react-router-dom";

const subjects = [
  {
    name: "Data Structures",
    short: "DS",
    modules: "4 / 6 modules complete",
    progress: 72,
    color: "#8da18f",
  },
  {
    name: "Database Management Systems",
    short: "DB",
    modules: "3 / 7 modules complete",
    progress: 61,
    color: "#c9b58d",
  },
  {
    name: "Operating Systems",
    short: "OS",
    modules: "3 / 6 modules complete",
    progress: 54,
    color: "#a99582",
  },
  {
    name: "Computer Networks",
    short: "CN",
    modules: "2 / 6 modules complete",
    progress: 38,
    color: "#7f9988",
  },
];

function Subjects() {
  return (
    <div className="min-h-screen bg-[#101b16] text-[#f3ead8]">
      <main className="mx-auto max-w-5xl px-5 py-7 sm:px-8 md:px-10">
        <header className="mb-8 flex items-center justify-between">
          <div>
            <p className="mb-1 text-sm text-[#9eaa9f]">Your study space</p>

            <h1 className="font-serif text-3xl font-semibold sm:text-4xl">
              My Subjects
            </h1>

            <p className="mt-2 text-[#aeb8ae]">
              Everything you're learning, organized peacefully.
            </p>
          </div>

          <button className="flex items-center gap-2 rounded-xl bg-[#d7c6a5] px-4 py-3 text-sm font-medium text-[#17352a]">
            <Plus size={18} />
            <span className="hidden sm:inline">Add Subject</span>
          </button>
        </header>

        <div className="mb-7 rounded-3xl border border-[#34483d] bg-[#14221b] p-5">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#20382d]">
              <BookOpen className="text-[#d7c6a5]" size={23} />
            </div>

            <div>
              <p className="text-sm text-[#849188]">Overall progress</p>
              <p className="font-serif text-2xl font-semibold">64%</p>
            </div>
          </div>

          <div className="mt-5 h-2 overflow-hidden rounded-full bg-[#0d1713]">
            <div className="h-full w-[64%] rounded-full bg-[#d7c6a5]" />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {subjects.map((subject) => (
            <Link
              key={subject.name}
               to={`/subjects/${subject.name.toLowerCase().replaceAll(" ", "-")}`}
              className="group rounded-3xl border border-[#34483d] bg-[#14221b] p-5 text-left transition hover:-translate-y-1 hover:bg-[#182920]"
            >
              <div className="mb-5 flex items-start justify-between">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-2xl font-semibold"
                  style={{
                    backgroundColor: `${subject.color}20`,
                    color: subject.color,
                  }}
                >
                  {subject.short}
                </div>

                <ChevronRight
                  size={20}
                  className="text-[#69786d] transition group-hover:translate-x-1 group-hover:text-[#d7c6a5]"
                />
              </div>

              <h2 className="font-serif text-xl font-semibold">
                {subject.name}
              </h2>

              <p className="mt-1 text-sm text-[#849188]">
                {subject.modules}
              </p>

              <div className="mt-5 flex items-center justify-between text-xs">
                <span className="text-[#849188]">Progress</span>
                <span className="text-[#d7c6a5]">{subject.progress}%</span>
              </div>

              <div className="mt-2 h-2 overflow-hidden rounded-full bg-[#0d1713]">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${subject.progress}%`,
                    backgroundColor: subject.color,
                  }}
                />
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Subjects;