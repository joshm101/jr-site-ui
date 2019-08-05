import React from 'react'
import {
  Button,
  Icon
} from '@material-ui/core'
import ContentContainer from '../ContentContainer'
import PostDetails from '../../../../components/Interface/PostDetails'

import withPosts from '../../../../hoc/withPosts'

const ViewPost = ({ match, posts }) => {
  const _id = parseInt(match.params._id)
  const post = posts.data.find(post => post._id === _id)
  return (
    <ContentContainer className="interface-view-post-root">
      <PostDetails post={post}>
        <PostDetails.Title />
        <PostDetails.Images />
        <PostDetails.Description />
      </PostDetails>
      <Button variant="text" color="secondary">
        <Icon fontSize="inherit">edit</Icon>&nbsp;&nbsp;Edit
      </Button>
    </ContentContainer>
  )
}

export default withPosts(ViewPost)
