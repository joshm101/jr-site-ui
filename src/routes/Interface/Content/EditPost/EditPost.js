import React, { useEffect } from 'react'
import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress'
import { makeStyles } from '@material-ui/core/styles'

import PostForm, {
  ErrorDialog,
  ErrorDialogContent,
  ErrorDialogTitle
} from '../../../../components/Interface/PostForm'
import PostNotFoundNotice from './PostNotFoundNotice'

import {
  usePosts,
  useImagesActions,
  usePostForm
} from '../../../../hooks'

import styles from './styles'

const useStyles = makeStyles(styles)

function EditPost(props) {
  const classes = useStyles()
  const { match } = props
  const { id } = match.params

  const { getImagesRoutine } = useImagesActions()
  const { actions, state } = usePosts()
  const { actions: postFormActions } = usePostForm()
  const { getPosts } = actions
  const { data: posts, retrievingPosts } = state

  const postToEdit = posts.find(post => post._id === id)

  useEffect(() => {
    getImagesRoutine()
  }, [getImagesRoutine])

  useEffect(() => {
    getPosts({
      query: { id }
    })
  }, [id])

  const { postFormSubmitRoutine } = postFormActions

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Edit Post
      </Typography>
      <div className={classes.contentRoot}>
        {!retrievingPosts && postToEdit &&
          <div className={classes.form}>
            <PostForm
              post={postToEdit}
              onSubmit={data =>
                postFormSubmitRoutine({ id, ...data })
              }
            />
          </div>
        }
        {retrievingPosts &&
          <CircularProgress color="secondary" />
        }
        {!retrievingPosts && !postToEdit &&
          <PostNotFoundNotice />
        }
      </div>
      <ErrorDialog>
        <ErrorDialogTitle>Update Post Error</ErrorDialogTitle>
        <ErrorDialogContent>
          An error occurred while updating the post.
          Please check your connection and try again.
        </ErrorDialogContent>
      </ErrorDialog>
    </div>
  )
}

export default EditPost
