import { takeEvery, put, call } from 'redux-saga/effects'

import { loginFormSubmittedRoutine } from '../../actions'
import * as loginService from '../../services/login'

/**
 * Submits a request to login the user and dispatches
 * a success/failure action based on request result
 * @param {object} action - login form submitted action object
 * @return {object} Yielded JWT response
 */
function* loginHandler(action) {
  const { username, password } = action.payload
  try {
    const token = yield call(loginService.login, username, password)
    localStorage.setItem('jr-site-auth-token', token)
    yield put(
      loginFormSubmittedRoutine.success()
    )
  } catch (error) {
    yield put(
      loginFormSubmittedRoutine.failure([error.message])
    )
  }
}

function* loginSaga() {
  yield takeEvery(
    loginFormSubmittedRoutine.TRIGGER,
    loginHandler
  )
}

export default loginSaga
