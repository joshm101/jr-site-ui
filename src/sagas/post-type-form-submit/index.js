import { takeEvery, call, put } from 'redux-saga/effects'

import {
  postTypeFormSubmitRoutine,
  getPostTypesRoutine,
  showNotification
} from '../../actions'
import * as postTypesService from '../../services/post-types'
import {
  SUCCESS_NOTIFICATION_ID,
  FAILURE_NOTIFICATION_ID
} from '../../components/Interface/PostTypeFormDialog'

function* handlePostTypeFormSubmit(action) {
  const { payload } = action
  const isEdit = payload.id

  const { createPostType, updatePostType } = postTypesService

  const args = isEdit ? (
    [payload.id, payload.data]
  ) : [payload.data]

  try {
    const result = yield call(
      isEdit ? updatePostType : createPostType,
      ...args
    )

    yield put(
      postTypeFormSubmitRoutine.success(result)
    )

    const message = isEdit ? (
      'The post type was successfully updated!'
    ) : 'The post type was successfully created!'

    yield put(
      showNotification({
        id: SUCCESS_NOTIFICATION_ID,
        props: { message }
      })
    )

    yield put(getPostTypesRoutine())
  } catch (error) {
    yield put(
      postTypeFormSubmitRoutine.failure([error.message])
    )

    yield put(
      showNotification({
        id: FAILURE_NOTIFICATION_ID,
        props: { message: error.message }
      })
    )
  }
}

function* postTypeFormSubmitSaga() {
  yield takeEvery(
    postTypeFormSubmitRoutine.TRIGGER,
    handlePostTypeFormSubmit
  )
}

export default postTypeFormSubmitSaga
export { handlePostTypeFormSubmit }
