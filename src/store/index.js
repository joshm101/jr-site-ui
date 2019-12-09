import { createStore, applyMiddleware, compose } from 'redux'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import createSagaMiddleware from 'redux-saga'

import createRootReducer from '../reducers'
import rootSaga from '../sagas'

const history = createBrowserHistory()

const sagaMiddleware = createSagaMiddleware()

const middleware = [
  sagaMiddleware,
  routerMiddleware(history)
]

const withMiddleware = compose(
  applyMiddleware(...middleware),
  (
    (
      typeof window === 'object' &&
      typeof window.window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'
    ) ? window.window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => { return f }
  )
)

const configureStore = () => createStore(
  createRootReducer(history),
  undefined,
  withMiddleware
)

const store = configureStore()

sagaMiddleware.run(rootSaga)

export default store
export { history }
