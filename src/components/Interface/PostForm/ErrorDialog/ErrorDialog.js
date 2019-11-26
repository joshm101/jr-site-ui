import React from 'react'
import { Link } from 'react-router-dom'
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
import { ROUTES } from '../../../../routes/routes.constants'

import styles from './ErrorDialog.styles'

const useStyles = makeStyles(styles)

const ROOT_ELEMENT_ID = 'pf-error-dialog'

const { HOME } = ROUTES.INTERFACE_ROUTES

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
        <Link to={HOME} style={{ textDecoration: 'none' }}>
          <Button onClick={dismissFailureNotice}>
            Go to Dashboard
          </Button>
        </Link>
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
