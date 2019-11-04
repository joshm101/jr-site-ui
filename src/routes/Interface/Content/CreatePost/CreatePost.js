import React, { useEffect } from 'react'

import PostForm from '../../../../components/Interface/PostForm'
import withImagesActions from '../../../../hoc/withImagesActions'

function CreatePost({ getImagesRoutine }) {
  useEffect(() => {
    getImagesRoutine()
  }, [])

  return (
    <>
      <PostForm />
    </>
  )
}

export default withImagesActions(CreatePost)
