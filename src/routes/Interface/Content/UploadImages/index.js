import React, { useEffect } from 'react'
import { Button, CircularProgress } from '@material-ui/core'
import Filter from '@material-ui/icons/Filter'

import validImageFile from '../../../../utils/valid-image-file'
import {
  useImages,
  useImagesActions,
  useUploadImages,
  useNotifications
} from '../../../../hooks'
import {
  NOTIFICATION_ID as INVALID_FILES_NOTIFICATION_ID
} from './InvalidFilesNotice'
import {
  NOTIFICATION_ID as IMAGES_UPLOADING_NOTIFICATION_ID
} from './ImagesUploadingNotice'
import FolderSelect from './FolderSelect'
import SubmitButton from './SubmitButton'
import SuccessDialog from './SuccessDialog'
import FailureDialog from './FailureDialog'
import UploadPreviewImage from './UploadPreviewImage'
import ImageGrid
  from '../../../../components/Interface/ImageGrid'
import fileHandlerServiceCreator
  from '../../../../services/images/fileHandlerService'

import './index.css'

const fileHandlerService = fileHandlerServiceCreator()

function UploadImages() {
  const { actions: notificationActions } = useNotifications()
  const { actions, state } = useUploadImages()
  const {
    uploadImagesRoutine,
    uploadImagesRemoveImage,
    uploadImagesSelectFolder,
    uploadImagesImageSelection
  } = actions

  const { getImagesRoutine } = useImagesActions()

  const {
    filePreviewUrls,
    uploadingImages,
    folders,
    selectedFolder
  } = state

  useEffect(() => {
    getImagesRoutine()
  }, [])

  const { retrievingImages } = useImages()
  const files = fileHandlerService.getFiles()

  /**
   * Reads the provided file to create
   * a base64 string for image previewing
   * @param {File} file - File to read
   * @return {Promise<string>} - base64 image string
   * wrapped in Promise context
   */
  const readFile = file => {
    const reader = new FileReader()

    return new Promise((resolve, reject) => {
      reader.onload = () => {
        resolve(reader.result)
      }
      reader.onerror = () => {
        reject(
          new Error(`${file.name} could not be read.`)
        )
      }

      reader.readAsDataURL(file)
    })
  }

  /**
   * Reads the files selected by the user so
   * that image previews can be displayed
   * @param {File[]} - Files to read
   * @param {File[]} - Invalid files used to
   * notify the user
   * @return {void}
   */
  const readFiles = (files, invalidFiles) => {
    if (invalidFiles.length) {
      notificationActions.showNotification({
        id: INVALID_FILES_NOTIFICATION_ID,
        props: {
          invalidFiles: invalidFiles.map(file => ({ name: file.name }))
        }
      })
    }
    Promise.all(
      files.map(readFile)
    ).then(filePreviewUrls => {
      fileHandlerService.setFiles(files)
      uploadImagesImageSelection({
        filePreviewUrls,
        invalidFiles
      })
    }).catch((error) => {
      console.error(error)
    })
  }

  /**
   * Handles the image selection event by
   * invoking readFiles() function to display
   * image previews to the user.
   * @param {Event} - <input type="file" />
   * change event object
   */
  const handleImagesSelection = (event) => {
    event.preventDefault()
    const files = Array.from(event.target.files)
    const validFiles = files.filter(file =>
      validImageFile(file.name)
    )
    const invalidFiles = files.filter(file =>
      !validImageFile(file.name)
    )

    readFiles(validFiles, invalidFiles)
  }

  const handleUploadImagesClick = () => {
    const { selectedFolder } = state

    uploadImagesRoutine(selectedFolder)

    notificationActions.showNotification({
      id: IMAGES_UPLOADING_NOTIFICATION_ID,
      props: {}
    })
  }

  const handleFolderSelect = (event) => {
    uploadImagesSelectFolder(event.target.value)
  }

  const handleSelectedFileRemoval = index => {
    // note that currying does not prevent recreation
    // of function on render (compared to an inline
    // function inside of render method)
    return () => {
      fileHandlerService.removeFile(index)
      uploadImagesRemoveImage(index)
    }
  }

  return (
    <div>
      <Button
        component="label"
        variant="outlined"
        color="secondary"
        disabled={retrievingImages || uploadingImages}
      >
        {!retrievingImages &&
          <Filter fontSize="inherit" />
        }
        {retrievingImages &&
          <CircularProgress size={15} color="primary" />
        }
        &nbsp;&nbsp;
        {'Select images'}
        <input
          id="select-images-input"
          multiple
          type="file"
          onChange={handleImagesSelection}
        />
      </Button>
      <br />
      <br />
      <br />
      {files.length > 0 &&
        <div className="files-selected-additional-controls">
          <div className="folder-select-button-wrapper">
            <FolderSelect
              folders={folders}
              value={selectedFolder}
              onChange={handleFolderSelect}
              disabled={uploadingImages}
            />
          </div>
          <SubmitButton
            onClick={handleUploadImagesClick}
            uploadingImages={uploadingImages}
          />
        </div>
      }
      <br />
      {filePreviewUrls.length > 0 &&
        <div className="file-upload-previews">
          <ImageGrid>
            {filePreviewUrls.map((imgSrc, index) => (
              <UploadPreviewImage
                key={imgSrc}
                src={imgSrc}
                imageIndex={index}
                onClick={handleSelectedFileRemoval(index)}
              />
            ))}
          </ImageGrid>
        </div>
      }
      <SuccessDialog />
      <FailureDialog />
    </div>
  )
}

export default UploadImages
