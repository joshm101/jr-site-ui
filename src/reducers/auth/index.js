import { loginFormSubmittedRoutine } from '../../actions'
import * as actionTypes from '../../actions/actionTypes'

const initialState = {
  loginSubmitting: false,
  errors: []
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case loginFormSubmittedRoutine.TRIGGER:
      return handleLoginFormSubmittedTrigger(state)
    case loginFormSubmittedRoutine.SUCCESS:
      return handleLoginFormSubmittedSuccess(state, action)
    case loginFormSubmittedRoutine.FAILURE:
      return handleLoginFormSubmittedFailure(state, action)
    case actionTypes.AUTH_ERRORS_DISMISSED:
      return handleAuthErrorsDismissed(state)
    default:
      return state
  }
}

const handleLoginFormSubmittedTrigger = (state) => ({
  ...state,
  loginSubmitting: true
})

const handleLoginFormSubmittedSuccess = (state, action) => ({
  ...state,
  loginSubmitting: false
})

const handleLoginFormSubmittedFailure = (state, action) => ({
  ...state,
  loginSubmitting: false,
  errors: action.payload
})

const handleAuthErrorsDismissed = (state) => ({
  ...state,
  errors: []
})

export default authReducer
