import React from 'react'
import Button from '@material-ui/core/Button'

function Submit({
  onClick,
  disabled,
  className,
  'data-test-id': dataTestId
}) {
  return (
    <Button
      data-test-id={dataTestId}
      onClick={onClick}
      disabled={disabled}
      className={className}
      color="secondary"
      variant="outlined"
    >
      Done
    </Button>
  )
}

export default Submit
