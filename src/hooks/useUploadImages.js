import { useSelector, useDispatch } from 'react-redux'

import {
  uploadImagesImageSelection,
  uploadImagesRoutine,
  uploadImagesSelectFolder,
  uploadImagesDefineNewFolderTrigger,
  uploadImagesDefineNewFolderCancel,
  uploadImagesDefineNewFolderValueChange,
  uploadImagesDefineNewFolderSubmit,
  uploadImagesRemoveImage,
  dismissUploadImagesSuccessNotice,
  dismissUploadImagesFailureNotice
} from '../actions'

function useUploadImages() {
  const uploadImagesState = useSelector(state => state.uploadImages)
  const dispatch = useDispatch()

  const uploadImagesActions = {
    uploadImagesImageSelection: (...args) => dispatch(
      uploadImagesImageSelection(...args)
    ),
    uploadImagesRoutine: (...args) => dispatch(
      uploadImagesRoutine(...args)
    ),
    uploadImagesSelectFolder: (...args) => dispatch(
      uploadImagesSelectFolder(...args)
    ),
    uploadImagesDefineNewFolderTrigger: (...args) => dispatch(
      uploadImagesDefineNewFolderTrigger(...args)
    ),
    uploadImagesDefineNewFolderCancel: (...args) => dispatch(
      uploadImagesDefineNewFolderCancel(...args)
    ),
    uploadImagesDefineNewFolderValueChange: (...args) => dispatch(
      uploadImagesDefineNewFolderValueChange(...args)
    ),
    uploadImagesDefineNewFolderSubmit: (...args) => dispatch(
      uploadImagesDefineNewFolderSubmit(...args)
    ),
    uploadImagesRemoveImage: (...args) => dispatch(
      uploadImagesRemoveImage(...args)
    ),
    dismissUploadImagesSuccessNotice: (...args) => dispatch(
      dismissUploadImagesSuccessNotice(...args)
    ),
    dismissUploadImagesFailureNotice: (...args) => dispatch(
      dismissUploadImagesFailureNotice(...args)
    )
  }

  return {
    state: uploadImagesState,
    actions: uploadImagesActions
  }
}

export default useUploadImages
