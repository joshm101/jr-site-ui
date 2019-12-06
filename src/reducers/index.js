import { combineReducers } from 'redux'

import auth from './auth'
import posts from './posts'
import images from './images'
import uploadImages from './upload-images'
import createPost from './create-post'
import notifications from './notifications'

const rootReducer = combineReducers({
  auth,
  posts,
  images,
  uploadImages,
  createPost,
  notifications
})

export default rootReducer
