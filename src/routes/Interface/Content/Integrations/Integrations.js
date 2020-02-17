import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import styles from './styles'

const useStyles = makeStyles(styles)

function Integrations() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.contentRoot}>
        <Typography variant="h5">
          Integrations
        </Typography>
      </div>
    </div>
  )
}

export default Integrations
