import React from 'react'
import { makeStyles } from '@material-ui/styles'

import { Checkbox } from '@material-ui/core'
import Image from '../Image'
import ImageOverlay from './ImageOverlay'

import styles from './styles'

const useStyles = makeStyles(styles)

function SelectableImage(props) {
  const {
    isSelected,
    src,
    onSelect,
    className
  } = props

  const classes = useStyles()
  const overlayContentPositioning = {
    top: true,
    left: true
  }

  const handleChange = () => {
    console.log('src: ', src)
    onSelect && onSelect(src)
  }

  return (
    <div className={classes.root}>
      <Image src={src} className={className} />
      <ImageOverlay
        isTransparent={!isSelected}
        contentPositioning={overlayContentPositioning}
        className={classes.overlay}
        onClick={handleChange}
      >
        <Checkbox
          checked={isSelected}
          onChange={handleChange}
          value={src}
          color="secondary"
          className={classes.checkbox}
        />
      </ImageOverlay>
    </div>
  )
}

export default SelectableImage
