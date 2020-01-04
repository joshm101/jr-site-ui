import React from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

import { ROUTES } from '../../../../routes.constants'

import styles from './styles'

const { INTERFACE_ROUTES } = ROUTES
const { HOME } = INTERFACE_ROUTES

const useStyles = makeStyles(styles)

function PostNotFoundNotice() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Typography
        variant="h5"
        gutterBottom
        className={classes.text}
      >
        Post to edit was not found
      </Typography>
      <Link to={HOME} className={classes.link}>
        <Button color="secondary">
          Go to Dashboard
        </Button>
      </Link>
    </div>
  )
}

export default PostNotFoundNotice
