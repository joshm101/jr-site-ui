import { useSelector, useDispatch } from 'react-redux'

import {
  loginFormSubmittedRoutine,
  tokenValidityCheckRoutine,
  authErrorsDismissed
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
    authErrorsDismissed: (...args) => dispatch(
      authErrorsDismissed(...args)
    )
  }

  return { state: authState, actions: authActions }
}

export default useAuth
