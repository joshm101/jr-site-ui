import React from 'react'
import { connect } from 'react-redux'

export default (ConnectedComponent) => {
  const withPosts = (props) => (
    <ConnectedComponent {...props} />
  )

  const mapStateToProps = (state) => ({
    posts: state.posts
  })

  return connect(mapStateToProps)(withPosts)
}
