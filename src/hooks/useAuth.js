import { useSelector, useDispatch } from 'react-redux'

import {
  loginFormSubmittedRoutine,
  tokenValidityCheckRoutine,
  clearAuthErrors
} from '../actions'

function useAuth() {
  const dispatch = useDispatch()
  const authState = useSelector(state => state.auth)

  const authActions = {
    loginFormSubmittedRoutine: (...args) => dispatch(
      loginFormSubmittedRoutine(...args)
    ),
    tokenValidityCheckRoutine: (...args) => dispatch(
      tokenValidityCheckRoutine(...args)
    ),
    clearAuthErrors: (...args) => dispatch(
      clearAuthErrors(...args)
    )
  }

  return { state: authState, actions: authActions }
}

export default useAuth
