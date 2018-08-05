import { takeEvery, call, put } from 'redux-saga/effects'

import { uploadImagesRoutine } from '../../actions'
import * as imagesService from '../../services/images'
import fileHandlerServiceCreator
  from '../../services/images/fileHandlerService'

const fileHandlerService = fileHandlerServiceCreator()

function* handleUploadImages(action) {
  const images = fileHandlerService.getFiles()
  const folder = action.payload || 'default'
  try {
    const result = yield call(
      imagesService.uploadImages,
      images, folder
    )
    fileHandlerService.setFiles([])
    yield put(
      uploadImagesRoutine.success(result)
    )
  } catch (error) {
    yield put(
      uploadImagesRoutine.failure([error])
    )
  }
}

function* uploadImagesSaga() {
  yield takeEvery(
    uploadImagesRoutine.TRIGGER,
    handleUploadImages
  )
}

export default uploadImagesSaga
