import { combineReducers } from 'redux'

import auth from './auth'
import posts from './posts'
import images from './images'
import uploadImages from './upload-images'

const rootReducer = combineReducers({
  auth,
  posts,
  images,
  uploadImages
})

export default rootReducer
