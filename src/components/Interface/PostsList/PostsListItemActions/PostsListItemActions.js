import React from 'react'

import IconButton from '@material-ui/core/IconButton'
import Grid from '@material-ui/core/Grid'

import DeleteIcon from '@material-ui/icons/DeleteForever'
import EditIcon from '@material-ui/icons/Edit'

function PostsListItemActions() {
  return (
    <Grid container justify="flex-end">
      <IconButton>
        <EditIcon />
      </IconButton>
      <IconButton>
        <DeleteIcon />
      </IconButton>
    </Grid>
  )
}

export default PostsListItemActions
