import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

import styles from './styles'
const useStyles = makeStyles(styles)

function Title(props) {
  const { title } = props

  const classes = useStyles()

  return (
    <Typography
      variant="h3"
      color="textPrimary"
      className={classes.title}
    >
      {title}
    </Typography>
  )
}

export default Title
