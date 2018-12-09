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
      typeof window.window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'
    ) ? window.window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => { return f }
  )
)(createStore)

const store = createStoreWithMiddleware(rootReducer)

sagaMiddleware.run(rootSaga)

export default store
