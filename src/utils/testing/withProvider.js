import React from 'react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

export default (Component, initialState = {}) => {
  const mockStore = configureStore(initialState)
  const mockStoreInitialState = mockStore(initialState)

  const withProvider = props => (
    <Provider store={mockStoreInitialState}>
      <Component {...props} />
    </Provider>
  )

  return withProvider
}
