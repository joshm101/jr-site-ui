import { useSelector, useDispatch } from 'react-redux'
import { getPostsRoutine } from '../actions'

function usePosts() {
  const dispatch = useDispatch()
  const postsState = useSelector(state => state.posts)

  const postsActions = {
    getPosts: (...args) => dispatch(
      getPostsRoutine(...args)
    )
  }

  return {
    state: postsState,
    actions: postsActions
  }
}

export default usePosts
