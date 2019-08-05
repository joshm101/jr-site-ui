import React from 'react'
import {
  Typography,
  Button,
  Icon
} from '@material-ui/core'
import ContentContainer from '../ContentContainer'

import withPosts from '../../../../hoc/withPosts'

const ViewPost = ({ match, posts }) => {
  const _id = parseInt(match.params._id)
  const post = posts.data.find(post => post._id === _id)
  return (
    <ContentContainer className="interface-view-post-root">
      <Typography variant="h3" color="textPrimary">
        {post.title}
      </Typography>
      <div className="interface-view-post-images">
        <div className="interface-view-post-thumbnail">
          <img src={post.thumbnail} />
        </div>
      </div>
      <div className="interface-view-post-description">
        <Typography>
          {post.description}
        </Typography>
      </div>
      <Button variant="text" color="primary">
        <Icon fontSize="inherit">edit</Icon>&nbsp;&nbsp;Edit
      </Button>
    </ContentContainer>
  )
}

export default withPosts(ViewPost)
