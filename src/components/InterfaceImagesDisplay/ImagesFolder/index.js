import React from 'react'
import { Typography } from '@material-ui/core'

import InterfaceImagesGrid from '../../InterfaceImagesGrid'

import './index.css'

const ImagesFolder = ({ name, images }) => (
  <div>
    <Typography
      variant="headline"
      align="left"
    >
      {name}
    </Typography>
    <div className="interface-images-folder">
      <InterfaceImagesGrid images={images} />
    </div>
  </div>
)

export default ImagesFolder
