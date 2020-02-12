import React, { useCallback, useState } from 'react'
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
  onAction: _onAction
}) {
  const [ actionTaken, setActionTaken ] = useState(false)
  const dispatch = useDispatch()

  const onAction = useCallback(action => {
    setActionTaken(true)

    if (action === 'confirm') {
      dispatch(deletePostRoutine(post._id))
    }
  }, [dispatch, deletePostRoutine, post])

  return (
    <Dialog
      open={!actionTaken}
      onExited={_onAction}
    >
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
        <Button onClick={() => onAction('cancel')}>
          Cancel
        </Button>
        <Button onClick={() => onAction('confirm')}>
          Delete Post
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default DeletePostDialog
