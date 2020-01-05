import { postFormSubmitRoutine } from '../../actions'
import {
  DISMISS_POST_FORM_SUBMIT_SUCCESS_NOTICE,
  DISMISS_POST_FORM_SUBMIT_FAILURE_NOTICE
} from '../../actions/actionTypes'

const initialState = {
  submitting: false,
  errors: [],
  displaySuccessNotification: false
}

const postFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case postFormSubmitRoutine.TRIGGER:
      return {
        ...state,
        submitting: true
      }
    case postFormSubmitRoutine.SUCCESS:
      return {
        ...state,
        submitting: false,
        displaySuccessNotification: true
      }
    case postFormSubmitRoutine.FAILURE:
      return {
        ...state,
        submitting: false,
        errors: action.payload
      }
    case DISMISS_POST_FORM_SUBMIT_SUCCESS_NOTICE:
      return {
        ...state,
        displaySuccessNotification: false
      }
    case DISMISS_POST_FORM_SUBMIT_FAILURE_NOTICE:
      return {
        ...state,
        errors: []
      }
    default:
      return state
  }
}

export default postFormReducer
export { initialState }
