import { getPostsRoutine } from '../../actions'

const initialState = {
  data: [],
  meta: {},
  retrievingPosts: false,
  errors: []
}

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case getPostsRoutine.TRIGGER:
      return {
        ...state,
        retrievingPosts: true
      }
    case getPostsRoutine.SUCCESS:
      return {
        ...state,
        retrievingPosts: false,
        data: action.payload.data,
        meta: action.payload.meta
      }
    case getPostsRoutine.FAILURE:
      return {
        ...state,
        retrievingPosts: false,
        errors: action.payload
      }
    default:
      return state
  }
}

export default postsReducer
