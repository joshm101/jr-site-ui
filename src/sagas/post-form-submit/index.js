import { takeEvery, call, put } from 'redux-saga/effects'
import { push } from 'connected-react-router'

import {
  postFormSubmitRoutine,
  showNotification
} from '../../actions'
import * as postsService from '../../services/posts'

import { SUCCESS_NOTIFICATION_ID } from '../../components/Interface/PostForm'
import { ROUTES } from '../../routes/routes.constants'

function* handlePostFormSubmit(action) {
  const { payload } = action

  const isEdit = payload.id

  const { createPost, updatePost } = postsService

  try {
    const result = yield call(
      isEdit ? updatePost : createPost,
      payload.data
    )

    console.log('result: ', result)

    yield put(
      postFormSubmitRoutine.success(result)
    )

    const message = isEdit ? (
      'The post was successfully updated!'
    ) : 'The post was successfully created!'

    yield put(
      showNotification({
        id: SUCCESS_NOTIFICATION_ID,
        props: { message }
      })
    )

    yield put(
      push(`/${ROUTES.INTERFACE}`)
    )
  } catch (error) {
    yield put(
      postFormSubmitRoutine.failure([error])
    )
  }
}

function* postFormSubmitSaga() {
  yield takeEvery(
    postFormSubmitRoutine.TRIGGER,
    handlePostFormSubmit
  )
}

export default postFormSubmitSaga
export { handlePostFormSubmit }
