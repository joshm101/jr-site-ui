import React, { Component } from 'react'
import { Typography, CircularProgress } from '@material-ui/core'

import withImages from '../../hoc/withImages'
import ImagesFolder from './ImagesFolder'

import './index.css'

class InterfaceImagesDisplay extends Component {
  /**
   * Takes an array of image objects and organizes
   * them by their respective folders.
   * @param {object[]} - Array of image objects
   * @return {object} - Image objects by folder
   */
  generateImagesByFolder = (images) => {
    return images.reduce((accumulator, imageObject) => {
      const relativePathSplit = imageObject.relativePath.split('/')
      const folderIndex = relativePathSplit.length - 2

      const folder = relativePathSplit[folderIndex]
      const entry = accumulator[folder]
      if (entry) {
        // folder already exists in accumulator,
        // add current image to folder entry
        entry.images = entry.images.concat(imageObject.url)
        return accumulator
      }

      // folder entry does not exist in accumulator,
      // set entry and add image as first element
      // of images array
      accumulator[folder] = {
        name: folder,
        images: [imageObject.url]
      }

      return accumulator
    }, {})
  }

  render() {
    const { loading } = this.props.images
    const images = this.props.images.data
    const imagesByFolder = this.generateImagesByFolder(images)
    const folders = Object.values(imagesByFolder)
    return (
      <div className="interface-images-display">
        {images.length === 0 && !loading &&
          <Typography variant="headline" align="left">
            No images have been uploaded.
          </Typography>
        }
        {images.length > 0 &&
          folders.map(folder =>
            <ImagesFolder
              key={folder.name}
              name={folder.name}
              images={folder.images}
            />
          )
        }
        {loading &&
          <CircularProgress color="primary" />
        }
      </div>
    )
  }
}

export default withImages(InterfaceImagesDisplay)
