import { combineReducers } from 'redux'

import auth from './auth'
import posts from './posts'
import images from './images'
import uploadImages from './upload-images'
import createPost from './create-post'

const rootReducer = combineReducers({
  auth,
  posts,
  images,
  uploadImages,
  createPost
})

export default rootReducer
