import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

import styles from './styles'

const useStyles = makeStyles(styles)

function ContentHeader(props) {
  const {
    title,
    action
  } = props

  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Typography
        variant="h4"
        color="textPrimary"
      >
        {title}
      </Typography>
      <div className={classes.action}>
        {action || null}
      </div>
    </div>
  )
}

export default ContentHeader
