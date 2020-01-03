import React, { useEffect } from 'react'
import Typography from '@material-ui/core/Typography'

import PostForm from '../../../../components/Interface/PostForm'

import { usePosts, useImagesActions } from '../../../../hooks'

function EditPost(props) {
  const { match } = props
  const { id } = match.params

  const { getImagesRoutine } = useImagesActions()
  const { actions, state } = usePosts()
  const { getPosts } = actions
  const { data: posts, retrievingPosts } = state

  const postToEdit = posts.find(post => post._id === id)

  useEffect(() => {
    getImagesRoutine()
  }, [getImagesRoutine])

  useEffect(() => {
    getPosts({
      query: { id }
    })
  }, [id])

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Edit Post
      </Typography>
      {!retrievingPosts && postToEdit &&
        <PostForm post={postToEdit} />
      }
    </div>
  )
}

export default EditPost
