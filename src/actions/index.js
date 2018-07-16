import { createRoutine } from 'redux-saga-routines'

import * as actionTypes from './actionTypes'

export const authErrorsDismissed = () => ({
  type: actionTypes.AUTH_ERRORS_DISMISSED
})

export const loginFormSubmittedRoutine = createRoutine('LOGIN_FORM_SUBMITTED')
