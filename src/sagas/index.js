import { fork, all } from 'redux-saga/effects'

import loginSaga from './login'
import tokenValidSaga from './token-valid'
import getImagesSaga from './get-images'
import uploadImagesSaga from './upload-images'
import createPostSaga from './create-post'
import getPostsSaga from './get-posts'

const sagas = [
  loginSaga,
  tokenValidSaga,
  getImagesSaga,
  uploadImagesSaga,
  createPostSaga,
  getPostsSaga
]

export default function* rootSaga() {
  yield all(sagas.map(fork))
}
