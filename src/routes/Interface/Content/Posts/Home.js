import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { push } from 'connected-react-router'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import PostsList from '../../../../components/Interface/PostsList'

function PostsHome({ match }) {
  const dispatch = useDispatch()

  const onPostClick = useCallback((post) => {
    dispatch(
      push(`${match.path}/${post._id}`)
    )
  }, [dispatch, match, push])

  const onCreatePostClick = useCallback(() => {
    dispatch(
      push(`${match.path}/create`)
    )
  }, [dispatch, match.path])

  return (
    <>
      <Button
        color="secondary"
        variant="outlined"
        startIcon={<AddIcon />}
        onClick={onCreatePostClick}
      >
        Create Post
      </Button>
      <br />
      <br />
      <PostsList onItemClick={onPostClick} />
    </>
  )
}

export default PostsHome
