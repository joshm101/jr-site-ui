import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import auth from './auth'
import posts from './posts'
import images from './images'
import uploadImages from './upload-images'
import createPost from './create-post'
import notifications from './notifications'

const appReducers = {
  auth,
  posts,
  images,
  uploadImages,
  createPost,
  notifications
}

const reducersWithRouter = reducers => history => (
  combineReducers({
    ...reducers,
    router: connectRouter(history)
  })
)

const rootReducer = reducersWithRouter(appReducers)

export default rootReducer
