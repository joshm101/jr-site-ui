import {
  loginFormSubmittedRoutine,
  tokenValidityCheckRoutine
} from '../../actions'
import * as actionTypes from '../../actions/actionTypes'

const initialState = {
  loginSubmitting: false,
  tokenValid: false,
  checkingTokenValidity: false,
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
    case tokenValidityCheckRoutine.TRIGGER:
      return handleTokenValidityCheckTrigger(state)
    case tokenValidityCheckRoutine.SUCCESS:
      return handleTokenValidityCheckSuccess(state, action)
    case tokenValidityCheckRoutine.FAILURE:
      return handleTokenValidityCheckFailure(state, action)
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
  tokenValid: true,
  loginSubmitting: false
})

const handleLoginFormSubmittedFailure = (state, action) => ({
  ...state,
  loginSubmitting: false,
  errors: action.payload
})

const handleTokenValidityCheckTrigger = (state) => ({
  ...state,
  checkingTokenValidity: true
})

const handleTokenValidityCheckSuccess = (state, action) => ({
  ...state,
  checkingTokenValidity: false,
  tokenValid: action.payload
})

const handleTokenValidityCheckFailure = (state, action) => ({
  ...state,
  checkingTokenValidity: false,
  tokenValid: false,
  errors: action.payload
})

const handleAuthErrorsDismissed = (state) => ({
  ...state,
  errors: []
})

export default authReducer
