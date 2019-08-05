import React from 'react'
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Typography,
  Icon
} from '@material-ui/core'
import { Link } from 'react-router-dom'

import './index.css'

const Post = ({ post, className }) => (
  <Card elevation={0} className={`interface-post ${className}`}>
    <CardMedia
      image={post.thumbnail}
      className="interface-post-media"
      title={`${post.title}`}
    />
    <CardContent className="interface-post-content">
      <Typography
        variant="subtitle1"
        className="interface-post-title"
      >
        {post.title}
      </Typography>
    </CardContent>
    <CardActions className="interface-post-actions">
      <Link
        to={`/interface/view-post/${post._id}`}
        className="interface-post-link"
      >
        <Button size="small" variant="text">
          <Icon fontSize="inherit">visibility</Icon>
          &nbsp;&nbsp;View Details
        </Button>
      </Link>
      <Button size="small" variant="text">
        <Icon fontSize="inherit">edit</Icon>
        &nbsp;&nbsp;Edit
      </Button>
    </CardActions>
  </Card>
)

export default Post
