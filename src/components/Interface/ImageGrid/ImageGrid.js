import React from 'react'
import { makeStyles } from '@material-ui/styles'
import classname from 'classnames'
// import { Card, Button, CardActions, CardMedia } from '@material-ui/core'

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
  gridItem: {
    margin: '4px'
  },
  image: {
    width: '100%',
    paddingTop: '75%'
  },
  cardActionsArea: {
    backgroundColor: theme.palette.primary.main
  }
}))

const ImageGrid = ({ children }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      {
        React.Children.map(children, child => (
          <div className={classes.gridItem}>
            {
              React.cloneElement(
                child,
                {
                  ...child.props,
                  className: classname([
                    child.props.className,
                    classes.image
                  ])
                }
              )
            }
          </div>
        ))
      }
    </div>
  )
}

export default ImageGrid
