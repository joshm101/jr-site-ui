import { fork, all } from 'redux-saga/effects'

const sagas = []

export default function* rootSaga() {
  yield all(sagas.map(fork))
}
