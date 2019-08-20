import React from 'react'
import { makeStyles } from '@material-ui/styles'
import classname from 'classnames'

import styles from './styles'

const useStyles = makeStyles(styles)

function ImageOverlay(props) {
  const {
    isTransparent,
    contentPositioning,
    children,
    onClick,
    className
  } = props
  const { left, right, top, bottom } = contentPositioning

  const classes = useStyles()
  const rootClasses = classname([
    classes.root,
    className,
    isTransparent ? classes.transparent : classes.dark
  ])
  const contentStyles = {
    position: 'absolute',
    top: top ? 0 : '',
    bottom: bottom ? 0 : '',
    left: left ? 0 : '',
    right: right ? 0 : '',
    opacity: '1 !important'
  }

  return (
    <>
      <div className={rootClasses} onClick={onClick} />
      <div style={contentStyles}>
        {children}
      </div>
    </>
  )
}

export default ImageOverlay
