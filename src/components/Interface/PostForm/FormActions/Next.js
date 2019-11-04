import React from 'react'
import Button from '@material-ui/core/Button'

function Next({ onClick, disabled, className }) {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      className={className}
      color="secondary"
      variant="outlined"
    >
      Next
    </Button>
  )
}

export default Next
