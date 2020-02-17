import React, { useState, useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { push } from 'connected-react-router'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import AddIcon from '@material-ui/icons/Add'
import PostsList from '../../../../components/Interface/PostsList'
import PostTypesList from './components/PostTypesList'
import PostTypeFormDialog from '../../../../components/Interface/PostTypeFormDialog'

import {
  postTypeFormSubmitRoutine,
  getPostTypesRoutine
} from '../../../../actions'

function PostsHome({ match }) {
  const postTypeFormState = useSelector(state =>
    state.postTypeForm
  )
  const postTypesState = useSelector(state => state.postTypes)
  const { submitting } = postTypeFormState
  const {
    data: postTypes,
    retrievingPostTypes
  } = postTypesState
  const [showPostTypeForm, setShowPostTypeForm] = useState(false)
  const [postTypeToEdit, setPostTypeToEdit] = useState(null)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPostTypesRoutine())
  }, [])

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

  const onPostTypeFormSubmit = values => {
    dispatch(
      postTypeFormSubmitRoutine({
        data: values,
        id: postTypeToEdit ? postTypeToEdit._id : null
      })
    )

    setShowPostTypeForm(false)
  }

  const onPostTypeEditClick = postType => {
    setPostTypeToEdit(postType)
    setShowPostTypeForm(true)
  }

  const onCreatePostTypeClick = () => {
    setPostTypeToEdit(null)
    setShowPostTypeForm(true)
  }

  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={12} md={7} lg={8}>
          <Card elevation={0}>
            <CardHeader title="Posts" />
            <CardContent>
              <Button
                color="secondary"
                variant="text"
                startIcon={<AddIcon />}
                onClick={onCreatePostClick}
              >
                Create Post
              </Button>
              <br />
              <br />
              <PostsList onItemClick={onPostClick} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={5} lg={4}>
          <Card elevation={0}>
            <CardHeader title="Post Types" />
            <CardContent>
              <Button
                color="secondary"
                variant="text"
                startIcon={<AddIcon />}
                onClick={onCreatePostTypeClick}
              >
                Create Post Type
              </Button>
              <br />
              <br />
              <PostTypesList
                postTypes={postTypes}
                retrievingPostTypes={retrievingPostTypes}
                onEditClick={onPostTypeEditClick}
              />
            </CardContent>
          </Card>
          {(showPostTypeForm || submitting) &&
            <PostTypeFormDialog
              open
              postType={postTypeToEdit}
              onSubmit={onPostTypeFormSubmit}
              onCancel={() => setShowPostTypeForm(false)}
              submitting={submitting}
            />
          }
        </Grid>
      </Grid>
    </>
  )
}

export default PostsHome
