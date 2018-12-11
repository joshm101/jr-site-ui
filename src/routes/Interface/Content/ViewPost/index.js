import React from 'react'
import PropTypes from 'prop-types'
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

const defaultPost = {
  title: '',
  thumbnail: '',
  description: ''
}

const ViewPost = ({ match, posts }) => {
  const _id = parseInt(match.params._id)
  const post = posts.data.find(post => post._id === _id) || defaultPost
  return (
    <div
      className="interface-view-post-root interface-subroute-root"
    >
      <Card elevation={0}>
        <CardHeader
          title={
            <Typography variant="headline">{post.title}</Typography>
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
          <Button variant="flat" color="primary">
            <Icon fontSize="inherit">edit</Icon>&nbsp;&nbsp;Edit
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}

ViewPost.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      _id: PropTypes.string
    })
  }),
  posts: PropTypes.shape({ data: PropTypes.array })
}
ViewPost.defaultProps = {
  match: { params: { _id: '' } },
  posts: { data: [] }
}

export const ViewPostNoWrap = ViewPost
export default withPosts(ViewPost)
