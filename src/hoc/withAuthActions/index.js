import React from 'react'
import { connect } from 'react-redux'

import {
  loginFormSubmittedRoutine,
  authErrorsDismissed
} from '../../actions'

export default (ConnectedComponent) => {
  const withAuthActions = props => (
    <ConnectedComponent {...props} />
  )

  const mapDispatchToProps = {
    loginFormSubmittedRoutine,
    authErrorsDismissed
  }

  return connect(
    undefined, mapDispatchToProps
  )(withAuthActions)
}
