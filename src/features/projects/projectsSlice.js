import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchProjects } from './mockServer'

export const loadProjects = createAsyncThunk('projects/load', async ({ simulate } = {}, thunkAPI) => {
  const res = await fetchProjects({ simulate })
  return res
})

const projectsSlice = createSlice({
  name: 'projects',
  initialState: {
    projects: [],
    notebook: [],
    status: 'idle',
    error: null,
    selectedProjectId: null,
    simulate: 'success'
  },
  reducers: {
    selectProject(state, action) {
      state.selectedProjectId = action.payload
    },
    setSimulate(state, action) {
      state.simulate = action.payload
    }
  },
  extraReducers: builder => {
    builder
      .addCase(loadProjects.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(loadProjects.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.projects = action.payload.projects || []
        state.notebook = action.payload.notebook || []
        if (!state.selectedProjectId && state.projects.length) state.selectedProjectId = state.projects[0].id
      })
      .addCase(loadProjects.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})

export const { selectProject, setSimulate } = projectsSlice.actions
export default projectsSlice.reducer
