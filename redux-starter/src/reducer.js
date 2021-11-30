import * as actions from './actionTypes'

let lastId = 0

export default function reducer(state = [], action) {
  if (action.type === actions.BUG_ADDED)
    return [
      ...state,
      {
        id: lastId++,
        description: action.payload.description,
        resolved: false
      }
    ]
  else if (action.type === actions.BUG_REMOVED)
    return state.filter(bug => bug.id !== action.payload.id)

  else if (action.type === actions.BUG_RESOLVED)
    // if the bug id does not equal to the bug that was resolved, return the bug or return a copy of that bug (new bug obj) where the resolved property is set to true
    return state.map(bug =>
      bug.id !== action.payload.id ? bug : { ...bug, resolved: true })

  // or return the current state
  return state
}