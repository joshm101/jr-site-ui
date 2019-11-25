import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Fab,
  CircularProgress
} from '@material-ui/core'
import CloudUpload from '@material-ui/icons/CloudUpload'

import styles from './styles'

const useStyles = makeStyles(styles)

const SubmitButton = ({ onClick, uploadingImages }) => {
  const classes = useStyles()

  const fabContent = uploadingImages ? (
    <>
      <CircularProgress
        // fontSize="inherit"
        size={15}
      />
      &nbsp;&nbsp;
      Uploading...
      &nbsp;&nbsp;
    </>
  ) : (
    <>
      <CloudUpload />
      &nbsp;&nbsp;
      Upload
      &nbsp;&nbsp;
    </>
  )

  const ariaLabel = uploadingImages ? 'uploading' : 'upload'

  return (
    <Fab
      color="secondary"
      disabled={uploadingImages}
      onClick={onClick}
      aria-label={ariaLabel}
      variant="extended"
      className={classes.fab}
      classes={{ disabled: classes.fabDisabled }}
    >
      {fabContent}
    </Fab>
  )
}

export default SubmitButton
