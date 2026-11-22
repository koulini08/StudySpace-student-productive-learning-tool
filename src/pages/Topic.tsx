import { Link, useParams } from "react-router-dom";

export default function Topic() {
  const { topicName } = useParams();

  const topicTitle = topicName
    ? topicName
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    : "Topic";

  return (
    <div className="min-h-screen bg-[#101b16] px-6 py-8 text-[#f3ead8]">
      <div className="mx-auto max-w-4xl">

        <Link
          to="/subjects/data-structures/arrays-and-strings"
          className="text-sm text-[#aeb8ae] hover:text-[#f3ead8]"
        >
          ← Back to Arrays & Strings
        </Link>

        <div className="mt-8">
          <p className="text-sm text-[#8da18f]">
            ARRAYS & STRINGS
          </p>

          <h1 className="mt-2 font-serif text-4xl font-semibold">
            {topicTitle}
          </h1>

          <p className="mt-3 text-[#aeb8ae]">
            Your notes and study material for this topic.
          </p>
        </div>

        <div className="mt-8 rounded-3xl border border-[#34483d] bg-[#14221b] p-6">
          <h2 className="font-serif text-2xl">
            Notes
          </h2>

          <p className="mt-3 text-[#aeb8ae]">
            Start writing your notes for this topic here.
          </p>

          <textarea
            placeholder="Write your notes..."
            className="mt-5 min-h-64 w-full resize-none rounded-2xl border border-[#34483d] bg-[#101b16] p-4 text-[#f3ead8] outline-none placeholder:text-[#65756b] focus:border-[#8da18f]"
          />
        </div>

      </div>
    </div>
  );
}