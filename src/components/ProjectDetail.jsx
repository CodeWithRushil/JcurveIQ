import React from "react";
import { useSelector } from "react-redux";

export default function ProjectDetail() {
  const { projects, selectedProjectId, status, error } = useSelector(
    (s) => s.projects
  );
  const project =
    projects.find((p) => p.id === selectedProjectId) || projects[0];

  if (status === "loading") return <div className="p-8">Loading...</div>;
  if (status === "failed")
    return <div className="p-8 text-red-600">Error: {error}</div>;
  if (!project) return <div className="p-8">No project selected</div>;

  return (
    <section className="w-full">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-[#EBEDEF] pb-4 gap-3">
        <h2 className="text-xl sm:text-2xl font-semibold flex items-center gap-3 flex-wrap">
          <span className="truncate">{project.title}</span>
          <span
            className="text-xs sm:text-sm px-2 py-[2px] rounded-sm bg-white text-gray-600 border border-[#768EFF]
            transition-all duration-200 ease-in-out
            hover:bg-[#768EFF] hover:text-white hover:shadow-sm cursor-pointer"
          >
            {project.tag}
          </span>
        </h2>
      </div>

      <div className="mt-5 sm:mt-6 bg-white rounded-lg p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <h3 className="text-lg sm:text-2xl font-medium leading-snug">
            Analyze performance and summarize major operational insights based
            on the data.
          </h3>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-4 gap-2 sm:gap-0">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm sm:text-md text-gray-600">
              Answered with:
            </span>
            <span className="text-sm sm:text-md px-3 py-1 rounded-md bg-white border border-[#EBEDEF] text-gray-700">
              GPT-4o (Latest)
            </span>
            <button
              onClick={() => navigator.clipboard.writeText(project.summary)}
              className="text-sm sm:text-md px-2 py-1 rounded-md border border-[#EBEDEF] text-[#768EFF] cursor-pointer hover:bg-[#F3F5F7] flex items-center gap-1 sm:gap-2"
            >
              <img src="/copy.svg" alt="Copy" className="w-4 h-4" />
            </button>
          </div>

          <div className="text-xs sm:text-sm font-semibold text-gray-400 mt-1 sm:mt-0">
            {project.time}
          </div>
        </div>

        <div className="mt-5">
          <div className="bg-gray-50 border border-[#EBEDEF] p-4 rounded-lg">
            <p className="font-semibold text-sm sm:text-base">Summary</p>
            <p className="text-sm sm:text-md text-gray-700 mt-3 leading-relaxed">
              {project.summary}
            </p>
          </div>

          <div className="mt-6">
            <h4 className="font-semibold text-sm sm:text-base">
              Key Highlights
            </h4>
            <ul className="list-disc list-inside mt-3 space-y-2 text-gray-700 text-sm sm:text-md">
              {project.highlights.map((h, idx) => (
                <li key={idx} className="font-semibold leading-snug">
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
