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

import './index.css'

const InterfacePost = ({ post, className }) => (
  <Card elevation={0} className={`interface-post ${className}`}>
    <CardMedia
      image={post.thumbnail}
      className="interface-post-media"
      title={`${post.title}`}
    />
    <CardContent className="interface-post-content">
      <Typography
        variant="subheading"
        className="interface-post-title"
      >
        {post.title}
      </Typography>
    </CardContent>
    <CardActions className="interface-post-actions">
      <Button size="small" variant="flat">
        <Icon fontSize="inherit">visibility</Icon>&nbsp;&nbsp;View Details
      </Button>
      <Button size="small" variant="flat">
        <Icon fontSize="inherit">edit</Icon>&nbsp;&nbsp;Edit
      </Button>
    </CardActions>
  </Card>
)

export default InterfacePost
