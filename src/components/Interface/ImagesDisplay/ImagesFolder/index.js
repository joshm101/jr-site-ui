import React from 'react'
import { Typography } from '@material-ui/core'

import ImageGrid from '../../ImageGrid'

import './index.css'

const ImagesFolder = ({ name, images }) => (
  <div>
    <Typography
      variant="h5"
      align="left"
      color="textPrimary"
    >
      {name}
    </Typography>
    <div className="interface-images-folder">
      <ImageGrid images={images} />
    </div>
  </div>
)

export default ImagesFolder
