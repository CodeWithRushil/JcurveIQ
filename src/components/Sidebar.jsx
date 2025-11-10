import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectProject } from "../features/projects/projectsSlice";

export default function Sidebar() {
  const dispatch = useDispatch();
  const projects = useSelector((s) => s.projects.projects);
  const selected = useSelector((s) => s.projects.selectedProjectId);
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1152);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) setCollapsed(true);
  }, [isMobile]);

  return (
    <>
      {isMobile && !collapsed && (
        <div
          onClick={() => setCollapsed(true)}
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-20"
        ></div>
      )}

      <aside
        className={`
          ${collapsed ? "w-16" : "w-64"}
          ${isMobile ? "fixed z-30 h-full left-0 top-0" : "relative"}
          border-r border-[#EBEDEF] bg-white flex flex-col justify-between
          transition-all duration-300 ease-in-out
          ${isMobile && collapsed ? "translate-x-0" : ""}
          ${isMobile && !collapsed ? "translate-x-0" : ""}
        `}
        style={{
          transform:
            isMobile && !collapsed
              ? "translateX(0)"
              : isMobile && collapsed
              ? "translateX(0)"
              : "none",
        }}
      >
        {!collapsed ? (
          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img
                src="/star.svg"
                alt="Logo"
                className="w-6 h-6 cursor-pointer"
              />
              <div className="font-semibold text-lg cursor-pointer">LOGO</div>
            </div>
            <img
              src="/collapse.svg"
              alt="Collapse"
              className="w-5 h-5 cursor-pointer transition-transform duration-300"
              onClick={() => setCollapsed(true)}
            />
          </div>
        ) : (
          <div className="flex flex-col items-center mt-4">
            <img
              src="/star.svg"
              alt="Logo"
              className="w-6 h-6 mb-5 cursor-pointer"
            />

            <img
              src="/collapse.svg"
              alt="Expand"
              className="w-5 h-5 cursor-pointer rotate-180 mb-6 transition-transform duration-300"
              onClick={() => setCollapsed(false)}
            />

            <div className="flex flex-col items-center gap-4">
              {[
                { src: "/plus.svg", alt: "New Project" },
                { src: "/search.svg", alt: "Search" },
                { src: "/archived.svg", alt: "Archived" },
              ].map((icon, idx) => (
                <div
                  key={idx}
                  className="p-2 rounded-md hover:bg-gray-100 cursor-pointer transition-all duration-200"
                >
                  <img src={icon.src} alt={icon.alt} className="w-5 h-5" />
                </div>
              ))}
            </div>
          </div>
        )}

        {!collapsed && (
          <div className="p-4 border-b border-[#EBEDEF] space-y-2">
            <button className="cursor-pointer flex items-center gap-3 w-full text-gray-700 hover:bg-gray-50 p-2 rounded">
              <img src="/plus.svg" alt="New Project" className="w-5 h-5" />
              <span className="text-sm font-medium">New Project</span>
            </button>

            <button className="cursor-pointer flex items-center gap-3 w-full text-gray-700 hover:bg-gray-50 p-2 rounded">
              <img src="/search.svg" alt="Search" className="w-5 h-5" />
              <span className="text-sm font-medium">Search in Project</span>
            </button>

            <button className="cursor-pointer flex items-center gap-3 w-full text-gray-700 hover:bg-gray-50 p-2 rounded">
              <img src="/archived.svg" alt="Archived" className="w-5 h-5" />
              <span className="text-sm font-medium">Archived Projects</span>
            </button>
          </div>
        )}

        {!collapsed && (
          <nav className="flex-1 overflow-y-auto">
            <div className="mb-3 mt-4 ml-4 text-sm text-gray-600">
              Your Projects ({projects.length})
            </div>
            <ul>
              {projects.map((p) => (
                <li key={p.id}>
                  <button
                    onClick={() => dispatch(selectProject(p.id))}
                    className={`w-full text-left px-3 py-2 flex items-start gap-3 transition cursor-pointer ${
                      selected === p.id
                        ? "bg-[#F3F5F7] border-r-2 border-[#768EFF]"
                        : "hover:bg-gray-50"
                    }`}
                  >
                    <div className="flex flex-col">
                      <span className="font-medium text-sm">{p.title}</span>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-xs px-2 py-[2px] rounded-sm bg-white text-gray-600 border border-[#768EFF] hover:bg-[#768EFF] hover:text-white transition-all">
                          {p.tag}
                        </span>
                        <span className="text-xs text-gray-400">{p.date}</span>
                      </div>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        )}

        <div
          className={`border-t border-[#EBEDEF] text-sm text-gray-600 flex ${
            collapsed
              ? "flex-col items-center gap-2 py-4"
              : "items-center justify-between p-4"
          }`}
        >
          {collapsed ? (
            <>
              <div className="p-2 rounded-md hover:bg-gray-100 cursor-pointer transition-all duration-200">
                <img src="/settings.svg" alt="Settings" className="w-5 h-5" />
              </div>
              <div className="p-2 rounded-md hover:bg-gray-100 cursor-pointer transition-all duration-200">
                <img src="/user.svg" alt="User" className="w-5 h-5" />
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center gap-2">
                <img
                  src="/user.svg"
                  alt="User"
                  className="w-5 h-5 cursor-pointer"
                />
                <span>User Profile</span>
              </div>
              <img
                src="/settings.svg"
                alt="Settings"
                className="w-5 h-5 cursor-pointer"
              />
            </>
          )}
        </div>
      </aside>
    </>
  );
}
