import React, { useEffect } from 'react'
import { Typography, CircularProgress } from '@material-ui/core'

import { useImages, useImagesActions } from '../../../hooks'
import ImagesFolder from './ImagesFolder'
import generateImagesByFolder from '../../../utils/generate-images-by-folder'

import './index.css'

function ImagesDisplay() {
  const imagesActions = useImagesActions()

  const imagesState = useImages()
  const { retrievingImages } = imagesState
  const images = imagesState.data
  const imagesByFolder = generateImagesByFolder(images)
  const folders = Object.values(imagesByFolder)

  useEffect(() => {
    if (!imagesState.data.length) {
      imagesActions.getImagesRoutine()
    }
  }, [])

  return (
    <div className="interface-images-display">
      {retrievingImages &&
        <CircularProgress color="secondary" />
      }
      {images.length === 0 && !retrievingImages &&
        <Typography variant="h5" align="center" color="textPrimary">
          No images have been uploaded.
        </Typography>
      }
      {images.length > 0 && !retrievingImages &&
        <div>
          {folders.map(folder =>
            <ImagesFolder
              key={folder.name}
              name={folder.name}
              images={folder.images}
            />
          )}
        </div>
      }
    </div>
  )
}

export default ImagesDisplay
