import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'
import './index.css'
import App from './App'

const USERS_API_URL = process.env.REACT_APP_USERS_API_URL

const validEnv = () => (
  !!(USERS_API_URL)
)

ReactDOM.render(
  (validEnv()
    ? (
      <Provider store={store}>
        <App />
      </Provider>
    ) : (
      <div className="error-wrapper">
        <div className="error">
          <h2>
            Necessary environment variables not set.
          </h2>
          <h3>
            This application cannot start.
          </h3>
        </div>
      </div>
    )
  ),
  document.getElementById('root')
)
