import React from 'react'
import {
  Button,
  Snackbar,
  SnackbarContent,
  Typography
} from '@material-ui/core'
import Check from '@material-ui/icons/Check'

const ImagesUploadingNotice = ({ open, onClose }) => (
  <Snackbar
    open={open}
    autoHideDuration={6000}
    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    onClose={onClose}
  >
    <SnackbarContent
      className="white-text"
      action={
        <Button
          color="primary"
          size="small"
          onClick={onClose}
          className="white-text"
        >
          <Check fontSize="inherit" />&nbsp;&nbsp;
          Ok
        </Button>
      }
      message={
        <div>
          <Typography
            className="white-text"
            style={{ marginBottom: '15px' }}
          >
            Image uploads are currently being processed.
          </Typography>
          <Typography className="white-text">
            This may take some time depending on your connection
            speed and the total size of the image(s) being uploaded.
          </Typography>
        </div>
      }
    />
  </Snackbar>
)

export default ImagesUploadingNotice
