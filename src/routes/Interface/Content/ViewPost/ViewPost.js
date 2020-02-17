import React from 'react'
import PostDetails from '../../../../components/Interface/PostDetails'
import { usePosts } from '../../../../hooks'

const ViewPost = ({ match }) => {
  const { state } = usePosts()
  const { data: posts } = state
  const id = match.params.id
  const post = posts.find(post => post._id === id)

  return (
    <>
      <PostDetails post={post}>
        <PostDetails.Group className="i-view-post-details-title-images">
          <PostDetails.Title />
          <PostDetails.Images />
        </PostDetails.Group>
        <PostDetails.Description />
      </PostDetails>
    </>
  )
}

export default ViewPost
