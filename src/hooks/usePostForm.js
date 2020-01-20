import { useSelector, useDispatch } from 'react-redux'

import {
  postFormSubmitRoutine,
  dismissPostFormSubmitFailureNotice
} from '../actions'

function usePostForm() {
  const postFormState = useSelector(state => state.postForm)
  const dispatch = useDispatch()

  const postFormActions = {
    postFormSubmitRoutine: (...args) => dispatch(
      postFormSubmitRoutine(...args)
    ),
    dismissFailureNotice: (...args) => dispatch(
      dismissPostFormSubmitFailureNotice(...args)
    )
  }

  return {
    state: postFormState,
    actions: postFormActions
  }
}

export default usePostForm
