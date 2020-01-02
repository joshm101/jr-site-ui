import { createRoutine } from 'redux-saga-routines'

import * as actionTypes from './actionTypes'

export const clearAuthErrors = () => ({
  type: actionTypes.CLEAR_AUTH_ERRORS
})

export const uploadImagesImageSelection = (payload) => ({
  type: actionTypes.UPLOAD_IMAGES_IMAGE_SELECTION,
  payload
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

export const uploadImagesRemoveImage = payload => ({
  type: actionTypes.UPLOAD_IMAGES_REMOVE_IMAGE,
  payload
})

export const dismissUploadImagesSuccessNotice = () => ({
  type: actionTypes.DISMISS_UPLOAD_IMAGES_SUCCESS_NOTICE
})

export const dismissUploadImagesFailureNotice = () => ({
  type: actionTypes.DISMISS_UPLOAD_IMAGES_FAILURE_NOTICE
})

export const dismissCreatePostSuccessNotice = () => ({
  type: actionTypes.DISMISS_CREATE_POST_SUCCESS_NOTICE
})

export const dismissCreatePostFailureNotice = () => ({
  type: actionTypes.DISMISS_CREATE_POST_FAILURE_NOTICE
})

export const showNotification = payload => ({
  type: actionTypes.SHOW_NOTIFICATION,
  payload
})

export const dismissNotification = payload => ({
  type: actionTypes.DISMISS_NOTIFICATION,
  payload
})

export const loginFormSubmittedRoutine = createRoutine('LOGIN_FORM_SUBMITTED')
export const tokenValidityCheckRoutine = createRoutine('TOKEN_VALIDITY_CHECK')
export const getImagesRoutine = createRoutine('GET_IMAGES')
export const uploadImagesRoutine = createRoutine('UPLOAD_IMAGES')
export const createPostRoutine = createRoutine('CREATE_POST')
export const getPostsRoutine = createRoutine('GET_POSTS')
