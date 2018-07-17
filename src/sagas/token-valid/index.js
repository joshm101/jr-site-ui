import { takeEvery, put, call } from 'redux-saga/effects'

import { tokenValidityCheckRoutine } from '../../actions'
import * as tokenValidityService from '../../services/token-valid'

/**
 * Submits a request to check the validity of the provided
 * tokenand dispatches a success/failure action based on
 * request result
 * @param {object} action - token validity check action object
 * @return {object} Yielded token validity check response
 */
function* tokenValidHandler(action) {
  const token = action.payload
  try {
    const result = yield call(tokenValidityService.tokenValid, token)
    yield put(
      tokenValidityCheckRoutine.success(result)
    )
  } catch (error) {
    yield put(
      tokenValidityCheckRoutine.failure([error.message])
    )
  }
}

function* tokenValidSaga() {
  yield takeEvery(
    tokenValidityCheckRoutine.TRIGGER,
    tokenValidHandler
  )
}

export default tokenValidSaga
