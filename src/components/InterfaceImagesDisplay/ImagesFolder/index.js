import React from 'react'
import { Typography } from '@material-ui/core'

import './index.css'

const ImagesFolder = ({ name, images }) => (
  <div>
    <Typography
      variant="headline"
      align="left"
    >
      {name}
    </Typography>
    <div className="interface-images-folder-image-grid">
      {
        images.map(image =>
          <div
            key={image}
            style={
              {
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '200px',
                width: '200px'
              }
            }
          />
        )
      }
    </div>
  </div>
)

export default ImagesFolder
