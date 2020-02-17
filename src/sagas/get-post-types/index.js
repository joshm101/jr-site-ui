import { takeEvery, call, put } from 'redux-saga/effects'

import { getPostTypesRoutine } from '../../actions'
import * as postTypesService from '../../services/post-types'

function* handleGetPostTypes() {
  try {
    const result = yield call(postTypesService.getPostTypes)

    yield put(
      getPostTypesRoutine.success(result)
    )
  } catch (error) {
    yield put(
      getPostTypesRoutine.failure([error])
    )
  }
}

function* getPostTypesSaga() {
  yield takeEvery(
    getPostTypesRoutine.TRIGGER,
    handleGetPostTypes
  )
}

export default getPostTypesSaga
export { handleGetPostTypes }
