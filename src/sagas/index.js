import { fork, all } from 'redux-saga/effects'

import loginSaga from './login'

const sagas = [
  loginSaga
]

export default function* rootSaga() {
  yield all(sagas.map(fork))
}
