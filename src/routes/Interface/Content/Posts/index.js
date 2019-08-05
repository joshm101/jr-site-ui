import React from 'react'

import InterfacePost from '../../../../components/InterfacePost'
import ContentContainer from '../ContentContainer'
import withPosts from '../../../../hoc/withPosts'

import '../index.css'

const Posts = ({ posts }) => (
  <ContentContainer className="interface-posts-container">
    {posts.data.length > 0 &&
      posts.data.map((post, index) =>
        <InterfacePost
          key={post._id}
          post={post}
          className={`interface-post-${index}`}
        />
      )
    }
  </ContentContainer>
)

export default withPosts(Posts)
