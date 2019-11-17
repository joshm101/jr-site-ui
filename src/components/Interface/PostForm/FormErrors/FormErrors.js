import React from 'react'
import Typography from '@material-ui/core/Typography'

function FormErrors(props) {
  const {
    errors,
    className,
    errorClassName,
    'data-test-id': dataTestId
  } = props

  return (
    <div className={className}>
      {errors && errors.length &&
        errors.map(error =>
          <Typography
            data-test-id={dataTestId}
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
