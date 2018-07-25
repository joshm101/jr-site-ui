import React from 'react'

import InterfacePost from '../../../../components/InterfacePost'
import withPosts from '../../../../hoc/withPosts'

import '../index.css'

const Posts = ({ posts }) => (
  <div
    className="interface-posts-container interface-subroute-root"
  >
    {posts.data.length > 0 &&
      posts.data.map((post, index) =>
        <InterfacePost
          key={post._id}
          post={post}
          className={`interface-post-${index}`}
        />
      )
    }
  </div>
)

export default withPosts(Posts)
