import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSimulate, loadProjects } from '../features/projects/projectsSlice'

export default function DevControls() {
  const dispatch = useDispatch()
  const simulate = useSelector(s => s.projects.simulate)

  const run = (mode) => {
    dispatch(setSimulate(mode))
    dispatch(loadProjects({ simulate: mode }))
  }

  return (
    <div className="flex flex-wrap gap-2 items-center mb-4">
      <span className="text-xs text-gray-500 whitespace-nowrap">Simulate:</span>

      {['success', 'loading', 'error', 'empty'].map((m) => (
        <button
          key={m}
          onClick={() => run(m)}
          className={
            `text-sm px-3 py-1.5 rounded border border-[#768EFF] cursor-pointer transition-colors duration-200 ` +
            (simulate === m
              ? 'bg-[#768EFF] text-white'
              : 'bg-white text-[#768EFF] hover:bg-[#E9ECFF]')
          }
        >
          {m.charAt(0).toUpperCase() + m.slice(1)}
        </button>
      ))}
    </div>
  )
}