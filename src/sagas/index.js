import { fork, all } from 'redux-saga/effects'

import loginSaga from './login'
import tokenValidSaga from './token-valid'

const sagas = [
  loginSaga,
  tokenValidSaga
]

export default function* rootSaga() {
  yield all(sagas.map(fork))
}
