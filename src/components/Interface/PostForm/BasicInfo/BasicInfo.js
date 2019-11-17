import React from 'react'
import { makeStyles } from '@material-ui/styles'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'

import {
  TITLE_ID,
  FEATURED_ID,
  DESCRIPTION_ID,
  EMBED_ID
} from './BasicInfo.constants'

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
            inputProps={{ 'data-test-id': TITLE_ID }}
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
                  name: 'featured',
                  'data-test-id': FEATURED_ID
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
        inputProps={{ 'data-test-id': DESCRIPTION_ID }}
        {...textarea('description')}
      />
      <TextField
        fullWidth
        id="embedContent"
        label="Embeddable code"
        margin="normal"
        variant="outlined"
        inputProps={{ 'data-test-id': EMBED_ID }}
        {...text('embedContent')}
      />
    </>
  )
}

export default BasicInfo
