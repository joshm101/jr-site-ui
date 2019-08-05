import React from 'react'
import classnames from 'classnames'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: '1200px',
    margin: 'auto'
  }
}))

function ContentContainer(props) {
  const { children, className } = props
  const classes = useStyles()

  const rootClasses = classnames([classes, className])

  return (
    <div className={rootClasses}>{children}</div>
  )
}

export default ContentContainer
