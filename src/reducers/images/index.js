import { getImagesRoutine } from '../../actions'

const initialState = {
  retrievingImages: false,
  errors: [],
  data: []
}

const imagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case getImagesRoutine.TRIGGER:
      return handleGetImagesTrigger(state)
    case getImagesRoutine.SUCCESS:
      return handleGetImagesSuccess(state, action)
    case getImagesRoutine.FAILURE:
      return handleGetImagesFailure(state, action)
    default:
      return state
  }
}

const handleGetImagesTrigger = (state) => {
  return {
    ...state,
    retrievingImages: true,
    data: [],
    uploadErrors: [],
    invalidFiles: []
  }
}

const handleGetImagesSuccess = (state, action) => {
  return {
    ...state,
    retrievingImages: false,
    data: action.payload
  }
}

const handleGetImagesFailure = (state, action) => {
  return {
    ...state,
    retrievingImages: false,
    errors: action.payload
  }
}

export default imagesReducer
