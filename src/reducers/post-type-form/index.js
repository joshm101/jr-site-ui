import { postTypeFormSubmitRoutine } from '../../actions'

const initialState = {
  submitting: false,
  errors: []
}

const postTypeFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case postTypeFormSubmitRoutine.TRIGGER:
      return {
        ...state,
        submitting: true
      }
    case postTypeFormSubmitRoutine.SUCCESS:
      return {
        ...state,
        submitting: false
      }
    case postTypeFormSubmitRoutine.FAILURE:
      return {
        ...state,
        submitting: false,
        errors: action.payload
      }
    default:
      return state
  }
}

export default postTypeFormReducer
export { initialState }
