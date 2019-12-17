import React from 'react'

import Button from '@material-ui/core/Button'
import Snackbar from '@material-ui/core/Snackbar'
import SnackbarContent from '@material-ui/core/SnackbarContent'
import Typography from '@material-ui/core/Typography'
import Check from '@material-ui/icons/Check'
import { makeStyles } from '@material-ui/core/styles'

import styles from './SuccessNotice.styles'

const useStyles = makeStyles(styles)

const NOTIFICATION_ID = 'post-form--success'

function SuccessNotice({ open, onClose, message }) {
  const classes = useStyles()

  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      onClose={onClose}
    >
      <SnackbarContent
        className={classes.content}
        action={
          <Button
            variant="text"
            size="small"
            onClick={onClose}
          >
            <Check fontSize="inherit" />&nbsp;&nbsp;
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

export default SuccessNotice
export { NOTIFICATION_ID }
