import { combineReducers } from 'redux'

import auth from './auth'
import posts from './posts'
import images from './images'

const rootReducer = combineReducers({
  auth,
  posts,
  images
})

export default rootReducer
