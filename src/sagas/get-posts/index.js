import { takeEvery, call, put } from 'redux-saga/effects'

import { getPostsRoutine } from '../../actions'
import * as postsService from '../../services/posts'

function* handleGetPosts(action) {
  const { payload } = action

  try {
    const result = yield call(
      postsService.getPosts,
      payload
    )

    yield put(
      getPostsRoutine.success(result)
    )
  } catch (error) {
    yield put(
      getPostsRoutine.failure([error])
    )
  }
}

function* getPostsSaga() {
  yield takeEvery(
    getPostsRoutine.TRIGGER,
    handleGetPosts
  )
}

export default getPostsSaga
