import { useDispatch } from 'react-redux'

import { getImagesRoutine } from '../actions'

function useImagesActions() {
  const dispatch = useDispatch()

  return {
    getImagesRoutine: () => dispatch(getImagesRoutine())
  }
}

export default useImagesActions
