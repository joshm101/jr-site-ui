import React, { useEffect, useCallback } from 'react'

import PostForm, {
  ErrorDialog,
  ErrorDialogTitle,
  ErrorDialogContent
} from '../../../../components/Interface/PostForm'
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
      <ErrorDialog>
        <ErrorDialogTitle>
          Create Post Error
        </ErrorDialogTitle>
        <ErrorDialogContent>
          An error occurred while creating the post.
          Please check your connection and try again.
        </ErrorDialogContent>
      </ErrorDialog>
    </>
  )
}

export default CreatePost
