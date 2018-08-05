import { fork, all } from 'redux-saga/effects'

import loginSaga from './login'
import tokenValidSaga from './token-valid'
import getImagesSaga from './get-images'
import uploadImagesSaga from './upload-images'

const sagas = [
  loginSaga,
  tokenValidSaga,
  getImagesSaga,
  uploadImagesSaga
]

export default function* rootSaga() {
  yield all(sagas.map(fork))
}
