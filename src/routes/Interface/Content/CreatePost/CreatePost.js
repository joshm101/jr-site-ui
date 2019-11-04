import React, { useEffect, useCallback } from 'react'

import PostForm from '../../../../components/Interface/PostForm'
import withImagesActions from '../../../../hoc/withImagesActions'

function CreatePost({ getImagesRoutine }) {
  const initGetImagesRoutine = useCallback(
    () => getImagesRoutine(),
    [getImagesRoutine]
  )

  useEffect(() => {
    initGetImagesRoutine()
  }, [initGetImagesRoutine])

  return (
    <>
      <PostForm />
    </>
  )
}

export default withImagesActions(CreatePost)
