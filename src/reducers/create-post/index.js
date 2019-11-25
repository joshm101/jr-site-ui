import { createPostRoutine } from '../../actions'
import {
  DISMISS_CREATE_POST_SUCCESS_NOTICE,
  DISMISS_CREATE_POST_FAILURE_NOTICE
} from '../../actions/actionTypes'

const initialState = {
  submitting: false,
  errors: [],
  displaySuccessNotification: false
}

const createPostReducer = (state = initialState, action) => {
  switch (action.type) {
    case createPostRoutine.TRIGGER:
      return {
        ...state,
        submitting: true
      }
    case createPostRoutine.SUCCESS:
      return {
        ...state,
        submitting: false,
        displaySuccessNotification: true
      }
    case createPostRoutine.FAILURE:
      return {
        ...state,
        submitting: false,
        errors: action.payload
      }
    case DISMISS_CREATE_POST_SUCCESS_NOTICE:
      return {
        ...state,
        displaySuccessNotification: false
      }
    case DISMISS_CREATE_POST_FAILURE_NOTICE:
      return {
        ...state,
        errors: []
      }
    default:
      return state
  }
}

export default createPostReducer
export { initialState }
