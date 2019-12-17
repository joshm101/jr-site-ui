import React from 'react'

import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'

function PostsListItemContent({ post }) {
  const truncateText = maxLength => string => {
    if (string.length <= maxLength) {
      return string
    }

    return `${string.slice(0, maxLength + 1).trim()}...`
  }

  const truncateDescription = truncateText(42)
  const truncateTitle = truncateText(15)

  return (
    <Grid container alignItems="center" spacing={1}>
      <Grid
        item
        container
        justify="center"
        xs={3}
        sm={2}
        md={1}
      >
        <Avatar src={post.thumbnailImage} />
      </Grid>
      <Grid
        item
        container
        xs={9}
        sm={10}
        md={11}
      >
        <Grid item xs={12}>
          <Typography variant="body1">
            {truncateTitle(post.title)}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2">
            {truncateDescription(post.description)}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default PostsListItemContent
