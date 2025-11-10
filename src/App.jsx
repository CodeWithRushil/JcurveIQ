import React, { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import ProjectDetail from "./components/ProjectDetail";
import NotebookPanel from "./components/NotebookPanel";
import ChatInput from "./components/ChatInput";
import { useDispatch, useSelector } from "react-redux";
import { loadProjects } from "./features/projects/projectsSlice";

export default function App() {
  const dispatch = useDispatch();
  const simulate = useSelector((s) => s.projects.simulate);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    dispatch(loadProjects({ simulate }));
  }, [dispatch, simulate]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1152);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="h-screen flex relative">
      <Sidebar />
      <main
        className={`
          flex-1 overflow-auto flex flex-col justify-between transition-all duration-300
          ${isMobile ? "ml-16" : ""}
        `}
      >
        <div className="max-w-6xl mx-auto px-6 py-6 flex-1">
          <ProjectDetail />
        </div>
        <div className="max-w-6xl mx-auto w-full px-6 pb-6">
          <ChatInput />
        </div>
      </main>
      <aside className="hidden lg:flex w-96 border-l border-[#EBEDEF] bg-[#F3F5F7] flex-col justify-between">
        <div className="flex-1 overflow-y-auto">
          <NotebookPanel />
        </div>
      </aside>
    </div>
  );
}
