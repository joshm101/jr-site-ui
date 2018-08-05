import React, { Component } from 'react'
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

import withUploadImages from '../../../../../../hoc/withUploadImages'

import './index.css'

class NewFolderDialog extends Component {
  state = {
    folderNameInputTouched: false
  }

  onInputChange = (event) => {
    this.setState({
      folderNameInputTouched: true
    })
    const { uploadImagesDefineNewFolderValueChange } = this.props
    uploadImagesDefineNewFolderValueChange(event.target.value)
  }

  folderNameValid = () => {
    const { folders, newFolderName } = this.props.uploadImages
    const resultIndex = folders.findIndex(folder =>
      folder === newFolderName
    )

    return resultIndex === -1
  }

  render() {
    const {
      newFolderName,
      definingNewFolder
    } = this.props.uploadImages
    const {
      uploadImagesDefineNewFolderCancel,
      uploadImagesDefineNewFolderSubmit
    } = this.props
    const { folderNameInputTouched } = this.state
    const folderNameValid = this.folderNameValid()
    const folderNameEmpty = !newFolderName
    return (
      <Dialog
        open={definingNewFolder}
        onClose={uploadImagesDefineNewFolderCancel}
      >
        <DialogTitle>
          Define New Folder
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please type in the name of the new folder.
          </DialogContentText>
          <TextField
            autoFocus
            fullWidth
            className="new-folder-name-input"
            type="text"
            value={newFolderName}
            placeholder="Enter folder name..."
            onChange={this.onInputChange}
            error={
              (folderNameEmpty || !folderNameValid) &&
              folderNameInputTouched
            }
          />
          {!folderNameValid && folderNameInputTouched &&
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
          >
            Cancel
          </Button>
          <Button
            onClick={uploadImagesDefineNewFolderSubmit}
            color="primary"
            disabled={!folderNameValid || folderNameEmpty}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    )
  }
}

export default withUploadImages(NewFolderDialog)
