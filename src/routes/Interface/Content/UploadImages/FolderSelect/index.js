import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Button,
  InputLabel,
  FormControl
} from '@material-ui/core'
import CreateNewFolder from '@material-ui/icons/CreateNewFolder'

import { useUploadImages } from '../../../../../hooks'
import NewFolderDialog from './NewFolderDialog'
import Select from '../../../../../components/Select'

import './index.css'

const useStyles = makeStyles(theme => ({
  selectLabel: {
    color: theme.palette.text.primary,
    '&:focus': {
      color: theme.palette.text.primary
    }
  }
}))

function FolderSelect(props) {
  const { value, folders, onChange, disabled } = props
  const { actions } = useUploadImages()
  const { uploadImagesDefineNewFolderTrigger } = actions
  const defaultIndex = folders.findIndex(folder => folder === 'default')
  let finalFolders = [...folders]
  if (defaultIndex === -1) {
    finalFolders = [
      'default',
      ...folders
    ]
  }

  const classnames = useStyles()

  return (
    <div className="interface-images-upload-folder-select">
      <div className="interface-images-upload-folder-select-wrapper">
        <FormControl className={classnames.selectLabel}>
          <InputLabel
            htmlFor="folder-select"
            className={classnames.selectLabel}
          >
            Select folder
          </InputLabel>
          <Select
            fullWidth
            value={value}
            onChange={onChange}
            disabled={disabled}
            inputProps={{
              name: 'folder-select',
              id: 'folder-select'
            }}
          >
            {
              finalFolders.map(folder =>
                <Select.Item key={folder} value={folder}>
                  {folder}
                </Select.Item>
              )
            }
          </Select>
        </FormControl>
      </div>
      <div className="define-new-folder-wrapper">
        <Button
          disabled={disabled}
          onClick={uploadImagesDefineNewFolderTrigger}
          variant="text"
          color="secondary"
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

export default FolderSelect
