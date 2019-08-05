import React from 'react'
import { makeStyles } from '@material-ui/styles'

import styles from './styles'

const useStyles = makeStyles(styles)

function Images(props) {
  const { thumbnail } = props
  const classes = useStyles()

  return (
    <div>
      <div className={classes.imagesThumbnail}>
        <img src={thumbnail} />
      </div>
    </div>
  )
}

export default Images
