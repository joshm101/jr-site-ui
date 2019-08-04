import React from 'react'
import {
  Button,
  CircularProgress
} from '@material-ui/core'
import CloudUpload from '@material-ui/icons/CloudUpload'

const SubmitButton = ({ onClick, uploadingImages }) => {
  let button
  if (uploadingImages) {
    button = (
      <Button
        variant="contained"
        color="primary"
        disabled={uploadingImages}
        onClick={onClick}
      >
        <CircularProgress
          fontSize="inherit"
          size={15}
        />
        &nbsp;&nbsp;
        Uploading selected images...
      </Button>
    )
  } else {
    button = (
      <Button
        variant="contained"
        color="primary"
        disabled={uploadingImages}
        onClick={onClick}
      >
        <CloudUpload />
        &nbsp;&nbsp;
        Upload selected images
      </Button>
    )
  }
  return (
    <div>
      {button}
    </div>
  )
}

export default SubmitButton
