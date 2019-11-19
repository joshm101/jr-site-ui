import React, { useEffect, useCallback } from 'react'

import PostForm from '../../../../components/Interface/PostForm'
import { useImagesActions, useCreatePost } from '../../../../hooks'

function CreatePost() {
  const { getImagesRoutine } = useImagesActions()
  const initGetImagesRoutine = useCallback(
    () => getImagesRoutine(),
    [getImagesRoutine]
  )

  useEffect(() => {
    initGetImagesRoutine()
  }, [initGetImagesRoutine])

  const { actions } = useCreatePost()
  const { createPostRoutine } = actions

  return (
    <>
      <PostForm onSubmit={createPostRoutine} />
    </>
  )
}

export default CreatePost
