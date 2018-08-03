import { takeEvery, put, call } from 'redux-saga/effects'

import { getImagesRoutine } from '../../actions'
import * as imagesService from '../../services/images'

/**
 * Submits a request to get images and dispatches
 * a success/failure action based on request result
 * @return {object} Yielded success action
 */
function* getImagesHanlder() {
  try {
    const images = yield call(imagesService.getImages)
    yield put(
      getImagesRoutine.success(images)
    )
  } catch (error) {
    yield put(
      getImagesRoutine.failure([error.message])
    )
  }
}

function* getImagesSaga() {
  yield takeEvery(
    getImagesRoutine.TRIGGER,
    getImagesHanlder
  )
}

export default getImagesSaga
