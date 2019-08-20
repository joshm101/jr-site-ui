import React from 'react'
import { Typography } from '@material-ui/core'

import ImageGrid from '../../ImageGrid'
import Image from '../../Image'

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
      <ImageGrid images={images}>
        {images.map(image =>
          <Image
            src={image}
            key={image}
            alt="Interface images folder image"
          />
        )}
      </ImageGrid>
    </div>
  </div>
)

export default ImagesFolder
