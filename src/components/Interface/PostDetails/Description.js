import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

import styles from './styles'

const useStyles = makeStyles(styles)

function Description(props) {
  const { description } = props
  const classes = useStyles()

  return (
    <Typography type="body" className={classes.description}>
      {description}
    </Typography>
  )
}

export default Description
