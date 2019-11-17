import React from 'react'
import { Typography, CircularProgress } from '@material-ui/core'

import { useImages } from '../../../hooks'
import ImagesFolder from './ImagesFolder'
import generateImagesByFolder from '../../../utils/generate-images-by-folder'

import './index.css'

function ImagesDisplay() {
  const imagesState = useImages()
  const { retrievingImages } = imagesState
  const images = imagesState.data
  const imagesByFolder = generateImagesByFolder(images)
  const folders = Object.values(imagesByFolder)
  return (
    <div className="interface-images-display">
      {images.length === 0 && !retrievingImages &&
        <Typography variant="h5" align="center" color="textPrimary">
          No images have been uploaded.
        </Typography>
      }
      {images.length > 0 && !retrievingImages &&
        folders.map(folder =>
          <ImagesFolder
            key={folder.name}
            name={folder.name}
            images={folder.images}
          />
        )
      }
      {retrievingImages &&
        <CircularProgress color="secondary" />
      }
    </div>
  )
}

export default ImagesDisplay
