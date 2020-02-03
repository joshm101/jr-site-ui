import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'
import DialogTitle from '@material-ui/core/DialogTitle'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import { deletePostRoutine } from '../../../actions'

function DeletePostDialog({
  post,
  open,
  onCancel,
  onConfirm: _onConfirm
}) {
  const dispatch = useDispatch()

  const onConfirm = useCallback(() => {
    _onConfirm && _onConfirm()
    dispatch(deletePostRoutine(post._id))
  }, [dispatch, deletePostRoutine, post])

  return (
    <Dialog open={open}>
      <DialogTitle>
        Delete &quot;{post && post.title}&quot;
      </DialogTitle>
      <DialogContent>
        <Typography>
          Are you sure you want to delete &quot;{post && post.title}&quot;?
        </Typography>
        <Typography variant="body1">
          This action cannot be undone.
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel}>
          Cancel
        </Button>
        <Button onClick={onConfirm}>
          Delete Post
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default DeletePostDialog
