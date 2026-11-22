import { useState } from "react";
import { Link } from "react-router-dom";

const topics = [
  "Introduction to Arrays",
  "Array Operations",
  "Searching in Arrays",
  "Linear Search",
  "Binary Search",
  "Sorting Basics",
  "Strings",
  "String Operations",
  "Common Array Problems",
  "Practice Questions",
];

export default function Module() {
  const [completed, setCompleted] = useState<boolean[]>(() => {
  const saved = localStorage.getItem("arrays-strings-progress");

  if (saved) {
    return JSON.parse(saved);
  }

  return [true, true, false, false, false, false, false, false, false, false];
});

  const completedCount = completed.filter(Boolean).length;
  const progress = completedCount * 10;

  const toggleTopic = (index: number) => {
  setCompleted((current) => {
    const updated = current.map((value, i) =>
      i === index ? !value : value
    );

    localStorage.setItem(
      "arrays-strings-progress",
      JSON.stringify(updated)
    );

    return updated;
  });
};

  return (
    <div className="min-h-screen bg-[#101b16] px-6 py-8 text-[#f3ead8]">
      <div className="mx-auto max-w-4xl">

        <Link
          to="/subjects/data-structures"
          className="text-sm text-[#aeb8ae] hover:text-[#f3ead8]"
        >
          ← Back to Data Structures
        </Link>

        <div className="mt-6">
          <p className="text-sm text-[#8da18f]">MODULE</p>

          <h1 className="mt-2 font-serif text-4xl font-semibold">
            Arrays & Strings
          </h1>

          <p className="mt-2 text-[#aeb8ae]">
            {completedCount} / {topics.length} topics complete
          </p>
        </div>

        <div className="mt-6 rounded-2xl border border-[#34483d] bg-[#14221b] p-5">
          <div className="mb-3 flex justify-between text-sm">
            <span>Progress</span>
            <span>{progress}%</span>
          </div>

          <div className="h-2 overflow-hidden rounded-full bg-[#24342b]">
            <div
              className="h-full rounded-full bg-[#8da18f] transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="mt-6 space-y-3">
          {topics.map((topic, index) => (
  <div
    key={topic}
    className="flex items-center gap-4 rounded-2xl border border-[#34483d] bg-[#14221b] p-4 transition hover:bg-[#182920]"
  >
    <button
      onClick={() => toggleTopic(index)}
      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border ${
        completed[index]
          ? "border-[#8da18f] bg-[#8da18f] text-[#101b16]"
          : "border-[#506458] text-transparent"
      }`}
    >
      ✓
    </button>

    <Link
      to={`/subjects/data-structures/arrays-and-strings/${topic
        .toLowerCase()
        .replaceAll(" ", "-")}`}
      className={`flex-1 ${
        completed[index]
          ? "text-[#aeb8ae] line-through"
          : "text-[#f3ead8]"
      }`}
    >
      {topic}
    </Link>

    <span className="text-[#8da18f]">→</span>
  </div>
))}
        </div>

      </div>
    </div>
  );
}
