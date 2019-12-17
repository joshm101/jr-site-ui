import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Grid from '@material-ui/core/Grid'

import PostsListItemContent from './PostsListItemContent'
import PostsListItemActions from './PostsListItemActions'

import { usePosts } from '../../../hooks'

function PostsList() {
  const postsState = usePosts()
  const { data: posts } = postsState

  return (
    <List>
      {posts.map(post =>
        <ListItem key={post._id}>
          <Grid container alignItems="center">
            <Grid item xs={9}>
              <PostsListItemContent post={post} />
            </Grid>
            <Grid item xs={3}>
              <PostsListItemActions />
            </Grid>
          </Grid>
        </ListItem>
      )}
    </List>
  )
}

export default PostsList
