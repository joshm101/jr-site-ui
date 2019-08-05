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

import withUploadImages from '../../../../../hoc/withUploadImages'

import './index.css'

const SuccessDialog = (props) => {
  const { displaySuccessNotification } = props.uploadImages
  const { dismissUploadImagesSuccessNotice } = props
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
          to="/interface/images"
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

export default withUploadImages(SuccessDialog)
