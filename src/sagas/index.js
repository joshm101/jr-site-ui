import { fork, all } from 'redux-saga/effects'

import loginSaga from './login'
import tokenValidSaga from './token-valid'
import getImagesSaga from './get-images'

const sagas = [
  loginSaga,
  tokenValidSaga,
  getImagesSaga
]

export default function* rootSaga() {
  yield all(sagas.map(fork))
}
