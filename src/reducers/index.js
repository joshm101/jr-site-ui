import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import auth from './auth'
import posts from './posts'
import images from './images'
import uploadImages from './upload-images'
import postForm from './post-form'
import notifications from './notifications'
import deletePost from './delete-post'

const appReducers = {
  auth,
  posts,
  images,
  uploadImages,
  postForm,
  notifications,
  deletePost
}

const reducersWithRouter = reducers => history => (
  combineReducers({
    ...reducers,
    router: connectRouter(history)
  })
)

const createRootReducer = reducersWithRouter(appReducers)

export default createRootReducer
