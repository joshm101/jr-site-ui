import React from 'react'
import { makeStyles } from '@material-ui/styles'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'

import styles from '../styles'

const useStyles = makeStyles(styles)

function BasicInfo(props) {
  const classes = useStyles(styles)

  const { fieldInitializers, errors } = props

  const { text, checkbox, textarea } = fieldInitializers

  return (
    <>
      <div className={classes.initInfo}>
        <FormControl>
          <TextField
            fullWidth
            id="title"
            label="Title"
            margin="normal"
            variant="outlined"
            error={errors.title}
            required
            {...text('title')}
          />
          <FormHelperText className="title-helper-text">
            {errors.title}
          </FormHelperText>
        </FormControl>
        <FormControl>
          <FormControlLabel
            className="featured-post-switch-container"
            control={
              <Switch
                color="secondary"
                inputProps={{
                  id: 'featured',
                  name: 'featured'
                }}
                value="featured"
                {...checkbox('featured')}
              />
            }
            label="Featured"
          />
        </FormControl>
      </div>
      <TextField
        fullWidth
        multiline
        rows={5}
        id="description"
        label="Description"
        margin="normal"
        variant="outlined"
        {...textarea('description')}
      />
      <TextField
        fullWidth
        id="embedContent"
        label="Embeddable code"
        margin="normal"
        variant="outlined"
        {...text('embedContent')}
      />
    </>
  )
}

export default BasicInfo
