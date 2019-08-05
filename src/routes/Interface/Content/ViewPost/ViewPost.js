import React from 'react'
import {
  Button,
  Icon
} from '@material-ui/core'
import ContentContainer from '../ContentContainer'
import ContentHeader from '../ContentHeader'
import PostDetails from '../../../../components/Interface/PostDetails'

import withPosts from '../../../../hoc/withPosts'

const ViewPost = ({ match, posts }) => {
  const _id = parseInt(match.params._id)
  const post = posts.data.find(post => post._id === _id)

  return (
    <>
      <ContentHeader
        title="Post Details"
        action={
          <Button variant="text" size="large" color="secondary">
            <Icon fontSize="inherit">edit</Icon>&nbsp;&nbsp;Edit Post
          </Button>
        }
      />
      <ContentContainer className="interface-view-post-root">
        <PostDetails post={post}>
          <PostDetails.Title />
          <PostDetails.Images />
          <PostDetails.Description />
        </PostDetails>
      </ContentContainer>
    </>
  )
}

export default withPosts(ViewPost)
