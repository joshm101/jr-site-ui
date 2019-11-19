import { takeEvery, call, put } from 'redux-saga/effects'

import { createPostRoutine } from '../../actions'
import * as postsService from '../../services/posts'

function* handleCreatePost(action) {
  const { payload } = action

  try {
    const result = yield call(
      postsService.createPost,
      payload
    )

    yield put(
      createPostRoutine.success(result)
    )
  } catch (error) {
    yield put(
      createPostRoutine.failure([error])
    )
  }
}

function* createPostSaga() {
  yield takeEvery(
    createPostRoutine.TRIGGER,
    handleCreatePost
  )
}

export default createPostSaga
