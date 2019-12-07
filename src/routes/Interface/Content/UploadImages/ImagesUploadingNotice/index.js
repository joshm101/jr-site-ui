import React from 'react'
import {
  Button,
  Snackbar,
  SnackbarContent,
  Typography
} from '@material-ui/core'
import Check from '@material-ui/icons/Check'

const NOTIFICATION_ID = 'upload-images--images-uploading'

const ImagesUploadingNotice = ({ open, onClose }) => (
  <Snackbar
    open={open}
    autoHideDuration={6000}
    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    onClose={onClose}
  >
    <SnackbarContent
      action={
        <Button
          color="primary"
          size="small"
          onClick={onClose}
        >
          <Check fontSize="inherit" />&nbsp;&nbsp;
          Ok
        </Button>
      }
      message={
        <div>
          <Typography
            style={{ marginBottom: '15px' }}
          >
            Image uploads are currently being processed.
          </Typography>
          <Typography>
            This may take some time depending on your connection
            speed and the total size of the image(s) being uploaded.
          </Typography>
        </div>
      }
    />
  </Snackbar>
)

export default ImagesUploadingNotice
export { NOTIFICATION_ID }
