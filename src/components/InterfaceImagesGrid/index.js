import React from 'react'

import './index.css'

const InterfaceImagesGrid = ({ images, style }) => (
  <div className="interface-images-grid">
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
              width: '200px',
              ...style
            }
          }
        />
      )
    }
  </div>
)

export default InterfaceImagesGrid
