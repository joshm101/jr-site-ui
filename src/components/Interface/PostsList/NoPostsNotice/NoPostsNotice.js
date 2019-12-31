import React from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

import styles from './styles'

const useStyles = makeStyles(styles)

function NoPostsNotice({ children }) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      {children}
    </div>
  )
}

function NoPostsNoticeLabel({ children, className }) {
  return (
    <Typography
      variant="h4"
      gutterBottom
      className={className}
    >
      {children}
    </Typography>
  )
}

function NoPostsNoticeAction({ children, className }) {
  return (
    <Button
      variant="text"
      color="secondary"
      className={className}
    >
      {children}
    </Button>
  )
}

NoPostsNotice.Label = NoPostsNoticeLabel
NoPostsNotice.Action = NoPostsNoticeAction

export default NoPostsNotice
