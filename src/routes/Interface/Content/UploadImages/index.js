import React, { Component } from 'react'
import { Button, CircularProgress } from '@material-ui/core'
import Close from '@material-ui/icons/Close'
import Filter from '@material-ui/icons/Filter'

import validImageFile from '../../../../utils/valid-image-file'
import withUploadImages from '../../../../hoc/withUploadImages'
import withImagesActions from '../../../../hoc/withImagesActions'
import withImages from '../../../../hoc/withImages'
import InvalidFilesNotice from './InvalidFilesNotice'
import ImagesUploadingNotice from './ImagesUploadingNotice'
import FolderSelect from './FolderSelect'
import SubmitButton from './SubmitButton'
import SuccessDialog from './SuccessDialog'
import FailureDialog from './FailureDialog'
import ContentHeader from '../ContentHeader'
import InterfaceImagesGrid
  from '../../../../components/InterfaceImagesGrid'
import fileHandlerServiceCreator
  from '../../../../services/images/fileHandlerService'

import './index.css'

const fileHandlerService = fileHandlerServiceCreator()

class UploadImages extends Component {
  state = {
    displayImagesUploadingNotice: false
  }
  componentDidMount() {
    const { getImagesRoutine } = this.props
    getImagesRoutine()
  }
  /**
   * Reads the provided file to create
   * a base64 string for image previewing
   * @param {File} file - File to read
   * @return {Promise<string>} - base64 image string
   * wrapped in Promise context
   */
  readFile = (file) => {
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
  readFiles = (files, invalidFiles) => {
    const { uploadImagesImageSelection } = this.props
    Promise.all(
      files.map(this.readFile)
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
  handleImagesSelection = (event) => {
    event.preventDefault()
    const files = Array.from(event.target.files)
    const validFiles = files.filter(file =>
      validImageFile(file.name)
    )
    const invalidFiles = files.filter(file =>
      !validImageFile(file.name)
    )

    this.readFiles(validFiles, invalidFiles)
  }

  handleUnsupportedFileNoticeClose = () => {
    const { uploadImagesInvalidFilesNoticeDismissed } = this.props
    uploadImagesInvalidFilesNoticeDismissed()
  }

  handleUploadImagesClick = () => {
    const { selectedFolder } = this.props.uploadImages
    this.props.uploadImagesRoutine(selectedFolder)
    this.setState({
      displayImagesUploadingNotice: true
    })
  }

  handleFolderSelect = (event) => {
    this.props.uploadImagesSelectFolder(event.target.value)
  }

  handleImagesUploadingNoticeDismiss = () => {
    this.setState({
      displayImagesUploadingNotice: false
    })
  }

  handleSelectedFileRemoval = (index) => {
    const { uploadImagesRemoveImage } = this.props

    fileHandlerService.removeFile(index)
    uploadImagesRemoveImage(index)
  }

  getSelectedImagesActions = () => {
    const { uploadingImages } = this.props.uploadImages

    return [
      {
        key: 0,
        color: 'secondary',
        size: 'small',
        onClick: this.handleSelectedFileRemoval,
        text: 'Remove Image',
        icon: <Close fontSize="small" />,
        disabled: uploadingImages
      }
    ]
  }

  render() {
    const {
      invalidFiles,
      filePreviewUrls,
      uploadingImages,
      folders,
      selectedFolder
    } = this.props.uploadImages
    const { retrievingImages } = this.props.images
    const files = fileHandlerService.getFiles()

    const selectedImagesActions = this.getSelectedImagesActions()

    return (
      <div>
        <ContentHeader
          title="Upload Images"
          action={
            <div className="file-upload-controls-wrapper">
              <Button
                component="label"
                variant="text"
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
                  onChange={this.handleImagesSelection}
                />
              </Button>
            </div>
          }
        />
        <div className="upload-images-route-content-wrapper">
          {files.length > 0 &&
            <div className="files-selected-additional-controls">
              <div className="folder-select-button-wrapper">
                <FolderSelect
                  folders={folders}
                  value={selectedFolder}
                  onChange={this.handleFolderSelect}
                  disabled={uploadingImages}
                />
              </div>
              <SubmitButton
                onClick={this.handleUploadImagesClick}
                uploadingImages={uploadingImages}
              />
            </div>
          }
          {filePreviewUrls.length > 0 &&
            <div className="file-upload-previews">
              <InterfaceImagesGrid
                images={filePreviewUrls}
                actions={selectedImagesActions}
                style={{
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'contain'
                }}
              />
            </div>
          }
          <InvalidFilesNotice
            onClose={this.handleUnsupportedFileNoticeClose}
            open={invalidFiles.length > 0}
            invalidFiles={invalidFiles}
          />
          <ImagesUploadingNotice
            onClose={this.handleImagesUploadingNoticeDismiss}
            open={this.state.displayImagesUploadingNotice}
          />
          <SuccessDialog />
          <FailureDialog />
        </div>
      </div>
    )
  }
}

export default withUploadImages(
  withImagesActions(
    withImages(UploadImages)
  )
)
