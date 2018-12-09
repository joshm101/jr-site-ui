import React from 'react'
import PropTypes from 'prop-types'

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

Posts.propTypes = {
  posts: PropTypes.shape({ data: PropTypes.array })
}
Posts.defaultProps = { posts: { data: [] } }

export const PostsNoWrap = Posts
export default withPosts(Posts)
