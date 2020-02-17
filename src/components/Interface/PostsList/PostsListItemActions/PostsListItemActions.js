import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import IconButton from '@material-ui/core/IconButton'

import DeleteIcon from '@material-ui/icons/DeleteForever'
import EditIcon from '@material-ui/icons/Edit'

import { usePosts } from '../../../../hooks'

import styles from '../styles'

const useStyles = makeStyles(styles)

function PostsListItemActions({
  post,
  onDeleteClick: _onDeleteClick
}) {
  const classes = useStyles()
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
    _onDeleteClick && _onDeleteClick()
  }

  return (
    <div className={classes.listItemActions}>
      <IconButton onClick={onActionClick(onEditClick)}>
        <EditIcon />
      </IconButton>
      <IconButton onClick={onActionClick(onDeleteClick)}>
        <DeleteIcon />
      </IconButton>
    </div>
  )
}

export default PostsListItemActions
