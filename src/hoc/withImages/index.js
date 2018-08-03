import React from 'react'
import { connect } from 'react-redux'

export default (ComposedComponent) => {
  const withImages = (props) => (
    <ComposedComponent {...props} />
  )

  const mapStateToProps = (state) => ({
    images: state.images
  })

  return connect(mapStateToProps)(withImages)
}
