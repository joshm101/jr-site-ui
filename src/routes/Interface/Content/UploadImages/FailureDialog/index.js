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

import { useUploadImages } from '../../../../../hooks'

import './index.css'
import styles from './styles'

const useStyles = makeStyles(styles)

function FailureDialog() {
  const { actions, state } = useUploadImages()
  const { errors } = state
  const { dismissUploadImagesFailureNotice } = actions

  const classes = useStyles()
  return (
    <Dialog
      open={errors.length > 0}
      disableEscapeKeyDown
      disableBackdropClick
    >
      <DialogTitle>
        Upload Failure
      </DialogTitle>
      <DialogContent>
        <div className={classes.icon}>
          <Close />
        </div>
        <DialogContentText>
          An error occurred while uploading the image(s).
          Please check your connection and try again.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={dismissUploadImagesFailureNotice}
          color="primary"
          className="white-text"
        >
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default FailureDialog
