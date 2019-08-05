import React from 'react'
import { Typography } from '@material-ui/core'

function PostTitle(props) {
  const { title } = props

  return (
    <Typography variant="h3" color="textPrimary">
      {title}
    </Typography>
  )
}

export default PostTitle
