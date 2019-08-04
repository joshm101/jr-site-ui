import React from 'react'
import {
  Typography,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  Icon
} from '@material-ui/core'

import withPosts from '../../../../hoc/withPosts'

const ViewPost = ({ match, posts }) => {
  const _id = parseInt(match.params._id)
  const post = posts.data.find(post => post._id === _id)
  return (
    <div
      className="interface-view-post-root interface-subroute-root"
    >
      <Card elevation={0}>
        <CardHeader
          title={
            <Typography variant="h5">{post.title}</Typography>
          }
        />
        <CardContent>
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
        </CardContent>
        <CardActions className="interface-view-post-actions">
          <Button variant="text" color="primary">
            <Icon fontSize="inherit">edit</Icon>&nbsp;&nbsp;Edit
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default withPosts(ViewPost)
