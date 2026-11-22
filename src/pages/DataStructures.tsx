import { ArrowLeft, BookOpen, CheckCircle2, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const modules = [
  {
    name: "Introduction to Data Structures",
    topics: 8,
    completed: 8,
    progress: 100,
  },
  {
    name: "Arrays & Strings",
    topics: 10,
    completed: 7,
    progress: 70,
  },
  {
    name: "Linked Lists",
    topics: 9,
    completed: 5,
    progress: 56,
  },
  {
    name: "Stacks & Queues",
    topics: 8,
    completed: 3,
    progress: 38,
  },
  {
    name: "Trees",
    topics: 10,
    completed: 2,
    progress: 20,
  },
  {
    name: "Graphs",
    topics: 9,
    completed: 0,
    progress: 0,
  },
];

function DataStructures() {
  return (
    <div className="min-h-screen bg-[#101b16] text-[#f3ead8]">
      <main className="mx-auto max-w-5xl px-5 py-7 sm:px-8 md:px-10">

        <Link
          to="/subjects"
          className="mb-7 inline-flex items-center gap-2 text-sm text-[#9eaa9f] transition hover:text-[#d7c6a5]"
        >
          <ArrowLeft size={17} />
          Back to Subjects
        </Link>

        <header className="mb-8">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#20382d]">
              <BookOpen className="text-[#d7c6a5]" size={25} />
            </div>

            <div>
              <p className="text-sm text-[#849188]">Subject</p>
              <h1 className="font-serif text-3xl font-semibold sm:text-4xl">
                Data Structures
              </h1>
            </div>
          </div>

          <p className="mt-4 max-w-2xl text-[#aeb8ae]">
            Learn, organize, and track every module without losing your place.
          </p>
        </header>

        <section className="mb-8 rounded-3xl border border-[#34483d] bg-[#14221b] p-5">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-sm text-[#849188]">Overall progress</p>
              <p className="mt-1 font-serif text-3xl font-semibold">72%</p>
            </div>

            <p className="text-sm text-[#9eaa9f]">
              4 of 6 modules started
            </p>
          </div>

          <div className="mt-5 h-2 overflow-hidden rounded-full bg-[#0d1713]">
            <div className="h-full w-[72%] rounded-full bg-[#8da18f]" />
          </div>
        </section>

        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-serif text-2xl font-semibold">
            Modules
          </h2>

          <span className="text-sm text-[#849188]">
            {modules.length} modules
          </span>
        </div>

        <div className="space-y-3">
          {modules.map((module) => (
            <Link
              key={module.name}
              to={`/subjects/data-structures/${module.name
                .toLowerCase()
                .replaceAll(" ", "-")
                .replaceAll("&", "and")}`}
              className="group w-full rounded-2xl border border-[#34483d] bg-[#14221b] p-5 text-left transition hover:border-[#506458] hover:bg-[#182920]"
            >
              <div className="flex items-center gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#20382d]">
                  {module.progress === 100 ? (
                    <CheckCircle2
                      size={20}
                      className="text-[#d7c6a5]"
                    />
                  ) : (
                    <span className="text-sm font-semibold text-[#9eaa9f]">
                      {module.progress}%
                    </span>
                  )}
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="font-medium text-[#f3ead8]">
                    {module.name}
                  </h3>

                  <p className="mt-1 text-sm text-[#849188]">
                    {module.completed} of {module.topics} topics complete
                  </p>

                  <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[#0d1713]">
                    <div
                      className="h-full rounded-full bg-[#8da18f]"
                      style={{ width: `${module.progress}%` }}
                    />
                  </div>
                </div>

                <ChevronRight
                  size={20}
                  className="shrink-0 text-[#69786d] transition group-hover:translate-x-1 group-hover:text-[#d7c6a5]"
                />

              </div>
            </Link>
          ))}
        </div>

      </main>
    </div>
  );
}

export default DataStructures;