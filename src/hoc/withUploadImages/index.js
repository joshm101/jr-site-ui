import React from 'react'
import { connect } from 'react-redux'

import {
  uploadImagesImageSelection,
  uploadImagesInvalidFilesNoticeDismissed,
  uploadImagesRoutine,
  uploadImagesSelectFolder,
  uploadImagesDefineNewFolderTrigger,
  uploadImagesDefineNewFolderCancel,
  uploadImagesDefineNewFolderValueChange,
  uploadImagesDefineNewFolderSubmit,
  uploadImagesRemoveImage,
  dismissUploadImagesSuccessNotice,
  dismissUploadImagesFailureNotice
} from '../../actions'

export default (ComposedComponent) => {
  const withUploadImages = (props) => (
    <ComposedComponent {...props} />
  )

  const mapStateToProps = (state) => ({
    uploadImages: state.uploadImages
  })

  const mapDispatchToProps = {
    uploadImagesImageSelection,
    uploadImagesInvalidFilesNoticeDismissed,
    uploadImagesRoutine,
    uploadImagesSelectFolder,
    uploadImagesDefineNewFolderTrigger,
    uploadImagesDefineNewFolderCancel,
    uploadImagesDefineNewFolderValueChange,
    uploadImagesDefineNewFolderSubmit,
    uploadImagesRemoveImage,
    dismissUploadImagesSuccessNotice,
    dismissUploadImagesFailureNotice
  }

  return connect(
    mapStateToProps, mapDispatchToProps
  )(withUploadImages)
}
