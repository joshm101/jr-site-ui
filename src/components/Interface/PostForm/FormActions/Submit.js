import React from 'react'
import Button from '@material-ui/core/Button'

function Submit({ onClick, disabled, className }) {
  return (
    <Button
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
