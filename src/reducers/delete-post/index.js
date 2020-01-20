import { deletePostRoutine } from '../../actions'

const initialState = {
  submittingRequest: false,
  errors: []
}

const deletePostReducer = (state = initialState, action) => {
  switch (action.type) {
    case deletePostRoutine.TRIGGER:
      return {
        ...state,
        submittingRequest: true
      }
    case deletePostRoutine.SUCCESS:
      return {
        ...state,
        submittingRequest: false
      }
    case deletePostRoutine.FAILURE:
      return {
        ...state,
        submittingRequest: false,
        errors: action.payload
      }
    default:
      return state
  }
}

export default deletePostReducer
export { initialState }
