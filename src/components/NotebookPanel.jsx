import React from "react";
import { useSelector } from "react-redux";
import DevControls from "./DevControls";

export default function NotebookPanel() {
  const notebook = useSelector((s) => s.projects.notebook || []);

  return (
    <div className="h-full flex flex-col bg-[#F3F5F7]">
      <div className="w-full flex items-center justify-between border-b border-[#EBEDEF] bg-white px-6 py-5">
        <div className="flex items-center gap-3">
          <h2 className="text-2xl font-semibold text-gray-800">Notebook</h2>
          <img
            src="/notebook.svg"
            alt="Notebook Icon"
            className="w-4 h-4 cursor-pointer"
          />
        </div>
      </div>

      <div className="flex-1 p-4 overflow-y-auto">
        <div className="flex items-center justify-between mb-4">
          <div className="relative w-8/9">
            <input
              placeholder="Search"
              className="w-full p-2 pl-4 bg-white rounded border border-[#E0E0E0] focus:outline-none"
            />
            <span className="absolute inset-y-0 right-3 flex items-center text-gray-400">
              <img
                src="/search.svg"
                alt="Notebook Icon"
                className="w-4 h-4 cursor-pointer"
              />
            </span>
          </div>
          <img
            src="/glass.svg"
            alt="Filter"
            className="w-5 h-5 cursor-pointer"
          />
        </div>

        <div className="space-y-3 mb-6">
          {notebook.map((n) => (
            <div key={n.id} className="bg-white p-3 rounded shadow-sm">
              <div className="font-medium mt-1">{n.title}</div>
              <div className="text-sm text-gray-500">{n.time}</div>
              <p className="text-sm text-gray-600 mt-2">{n.content}</p>
            </div>
          ))}
        </div>

        <div className="mt-2">
          <DevControls />
        </div>
      </div>
    </div>
  );
}
