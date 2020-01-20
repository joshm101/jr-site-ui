import { takeEvery, call, put } from 'redux-saga/effects'

import { deletePostRoutine } from '../../actions'
import * as postsService from '../../services/posts'

function* handleDeletePost(action) {
  const { payload: id } = action

  const { deletePost } = postsService

  try {
    const result = yield call(deletePost, id)

    yield put(deletePostRoutine.success(result))
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
