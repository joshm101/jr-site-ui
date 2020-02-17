import React from 'react'
import { useFormState } from 'react-use-form-state'
import { makeStyles } from '@material-ui/core/styles'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogActions from '@material-ui/core/DialogActions'
import FormHelperText from '@material-ui/core/FormHelperText'
import CircularProgress from '@material-ui/core/CircularProgress'

import styles from './styles'

const useStyles = makeStyles(styles)

function PostTypeFormDialog({
  postType,
  onSubmit,
  onCancel,
  submitting,
  open
}) {
  const classes = useStyles()
  const generateInitialFormValues = postType => {
    const defaultValues = { name: '' }

    if (!postType) {
      return defaultValues
    }

    return { name: postType.name }
  }

  const [formState, formFieldInitializers] = (
    useFormState(generateInitialFormValues(postType))
  )

  const { values, errors } = formState
  const { text } = formFieldInitializers

  const dialogTitle = postType ? (
    'Edit Post Type'
  ) : 'Create Post Type'

  const submitDisabled = (
    values.name.length < 2 ||
    submitting
  )

  const getSubmitButtonText = () => {
    if (postType) {
      return submitting ? 'Updating' : 'Update'
    }

    return submitting ? 'Creating' : 'Create'
  }

  return (
    <Dialog open={open}>
      <DialogTitle>{dialogTitle}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Enter the name for the new post type:
        </DialogContentText>
        <TextField
          fullWidth
          id="name"
          label="Name"
          variant="outlined"
          required
          {...text('name')}
        />
        <FormHelperText>
          {errors.name}
        </FormHelperText>
      </DialogContent>
      <DialogActions>
        <Button
          color="primary"
          onClick={onCancel}
        >
          Cancel
        </Button>
        <Button
          color="secondary"
          disabled={submitDisabled}
          onClick={() => onSubmit(values)}
          startIcon={submitting &&
            <CircularProgress className={classes.loading} />
          }
          variant={submitting ? 'outlined' : 'text'}
        >
          {getSubmitButtonText()}
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default PostTypeFormDialog
