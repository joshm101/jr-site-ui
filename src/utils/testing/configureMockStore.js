import configureStore from 'redux-mock-store'

const middlewares = []
const mockStore = configureStore(middlewares)

function configureMockStore(state = {}) {
  const store = mockStore(state)

  return store
}

export default configureMockStore
