import React from 'react'

import Post from '../../../../components/Interface/Post'
import ContentContainer from '../ContentContainer'
import { usePosts } from '../../../../hooks'

import '../index.css'

function Posts() {
  const posts = usePosts()

  return (
    <ContentContainer className="interface-posts-container">
      {posts.data.length > 0 &&
        posts.data.map((post, index) =>
          <Post
            key={post._id}
            post={post}
            className={`interface-post-${index}`}
          />
        )
      }
    </ContentContainer>
  )
}

export default Posts
