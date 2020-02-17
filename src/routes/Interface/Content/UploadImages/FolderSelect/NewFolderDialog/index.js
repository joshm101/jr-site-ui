import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
  DialogTitle,
  TextField,
  FormHelperText,
  Button
} from '@material-ui/core'

import { useUploadImages } from '../../../../../../hooks'

import './index.css'

const useStyles = makeStyles(theme => ({
  cancel: {
    color: theme.palette.text.primary
  },
  dialogContentText: {
    color: theme.palette.text.primary
  }
}))

function NewFolderDialog(props) {
  const [
    folderNameInputTouched,
    setFolderNameInputTouched
  ] = useState(false)

  const { actions, state } = useUploadImages()

  const {
    uploadImagesDefineNewFolderValueChange,
    uploadImagesDefineNewFolderCancel,
    uploadImagesDefineNewFolderSubmit
  } = actions

  const {
    folders,
    newFolderName,
    definingNewFolder
  } = state

  const onInputChange = event => {
    setFolderNameInputTouched(true)
    uploadImagesDefineNewFolderValueChange(event.target.value)
  }

  const folderNameValid = () => {
    const resultIndex = folders.findIndex(folder =>
      folder === newFolderName
    )

    return resultIndex === -1
  }

  const folderNameEmpty = !newFolderName

  const classes = useStyles()

  return (
    <Dialog
      open={definingNewFolder}
      onClose={uploadImagesDefineNewFolderCancel}
    >
      <DialogTitle>
        Define New Folder
      </DialogTitle>
      <DialogContent>
        <DialogContentText className={classes.dialogContentText}>
          Please type in the name of the new folder.
        </DialogContentText>
        <TextField
          autoFocus
          fullWidth
          className="new-folder-name-input"
          type="text"
          value={newFolderName}
          placeholder="Enter folder name..."
          onChange={onInputChange}
          error={
            (folderNameEmpty || !folderNameValid()) &&
            folderNameInputTouched
          }
        />
        {!folderNameValid() && folderNameInputTouched &&
          <FormHelperText error>
            Folder name is already taken.
          </FormHelperText>
        }
        {folderNameEmpty && folderNameInputTouched &&
          <FormHelperText error>
            Folder name must not be empty.
          </FormHelperText>
        }
      </DialogContent>
      <DialogActions>
        <Button
          onClick={uploadImagesDefineNewFolderCancel}
          color="primary"
          variant="text"
          className={classes.cancel}
        >
          Cancel
        </Button>
        <Button
          onClick={uploadImagesDefineNewFolderSubmit}
          color="secondary"
          disabled={!folderNameValid() || folderNameEmpty}
          variant="text"
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default NewFolderDialog
