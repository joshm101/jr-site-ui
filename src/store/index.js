import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from '../reducers'
import rootSaga from '../sagas'

const sagaMiddleware = createSagaMiddleware()

const middleware = [
  sagaMiddleware
]

const createStoreWithMiddleware = compose(
  applyMiddleware(...middleware),
  (
    (
      typeof window === 'object' &&
      typeof window.devToolsExtension !== 'undefined'
    ) ? window.devToolsExtension() : (f) => { return f }
  )
)(createStore)

const store = createStoreWithMiddleware(rootReducer)

sagaMiddleware.run(rootSaga)

export default store
