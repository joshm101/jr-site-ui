import React from 'react'
import PropTypes from 'prop-types'
import {
  Select,
  MenuItem,
  Typography,
  Button
} from '@material-ui/core'
import CreateNewFolder from '@material-ui/icons/CreateNewFolder'

import withUploadImages from '../../../../../hoc/withUploadImages'
import NewFolderDialog from './NewFolderDialog'

import './index.css'

const FolderSelect = ({
  value,
  folders,
  onChange,
  disabled,
  uploadImagesDefineNewFolderTrigger
}) => {
  const defaultIndex = folders.findIndex(folder => folder === 'default')
  let finalFolders = folders
  if (defaultIndex === -1) {
    finalFolders = [
      'default',
      ...folders
    ]
  }

  return (
    <div className="interface-images-upload-folder-select">
      <Typography
        variant="title"
        style={{ marginRight: '25px' }}
      >
        Select a folder:
      </Typography>
      <div className="interface-images-upload-folder-select-wrapper">
        <Select
          fullWidth
          value={value}
          onChange={onChange}
          style={{ flex: 2 }}
          disabled={disabled}
        >
          {
            finalFolders.map(folder =>
              <MenuItem key={folder} value={folder}>
                {folder}
              </MenuItem>
            )
          }
        </Select>
      </div>
      <div className="define-new-folder-wrapper">
        <Button
          disabled={disabled}
          onClick={uploadImagesDefineNewFolderTrigger}
        >
          <CreateNewFolder />
          &nbsp;&nbsp;
          Define a New Folder
        </Button>
      </div>
      <NewFolderDialog />
    </div>
  )
}

FolderSelect.propTypes = {
  value: PropTypes.string,
  folders: PropTypes.array,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  uploadImagesDefineNewFolderTrigger: PropTypes.func
}
FolderSelect.defaultProps = {
  value: '',
  folders: [],
  onChange: () => { },
  disabled: false,
  uploadImagesDefineNewFolderTrigger: () => { }
}

export const FolderSelectNoWrap = FolderSelect
export default withUploadImages(FolderSelect)
