import React from 'react'

import Button from '@material-ui/core/Button'
import Snackbar from '@material-ui/core/Snackbar'
import SnackbarContent from '@material-ui/core/SnackbarContent'
import Typography from '@material-ui/core/Typography'
import Check from '@material-ui/icons/Check'
import { makeStyles } from '@material-ui/core/styles'

import styles from './styles'

const useStyles = makeStyles(styles)

const NOTIFICATION_ID = 'post-type-form--failure'

function FailureNotice({ open, onClose, message }) {
  const classes = useStyles()

  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      onClose={onClose}
    >
      <SnackbarContent
        className={classes.failureNoticeContent}
        action={
          <Button
            variant="text"
            size="small"
            onClick={onClose}
            startIcon={<Check fontSize="inherit" />}
          >
            Ok
          </Button>
        }
        message={
          <Typography className="white-text">
            {message}
          </Typography>
        }
      />
    </Snackbar>
  )
}

export default FailureNotice
export { NOTIFICATION_ID }
