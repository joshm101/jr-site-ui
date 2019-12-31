import React, { useEffect } from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import LinearProgress from '@material-ui/core/LinearProgress'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

import PostsListItemContent from './PostsListItemContent'
import PostsListItemActions from './PostsListItemActions'
import NoPostsNotice from './NoPostsNotice'
import styles from './styles'

import { usePosts } from '../../../hooks'

const useStyles = makeStyles(styles)

function PostsList() {
  const classes = useStyles()
  const {
    state,
    actions
  } = usePosts()

  const {
    data: postsData,
    retrievingPosts
  } = state
  const { getPosts, viewPost } = actions

  useEffect(() => {
    getPosts()
  }, [])

  const onListItemClick = post => {
    viewPost(post._id)
  }

  return (
    <>
      {retrievingPosts &&
        <LinearProgress color="secondary" />
      }
      {!retrievingPosts && postsData.length > 0 &&
        <List>
          {postsData.map(post =>
            <ListItem
              key={post._id}
              className={classes.listItem}
              onClick={() => onListItemClick(post)}
            >
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
      }
      {!retrievingPosts && postsData.length === 0 &&
        <NoPostsNotice>
          <NoPostsNotice.Label
            className={classes.noPostsNoticeLabel}
          >
            No posts found
          </NoPostsNotice.Label>

          <NoPostsNotice.Action>
            Create Post
          </NoPostsNotice.Action>
        </NoPostsNotice>
      }
    </>
  )
}

export default PostsList
