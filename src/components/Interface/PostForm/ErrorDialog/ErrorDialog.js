import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
  DialogTitle,
  Button
} from '@material-ui/core'
import Close from '@material-ui/icons/Close'

import { useCreatePost } from '../../../../hooks'

import styles from './ErrorDialog.styles'

const useStyles = makeStyles(styles)

const ROOT_ELEMENT_ID = 'pf-error-dialog'

function ErrorDialog() {
  const { actions, state } = useCreatePost()
  const { errors } = state
  const { dismissFailureNotice } = actions

  const classes = useStyles()
  return (
    <Dialog
      open={errors.length > 0}
      disableEscapeKeyDown
      disableBackdropClick
      data-test-id={ROOT_ELEMENT_ID}
    >
      <DialogTitle>
        Create Post Error
      </DialogTitle>
      <DialogContent>
        <div className={classes.icon}>
          <Close />
        </div>
        <DialogContentText>
          An error occurred while creating the post.
          Please check your connection and try again.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button>
          Go to Dashboard
        </Button>
        <Button
          onClick={dismissFailureNotice}
          color="primary"
        >
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default ErrorDialog
export { ROOT_ELEMENT_ID }
