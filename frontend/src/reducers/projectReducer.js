import projectService from '../services/projects'

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT_PROJECTS':
      return action.data
    default:
      return state
  }
}

export const initializeProjects = () => {
  return async dispatch => {
    const projects = await projectService.getAllProjects()
    console.log(projects)
    dispatch({
      type: 'INIT_PROJECTS',
      data: projects
    })
  }
}
export default reducer
