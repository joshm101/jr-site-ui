import { fork, all } from 'redux-saga/effects'

import loginSaga from './login'
import tokenValidSaga from './token-valid'
import getImagesSaga from './get-images'
import uploadImagesSaga from './upload-images'
import postFormSubmitSaga from './post-form-submit'
import postTypeFormSubmitSaga from './post-type-form-submit'
import getPostsSaga from './get-posts'
import deletePostSaga from './delete-post'
import getPostTypesSaga from './get-post-types'

const sagas = [
  loginSaga,
  tokenValidSaga,
  getImagesSaga,
  uploadImagesSaga,
  postFormSubmitSaga,
  postTypeFormSubmitSaga,
  getPostsSaga,
  deletePostSaga,
  getPostTypesSaga
]

export default function* rootSaga() {
  yield all(sagas.map(fork))
}
