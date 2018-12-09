import React from 'react'
import { Card, Button, CardActions, CardMedia } from '@material-ui/core'

import './index.css'

const InterfaceImagesGrid = ({
  images,
  actions,
  style
}) => (
  <div className="interface-images-grid">
    {
      images.map((image, imageIndex) =>
        <Card key={image} className="interface-image-card">
          <CardMedia
            image={image}
            className="interface-image-card-media"
            title="interface-image-card-media"
          />

          {actions &&
            <CardActions>
              {
                actions.map(action =>
                  <Button
                    key={action.key}
                    onClick={() => action.onClick(imageIndex)}
                    color={action.color}
                    size={action.size}
                  >
                    {action.text}
                  </Button>
                )
              }
            </CardActions>
          }

        </Card>
      )
    }
  </div>
)

export default InterfaceImagesGrid
