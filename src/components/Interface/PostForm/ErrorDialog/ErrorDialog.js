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

import { usePostForm } from '../../../../hooks'
import { ROUTES } from '../../../../routes/routes.constants'

import styles from './ErrorDialog.styles'

const useStyles = makeStyles(styles)

const ROOT_ELEMENT_ID = 'pf-error-dialog'

const { HOME } = ROUTES.INTERFACE_ROUTES

function ErrorDialog({ children }) {
  const { actions, state } = usePostForm()
  const { errors } = state
  const { dismissFailureNotice } = actions

  return (
    <Dialog
      open={errors.length > 0}
      disableEscapeKeyDown
      disableBackdropClick
      data-test-id={ROOT_ELEMENT_ID}
    >
      {React.Children.map(children, child =>
        React.cloneElement(child)
      )}
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

function ErrorDialogTitle({ children }) {
  return (
    <DialogTitle>{children}</DialogTitle>
  )
}

function ErrorDialogContent({ children }) {
  const classes = useStyles()

  return (
    <DialogContent>
      <div className={classes.icon}>
        <Close />
      </div>
      <DialogContentText>
        {children}
      </DialogContentText>
    </DialogContent>
  )
}

export default ErrorDialog
export {
  ROOT_ELEMENT_ID,
  ErrorDialogTitle,
  ErrorDialogContent
}
