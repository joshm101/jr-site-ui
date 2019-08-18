import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Card, Button, CardActions, CardMedia } from '@material-ui/core'

import './index.css'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 275px))',
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 375px))'

    },
    justifyContent: 'center',
    gridGap: '10px'
  },
  imageCard: {
    margin: '4px'
  },
  image: {
    paddingTop: '56.25%',
    height: '0'
  },
  cardActionsArea: {
    backgroundColor: theme.palette.primary.main
  }
}))

const ImageGrid = ({
  images,
  actions,
  style
}) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      {
        images.map((image, imageIndex) =>
          <Card key={image} className={classes.imageCard}>
            <CardMedia
              image={image}
              className={classes.image}
              title="interface-image-card-media"
            />

            {actions &&
              <CardActions className={classes.cardActionsArea}>
                {
                  actions.map(action =>
                    <Button
                      key={action.key}
                      onClick={() => action.onClick(imageIndex)}
                      color={action.color}
                      size={action.size}
                      disabled={action.disabled}
                    >
                      {
                        action.icon ? (
                          <span className="interface-image-action-icon">
                            {action.icon}
                          </span>
                        ) : null
                      }
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
}

export default ImageGrid
