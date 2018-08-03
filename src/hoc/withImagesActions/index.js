import React from 'react'
import { connect } from 'react-redux'

import { getImagesRoutine } from '../../actions'

export default (ComposedComponent) => {
  const withImagesActions = (props) => (
    <ComposedComponent {...props} />
  )

  const mapDispatchToProps = {
    getImagesRoutine
  }

  return connect(null, mapDispatchToProps)(withImagesActions)
}
