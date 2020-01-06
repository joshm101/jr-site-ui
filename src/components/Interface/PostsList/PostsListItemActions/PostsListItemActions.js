import React from 'react'

import IconButton from '@material-ui/core/IconButton'
import Grid from '@material-ui/core/Grid'

import DeleteIcon from '@material-ui/icons/DeleteForever'
import EditIcon from '@material-ui/icons/Edit'

import { usePosts } from '../../../../hooks'

function PostsListItemActions({ post }) {
  const { actions } = usePosts()
  const { editPost } = actions

  const onActionClick = fn => event => {
    event.preventDefault()
    event.stopPropagation()

    fn()
  }

  const onEditClick = () => {
    editPost(post._id)
  }

  const onDeleteClick = () => {
    console.log('delete clicked')
  }

  return (
    <Grid container justify="flex-end">
      <IconButton onClick={onActionClick(onEditClick)}>
        <EditIcon />
      </IconButton>
      <IconButton onClick={onActionClick(onDeleteClick)}>
        <DeleteIcon />
      </IconButton>
    </Grid>
  )
}

export default PostsListItemActions
