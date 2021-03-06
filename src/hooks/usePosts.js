import { useSelector, useDispatch } from 'react-redux'
import { push } from 'connected-react-router'
import { getPostsRoutine } from '../actions'

import { ROUTES } from '../routes/routes.constants'

function usePosts() {
  const dispatch = useDispatch()
  const postsState = useSelector(state => state.posts)

  const { INTERFACE_ROUTES, INTERFACE } = ROUTES
  const { POSTS } = INTERFACE_ROUTES

  const postsActions = {
    getPosts: (...args) => dispatch(
      getPostsRoutine(...args)
    ),
    viewPost: postId => dispatch(
      push(`${INTERFACE}/${POSTS}/${postId}`)
    ),
    editPost: postId => dispatch(
      push(`/${INTERFACE}/${POSTS}/edit/${postId}`)
    )
  }

  return {
    state: postsState,
    actions: postsActions
  }
}

export default usePosts
