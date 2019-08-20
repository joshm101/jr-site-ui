import React from 'react'
import {
  Card,
  Button,
  CardActions,
  CardMedia
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import Close from '@material-ui/icons/Close'

import styles from './styles'

const useStyles = makeStyles(styles)

const UploadPreviewImage = ({
  src,
  uploadingImages,
  onClick
}) => {
  const classes = useStyles()

  return (
    <Card>
      <CardMedia
        image={src}
        title="Upload preview image"
        className={classes.image}
      />
      <CardActions>
        <Button
          color="secondary"
          size="small"
          disabled={uploadingImages}
          onClick={onClick}
        >
          <span className={classes.actionIcon}>
            <Close fontSize="small" />
          </span>
          Remove Image
        </Button>
      </CardActions>
    </Card>
  )
}

export default UploadPreviewImage
