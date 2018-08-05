import { createRoutine } from 'redux-saga-routines'

import * as actionTypes from './actionTypes'

export const authErrorsDismissed = () => ({
  type: actionTypes.AUTH_ERRORS_DISMISSED
})

export const uploadImagesImageSelection = (payload) => ({
  type: actionTypes.UPLOAD_IMAGES_IMAGE_SELECTION,
  payload
})

export const uploadImagesInvalidFilesNoticeDismissed = () => ({
  type: actionTypes.UPLOAD_IMAGES_INVALID_FILES_NOTICE_DISMISSED
})

export const uploadImagesSelectFolder = (payload) => ({
  type: actionTypes.UPLOAD_IMAGES_SELECT_FOLDER,
  payload
})

export const uploadImagesDefineNewFolderTrigger = () => ({
  type: actionTypes.UPLOAD_IMAGES_DEFINE_NEW_FOLDER_TRIGGER
})

export const uploadImagesDefineNewFolderValueChange = (payload) => ({
  type: actionTypes.UPLOAD_IMAGES_DEFINE_NEW_FOLDER_VALUE_CHANGE,
  payload
})

export const uploadImagesDefineNewFolderSubmit = () => ({
  type: actionTypes.UPLOAD_IMAGES_DEFINE_NEW_FOLDER_SUBMIT
})

export const uploadImagesDefineNewFolderCancel = () => ({
  type: actionTypes.UPLOAD_IMAGES_DEFINE_NEW_FOLDER_CANCEL
})

export const dismissUploadImagesSuccessNotice = () => ({
  type: actionTypes.DISMISS_UPLOAD_IMAGES_SUCCESS_NOTICE
})

export const dismissUploadImagesFailureNotice = () => ({
  type: actionTypes.DISMISS_UPLOAD_IMAGES_FAILURE_NOTICE
})

export const loginFormSubmittedRoutine = createRoutine('LOGIN_FORM_SUBMITTED')
export const tokenValidityCheckRoutine = createRoutine('TOKEN_VALIDITY_CHECK')
export const getImagesRoutine = createRoutine('GET_IMAGES')
export const uploadImagesRoutine = createRoutine('UPLOAD_IMAGES')
