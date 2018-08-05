import React from 'react'
import { Button, Snackbar, SnackbarContent } from '@material-ui/core'
import Check from '@material-ui/icons/Check'

const InvalidFilesNotice = ({ open, invalidFiles, onClose }) => (
  <Snackbar
    open={open}
    autoHideDuration={6000}
    variant="warning"
    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
  >
    <SnackbarContent
      style={{ backgroundColor: '#ffa000', color: '#000' }}
      action={
        <Button
          color="primary"
          size="small"
          onClick={onClose}
        >
          <Check fontSize="inherit" />&nbsp;&nbsp;
          Got it
        </Button>
      }
      message={
        <div>
          <p>
        The following unsupported files have been ignored:
          </p>
          <ul>
            {
              invalidFiles.map(invalidFile =>
                <li key={invalidFile.name}>
                  {invalidFile.name}
                </li>
              )
            }
          </ul>
        </div>
      }
    />
  </Snackbar>
)

export default InvalidFilesNotice
