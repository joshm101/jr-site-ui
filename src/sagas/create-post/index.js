import { takeEvery, call, put } from 'redux-saga/effects'
import { push } from 'connected-react-router'

import {
  createPostRoutine,
  showNotification
} from '../../actions'
import * as postsService from '../../services/posts'

import { SUCCESS_NOTIFICATION_ID } from '../../components/Interface/PostForm'
import { ROUTES } from '../../routes/routes.constants'

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

    yield put(
      showNotification({
        id: SUCCESS_NOTIFICATION_ID,
        props: { message: 'The post was successfully created!' }
      })
    )

    yield put(
      push(`/${ROUTES.INTERFACE}`)
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
