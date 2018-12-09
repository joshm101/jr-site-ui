import * as actionTypes from '../../actions/actionTypes'
import { uploadImagesRoutine, getImagesRoutine } from '../../actions'
import generateImagesByFolder from '../../utils/generate-images-by-folder'

const initialState = {
  filePreviewUrls: [],
  invalidFiles: [],
  uploadingImages: false,
  uploadedFiles: [],
  filesNotUploaded: [],
  folders: [],
  selectedFolder: 'default',
  errors: [],
  newFolderName: '',
  definingNewFolder: false,
  displaySuccessNotification: false
}

const uploadImagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case uploadImagesRoutine.TRIGGER:
      return handleUploadImagesTrigger(state)
    case uploadImagesRoutine.SUCCESS:
      return handleUploadImagesSuccess(state, action)
    case uploadImagesRoutine.FAILURE:
      return handleUploadImagesFailure(state, action)
    case getImagesRoutine.SUCCESS:
      return handleGetImagesSuccess(state, action)
    case actionTypes.UPLOAD_IMAGES_IMAGE_SELECTION:
      return handleUploadImagesImageSelection(state, action)
    case actionTypes.UPLOAD_IMAGES_INVALID_FILES_NOTICE_DISMISSED:
      return handleUploadImagesInvalidFilesNoticeDismissed(state)
    case actionTypes.UPLOAD_IMAGES_SELECT_FOLDER:
      return handleUploadImagesSelectFolder(state, action)
    case actionTypes.UPLOAD_IMAGES_DEFINE_NEW_FOLDER_TRIGGER:
      return handleUploadImagesDefineNewFolderTrigger(state)
    case actionTypes.UPLOAD_IMAGES_DEFINE_NEW_FOLDER_CANCEL:
      return handleUploadImagesDefineNewFolderCancel(state)
    case actionTypes.UPLOAD_IMAGES_DEFINE_NEW_FOLDER_VALUE_CHANGE:
      return handleUploadImagesDefineNewFolderValueChange(state, action)
    case actionTypes.UPLOAD_IMAGES_DEFINE_NEW_FOLDER_SUBMIT:
      return handleUploadImagesDefineNewFolderSubmit(state)
    case actionTypes.DISMISS_UPLOAD_IMAGES_SUCCESS_NOTICE:
      return handleDismissUploadImagesSuccessNotice()
    case actionTypes.DISMISS_UPLOAD_IMAGES_FAILURE_NOTICE:
      return handleDismissUploadImagesFailureNotice(state)
    case actionTypes.UPLOAD_IMAGES_REMOVE_IMAGE:
      return handleUploadImagesRemoveImage(state, action)
    default:
      return state
  }
}

const handleUploadImagesImageSelection = (state, action) => {
  return {
    ...state,
    filePreviewUrls: action.payload.filePreviewUrls || [],
    invalidFiles: action.payload.invalidFiles || []
  }
}

const handleUploadImagesInvalidFilesNoticeDismissed = (state) => {
  return {
    ...state,
    invalidFiles: []
  }
}

const handleUploadImagesTrigger = (state) => {
  return {
    ...state,
    uploadingImages: true
  }
}

const handleUploadImagesSuccess = (state, action) => {
  return {
    ...state,
    uploadingImages: false,
    invalidFiles: action.payload.invalidFiles,
    filesNotUploaded: action.payload.uploadErrors,
    uploadedFiles: action.payload.uploadedFiles,
    displaySuccessNotification: true
  }
}

const handleUploadImagesFailure = (state, action) => {
  return {
    ...state,
    uploadingImages: false,
    errors: action.payload
  }
}

const handleGetImagesSuccess = (state, action) => {
  const imagesByFolder = generateImagesByFolder(action.payload)
  return {
    ...state,
    folders: Object.keys(imagesByFolder)
  }
}

const handleUploadImagesSelectFolder = (state, action) => {
  return {
    ...state,
    selectedFolder: action.payload || 'default'
  }
}

const handleUploadImagesDefineNewFolderTrigger = (state) => {
  return {
    ...state,
    definingNewFolder: true,
    newFolderName: ''
  }
}

const handleUploadImagesDefineNewFolderCancel = (state) => {
  return {
    ...state,
    definingNewFolder: false
  }
}

const handleUploadImagesDefineNewFolderValueChange = (state, action) => {
  return {
    ...state,
    newFolderName: action.payload
  }
}

const handleUploadImagesDefineNewFolderSubmit = (state) => {
  const { folders, newFolderName } = state
  return {
    ...state,
    definingNewFolder: false,
    folders: [
      ...folders,
      newFolderName
    ],
    selectedFolder: newFolderName,
    newFolderName: ''
  }
}

const handleDismissUploadImagesSuccessNotice = () => {
  return {
    ...initialState
  }
}

const handleDismissUploadImagesFailureNotice = (state) => {
  return {
    ...state,
    errors: []
  }
}

const handleUploadImagesRemoveImage = (state, action) => {
  const { filePreviewUrls } = state
  const index = action.payload

  return {
    ...state,
    filePreviewUrls: [
      ...filePreviewUrls.slice(0, index),
      ...filePreviewUrls.slice(index + 1)
    ]
  }
}

export default uploadImagesReducer
