import React, { useEffect } from 'react'
import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress'
import { makeStyles } from '@material-ui/core/styles'

import PostForm from '../../../../components/Interface/PostForm'

import { usePosts, useImagesActions } from '../../../../hooks'

import styles from './styles'

const useStyles = makeStyles(styles)

function EditPost(props) {
  const classes = useStyles()
  const { match } = props
  const { id } = match.params

  const { getImagesRoutine } = useImagesActions()
  const { actions, state } = usePosts()
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

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Edit Post
      </Typography>
      <div className={classes.contentRoot}>
        {!retrievingPosts && postToEdit &&
          <div className={classes.form}>
            <PostForm post={postToEdit} />
          </div>
        }
        {retrievingPosts &&
          <CircularProgress color="secondary" />
        }
      </div>
    </div>
  )
}

export default EditPost
