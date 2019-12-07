import React from 'react'
import Snackbar from '@material-ui/core/Snackbar'

import { useAuth } from '../../../hooks'

function LoginAuthErrorNotice({ onClose }) {
  const { state } = useAuth()

  const { errors: authErrors } = state

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left'
      }}
      autoHideDuration={3000}
      open={authErrors.length > 0}
      onClose={onClose}
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
