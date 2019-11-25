import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Checkbox from '@material-ui/core/Checkbox'
import Radio from '@material-ui/core/Radio'
import Image from '../Image'
import ImageOverlay from './ImageOverlay'
import { IMAGE_SELECTION_MODES } from '../constants'

import styles from './styles'

const useStyles = makeStyles(styles)

function SelectableImage(props) {
  const {
    isSelected,
    src,
    onSelect,
    className,
    mode
  } = props

  const { CHECKBOX, RADIO } = IMAGE_SELECTION_MODES

  const classes = useStyles()
  const overlayContentPositioning = {
    top: true,
    left: true
  }

  return (
    <div className={classes.root}>
      <Image src={src} className={className} />
      <ImageOverlay
        isTransparent={!isSelected}
        contentPositioning={overlayContentPositioning}
        className={classes.overlay}
        onClick={() => onSelect(src)}
      >
        {mode === CHECKBOX &&
          <Checkbox
            checked={isSelected}
            onChange={() => onSelect(src)}
            value={src}
            color="secondary"
            className={classes.selector}
          />
        }
        {mode === RADIO &&
          <Radio
            checked={isSelected}
            onChange={() => onSelect(src)}
            value={src}
            color="secondary"
            className={classes.selector}
          />
        }
      </ImageOverlay>
    </div>
  )
}

export default SelectableImage
