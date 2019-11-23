import React from 'react'
import classname from 'classnames'
import { makeStyles } from '@material-ui/styles'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import styles from './Submit.styles'

const useStyles = makeStyles(styles)

function Submit({
  onClick,
  disabled,
  submitting,
  children,
  className,
  'data-test-id': dataTestId
}) {
  const classes = useStyles()
  const rootClasses = classname([classes.root, className])

  const loadingIcon = submitting && (
    <CircularProgress
      size={16}
      data-test-id="post-form-submit-indicator"
    />
  )

  return (
    <Button
      data-test-id={dataTestId}
      onClick={onClick}
      disabled={disabled || submitting}
      className={rootClasses}
      color="secondary"
      variant="outlined"
      startIcon={loadingIcon}
    >
      {children}
    </Button>
  )
}

export default Submit
