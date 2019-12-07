import React from 'react'
import Snackbar from '@material-ui/core/Snackbar'

import { useAuth } from '../../../hooks'

const NOTIFICATION_ID = 'login--auth-error'

function LoginAuthErrorNotice({ open, onClose }) {
  const { state, actions } = useAuth()

  const { errors: authErrors } = state

  const onNotificationClose = () => {
    onClose()
    actions.clearAuthErrors()
  }

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left'
      }}
      autoHideDuration={3000}
      open={open}
      onClose={onNotificationClose}
      message={
        authErrors.map(authError =>
          <div key={authError}>
            {authError}
          </div>
        )
      }
    />
  )
}

export default LoginAuthErrorNotice
export { NOTIFICATION_ID }
