import React from 'react'
import Button from '@material-ui/core/Button'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'

function Back({ onClick, disabled, className }) {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      className={className}
    >
      <KeyboardArrowLeft />
    </Button>
  )
}

export default Back
