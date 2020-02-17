import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
  DialogTitle,
  Button
} from '@material-ui/core'
import Check from '@material-ui/icons/Check'
import { Link } from 'react-router-dom'

import { useUploadImages } from '../../../../../hooks'

import { ROUTES } from '../../../../routes.constants'

import './index.css'

const { IMAGES } = ROUTES.INTERFACE_ROUTES

function SuccessDialog() {
  const { state, actions } = useUploadImages()
  const { displaySuccessNotification } = state
  const { dismissUploadImagesSuccessNotice } = actions
  return (
    <Dialog
      open={displaySuccessNotification}
      disableEscapeKeyDown
      disableBackdropClick
    >
      <DialogTitle>
        Upload Success
      </DialogTitle>
      <DialogContent>
        <div className="upload-success-dialog-icon-wrapper">
          <Check />
        </div>
        <DialogContentText>
          The images were successfully uploaded!
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Link
          style={{ textDecoration: 'none' }}
          to={`/${ROUTES.INTERFACE}/${IMAGES}`}
        >
          <Button
            onClick={dismissUploadImagesSuccessNotice}
            color="primary"
            className="white-text"
          >
            Ok
          </Button>
        </Link>
      </DialogActions>
    </Dialog>
  )
}

export default SuccessDialog
