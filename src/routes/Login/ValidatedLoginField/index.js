import React from 'react'
import { TextField, FormHelperText } from '@material-ui/core'

const ValidatedLoginField = props => (
  <div>
    <TextField
      className="login-form-field"
      label={props.label}
      name={props.name}
      onChange={props.onChange}
      value={props.value}
      error={props.errors.length > 0 && props.touched}
      type={props.type}
      disabled={props.disabled}
      fullWidth
    />
    {props.touched && props.errors.length > 0 &&
      props.errors.map(error =>
        <FormHelperText key={error} error>
          {error}
        </FormHelperText>
      )
    }
  </div>
)

export default ValidatedLoginField
