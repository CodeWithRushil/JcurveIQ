import data from './mockData.json'

export async function fetchProjects({ simulate = 'success', delay = 700 } = {}) {
  if (simulate === 'loading') {
    return new Promise(() => {})
  }
  await new Promise(r => setTimeout(r, delay))
  if (simulate === 'error') throw new Error('Failed to load projects')
  if (simulate === 'empty') return { projects: [] , notebook: [] }
  return data
}
