import React from 'react'

import Title from './Title'
import Images from './Images'
import Description from './Description'
import Group from './Group'

function PostDetails(props) {
  const { post, children } = props

  return (
    React.Children.map(children, child => (
      React.cloneElement(
        child,
        {...post}
      )
    ))
  )
}

PostDetails.Title = Title
PostDetails.Images = Images
PostDetails.Description = Description
PostDetails.Group = Group

export default PostDetails
