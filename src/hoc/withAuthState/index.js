import React from 'react'
import { connect } from 'react-redux'

export default (ConnectedComponent) => {
  const withAuthState = props => (
    <ConnectedComponent {...props} />
  )

  const mapStateToProps = (state) => ({
    auth: state.auth
  })

  return connect(
    mapStateToProps
  )(withAuthState)
}
