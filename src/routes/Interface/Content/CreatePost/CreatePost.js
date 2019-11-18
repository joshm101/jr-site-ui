import React, { useEffect, useCallback } from 'react'

import PostForm from '../../../../components/Interface/PostForm'
import { useImagesActions } from '../../../../hooks'

function CreatePost() {
  const { getImagesRoutine } = useImagesActions()
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

export default CreatePost
