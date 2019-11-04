import React from 'react'
import Typography from '@material-ui/core/Typography'

function FormErrors(props) {
  const { errors, className, errorClassName } = props

  return (
    <div className={className}>
      {errors && errors.length &&
        errors.map(error =>
          <Typography
            key={error}
            variant="caption"
            className={errorClassName}
          >
            {error}
          </Typography>
        )
      }
    </div>
  )
}

export default FormErrors
