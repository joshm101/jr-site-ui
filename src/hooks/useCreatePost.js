import { useSelector, useDispatch } from 'react-redux'

import {
  createPostRoutine,
  dismissCreatePostSuccessNotice,
  dismissCreatePostFailureNotice
} from '../actions'

function useCreatePost() {
  const createPostState = useSelector(state => state.createPost)
  const dispatch = useDispatch()

  const createPostActions = {
    createPostRoutine: (...args) => dispatch(
      createPostRoutine(...args)
    ),
    dismissSuccessNotice: (...args) => dispatch(
      dismissCreatePostSuccessNotice(...args)
    ),
    dismissFailureNotice: (...args) => dispatch(
      dismissCreatePostFailureNotice(...args)
    )
  }

  return {
    state: createPostState,
    actions: createPostActions
  }
}

export default useCreatePost
