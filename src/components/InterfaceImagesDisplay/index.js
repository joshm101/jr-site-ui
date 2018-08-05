import React, { Component } from 'react'
import { Typography, CircularProgress } from '@material-ui/core'

import withImages from '../../hoc/withImages'
import ImagesFolder from './ImagesFolder'
import generateImagesByFolder from '../../utils/generate-images-by-folder'

import './index.css'

class InterfaceImagesDisplay extends Component {
  render() {
    const { retrievingImages } = this.props.images
    const images = this.props.images.data
    const imagesByFolder = generateImagesByFolder(images)
    const folders = Object.values(imagesByFolder)
    return (
      <div className="interface-images-display">
        {images.length === 0 && !retrievingImages &&
          <Typography variant="headline" align="center">
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
          <CircularProgress color="primary" />
        }
      </div>
    )
  }
}

export default withImages(InterfaceImagesDisplay)
