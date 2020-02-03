import { takeEvery, call, put } from 'redux-saga/effects'

import {
  deletePostRoutine,
  getPostsRoutine,
  showNotification
} from '../../actions'
import * as postsService from '../../services/posts'

import {
  NOTIFICATION_ID as SUCCESS_NOTIFICATION_ID
} from '../../components/Interface/DeletePostSuccessNotice'

function* handleDeletePost(action) {
  const { payload: id } = action

  const { deletePost } = postsService

  try {
    const result = yield call(deletePost, id)
    const successMessage = 'The post was successfully deleted!'
    yield put(deletePostRoutine.success(result))
    yield put(getPostsRoutine())
    yield put(
      showNotification({
        id: SUCCESS_NOTIFICATION_ID,
        props: { message: successMessage }
      })
    )
  } catch (error) {
    yield put(deletePostRoutine.failure([error.message]))
  }
}

function* deletePostSaga() {
  yield takeEvery(
    deletePostRoutine.TRIGGER,
    handleDeletePost
  )
}

export default deletePostSaga
export { handleDeletePost }
