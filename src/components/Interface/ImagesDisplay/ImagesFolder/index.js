import React from 'react'
import { Typography } from '@material-ui/core'

import ImagesGrid from '../../ImagesGrid'

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
      <ImagesGrid images={images} />
    </div>
  </div>
)

export default ImagesFolder
