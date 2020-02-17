import React, { useEffect, useState } from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import LinearProgress from '@material-ui/core/LinearProgress'
import { makeStyles } from '@material-ui/core/styles'

import PostsListItemContent from './PostsListItemContent'
import PostsListItemActions from './PostsListItemActions'
import NoPostsNotice from './NoPostsNotice'
import DeletePostDialog from '../DeletePostDialog'
import styles from './styles'

import { usePosts } from '../../../hooks'

const useStyles = makeStyles(styles)

function PostsList({ onItemClick }) {
  const [postToDelete, setPostToDelete] = useState(null)
  const classes = useStyles()
  const {
    state,
    actions
  } = usePosts()

  const {
    data: postsData,
    retrievingPosts
  } = state
  const { getPosts } = actions

  useEffect(() => {
    getPosts()
  }, [])

  const onListItemClick = onItemClick

  return (
    <div className={classes.root}>
      {retrievingPosts &&
        <LinearProgress
          color="secondary"
          className={classes.loadingBar}
        />
      }
      {!retrievingPosts && postsData.length > 0 &&
        <List className={classes.list}>
          {postsData.map(post =>
            <ListItem
              key={post._id}
              className={classes.listItem}
              onClick={() => onListItemClick(post)}
              disableGutters
            >
              <PostsListItemContent post={post} />
              <PostsListItemActions
                post={post}
                onDeleteClick={() => setPostToDelete(post)}
              />
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
      {postToDelete &&
        <DeletePostDialog
          post={postToDelete}
          onAction={() => setPostToDelete(null)}
        />
      }
    </div>
  )
}

export default PostsList
