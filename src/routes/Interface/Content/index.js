import React from 'react'

import withPosts from '../../../hoc/withPosts'
import InterfacePost from '../../../components/InterfacePost'
import './index.css'

const Content = ({ posts }) => (
  <div>
    <h2>Interface content</h2>
    <div className="interface-posts-container">
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
  </div>
)

export default withPosts(Content)
